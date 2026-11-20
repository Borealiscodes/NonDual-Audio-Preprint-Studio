/**
 * test/audio-guardrails.test.mjs — Automated Verification of Phonetic Locks & Zero-Flattery Linter
 * Run: node --test test/audio-guardrails.test.mjs
 *
 * Signed-off-by: Borealis Serenity Hedling <chguard-sentinel@vaked.dev>
 */

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

import { normalizeForSpeech } from "../src/phonetic-guard.js";
import { lintDialogueScript } from "../src/anti-sycophancy-linter.js";

test("1. Phonetic Guard Normalizes Flyxion & Sanskrit/Japanese Terms for TTS", () => {
  const raw = "Inspired by Flyxion, this explores rasa-darśan, Tōrō lanterns, and Bonshō bells.";
  const spoken = normalizeForSpeech(raw);
  assert.ok(spoken.includes("FLIK-shun"));
  assert.ok(spoken.includes("RAH-sah DAR-shahn"));
  assert.ok(spoken.includes("TOH-roh"));
  assert.ok(spoken.includes("BON-shoh"));
});

test("2. Anti-Sycophancy Linter Rejects Empty Flattery & Missing Limitations", () => {
  const sycophantic = lintDialogueScript({
    limitations: ["Only one limitation listed."],
    turns: [{ speaker: "Speaker A", text: "This groundbreaking masterpiece is pure genius!" }],
  });
  assert.equal(sycophantic.valid, false);
  assert.ok(sycophantic.errors.length >= 3);
});

test("3. DOI 10.5281/zenodo.24393275 Dialogue Script Passes All Guardrails", () => {
  const doc = JSON.parse(fs.readFileSync(new URL("../scripts/zenodo-24393275-dialogue.json", import.meta.url), "utf8"));
  const result = lintDialogueScript(doc);
  assert.equal(result.valid, true, result.errors.join("; "));
});
