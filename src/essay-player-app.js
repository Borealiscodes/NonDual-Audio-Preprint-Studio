/**
 * src/essay-player-app.js — Dual-Register Spoken-Word Player & <= 780 Hz Stillness Bed
 * Plays two-speaker analytical dialogue with phonetic normalization, deliberate Zen pauses,
 * live transcript highlighting, and a gentle low-pass filtered WebAudio ambient bed.
 *
 * Signed-off-by: Borealis Serenity Hedling <chguard-sentinel@vaked.dev>
 */

import { normalizeForSpeech } from "./phonetic-guard.js";
import { lintDialogueScript } from "./anti-sycophancy-linter.js";

function createStillnessBed() {
  let ctx = null;
  let gainNode = null;
  let active = false;

  const toggle = () => {
    active = !active;
    if (active) {
      if (!ctx && typeof window !== "undefined") {
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) return false;
        ctx = new Ctor();

        const len = ctx.sampleRate * 3;
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const data = buf.getChannelData(0);
        let last = 0;
        for (let i = 0; i < len; i++) {
          const w = Math.random() * 2 - 1;
          last = (last + 0.03 * w) / 1.03;
          data[i] = last * 2.4;
        }

        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.loop = true;

        const lp = ctx.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.setValueAtTime(680, ctx.currentTime);

        gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.035, ctx.currentTime);

        src.connect(lp);
        lp.connect(gainNode);
        gainNode.connect(ctx.destination);
        src.start();
      }
      if (ctx && ctx.state === "suspended") ctx.resume();
      if (gainNode && ctx) gainNode.gain.setTargetAtTime(0.035, ctx.currentTime, 0.25);
    } else if (gainNode && ctx) {
      gainNode.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.2);
    }
    return active;
  };

  return { toggle };
}

async function initStudio() {
  const statusEl = document.getElementById("studio-status");
  const lintBadgeEl = document.getElementById("lint-badge");
  const liveSubtitleEl = document.getElementById("live-subtitle");
  const transcriptListEl = document.getElementById("transcript-list");
  const limitationsListEl = document.getElementById("limitations-list");

  const playBtn = document.getElementById("btn-play");
  const stopBtn = document.getElementById("btn-stop");
  const bedBtn = document.getElementById("btn-bed");

  const bed = createStillnessBed();
  let scriptDoc = null;
  let playing = false;
  let pauseTimer = null;

  try {
    const res = await fetch("scripts/zenodo-24393275-dialogue.json");
    scriptDoc = await res.json();
  } catch (err) {
    if (statusEl) statusEl.textContent = "Error loading dialogue script: " + err.message;
    return;
  }

  const lint = lintDialogueScript(scriptDoc);
  if (lintBadgeEl) {
    lintBadgeEl.textContent = lint.valid
      ? "Guardrails: PASS (0 Flattery • " + scriptDoc.limitations.length + " Limitations)"
      : "Guardrails: FAIL (" + lint.errors.join("; ") + ")";
  }

  if (limitationsListEl && Array.isArray(scriptDoc.limitations)) {
    limitationsListEl.innerHTML = "";
    for (const lim of scriptDoc.limitations) {
      const li = document.createElement("li");
      li.textContent = lim;
      limitationsListEl.appendChild(li);
    }
  }

  const turnElements = [];
  if (transcriptListEl) {
    transcriptListEl.innerHTML = "";
    scriptDoc.turns.forEach((turn, idx) => {
      const card = document.createElement("article");
      card.className = "turn-card";
      card.innerHTML =
        `<div class="turn-meta"><strong>${turn.speaker}</strong> · <span>${turn.registers.join(" + ")}</span></div>` +
        `<p>${turn.text}</p>`;
      transcriptListEl.appendChild(card);
      turnElements.push(card);
    });
  }

  const stopPlayback = () => {
    playing = false;
    if (pauseTimer) {
      window.clearTimeout(pauseTimer);
      pauseTimer = null;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    turnElements.forEach((el) => el.classList.remove("active-turn"));
    if (statusEl) statusEl.textContent = "Playback stopped.";
  };

  const playTurnAt = (index) => {
    if (!playing || index >= scriptDoc.turns.length) {
      playing = false;
      turnElements.forEach((el) => el.classList.remove("active-turn"));
      if (statusEl) statusEl.textContent = "Dialogue complete.";
      return;
    }

    const turn = scriptDoc.turns.at(index);
    turnElements.forEach((el, i) => el.classList.toggle("active-turn", i === index));
    if (liveSubtitleEl) liveSubtitleEl.textContent = `${turn.speaker}: ${turn.text}`;
    if (statusEl) statusEl.textContent = `Speaking Turn ${index + 1} of ${scriptDoc.turns.length} (${turn.speaker})`;

    const spokenText = normalizeForSpeech(turn.text);
    if (!("speechSynthesis" in window)) {
      pauseTimer = window.setTimeout(() => playTurnAt(index + 1), 3500);
      return;
    }

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(spokenText);
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 1) {
      utter.voice = index % 2 === 0 ? voices.at(0) : voices.at(1);
    }
    // Distinct calm pitch & unhurried cadence per speaker
    utter.rate = index % 2 === 0 ? 0.90 : 0.86;
    utter.pitch = index % 2 === 0 ? 0.96 : 1.04;

    utter.onend = () => {
      if (!playing) return;
      pauseTimer = window.setTimeout(() => playTurnAt(index + 1), turn.pauseAfterMs || 900);
    };
    utter.onerror = () => {
      if (!playing) return;
      pauseTimer = window.setTimeout(() => playTurnAt(index + 1), 1200);
    };

    window.speechSynthesis.speak(utter);
  };

  playBtn?.addEventListener("click", () => {
    stopPlayback();
    playing = true;
    playTurnAt(0);
  });

  stopBtn?.addEventListener("click", stopPlayback);

  bedBtn?.addEventListener("click", () => {
    const on = bed.toggle();
    bedBtn.textContent = on ? "🌊 Stillness Bed (<= 680 Hz): ON" : "🌊 Stillness Bed: OFF";
  });
}

window.addEventListener("DOMContentLoaded", initStudio);
