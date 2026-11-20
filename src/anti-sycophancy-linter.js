/**
 * src/anti-sycophancy-linter.js — Zero-Flattery & Limitation Quota Linter
 * Rejects empty AI praise adjectives and requires explicit discussion of limitations.
 *
 * Signed-off-by: Borealis Serenity Hedling <chguard-sentinel@vaked.dev>
 */

export const BANNED_FLATTERY_WORDS = Object.freeze([
  "brilliant",
  "groundbreaking",
  "revolutionary",
  "masterpiece",
  "genius",
  "game-changing",
  "flawless",
  "unparalleled",
]);

export function lintDialogueScript(scriptDoc) {
  const errors = [];

  if (!scriptDoc || !Array.isArray(scriptDoc.turns) || scriptDoc.turns.length === 0) {
    return { valid: false, errors: ["Script must contain a non-empty turns array."] };
  }

  const limitations = Array.isArray(scriptDoc.limitations) ? scriptDoc.limitations : [];
  if (limitations.length < 2) {
    errors.push(`Expected at least 2 explicit limitations; found ${limitations.length}.`);
  }

  for (let i = 0; i < scriptDoc.turns.length; i++) {
    const turn = scriptDoc.turns.at(i);
    const lower = String(turn.text ?? "").toLowerCase();
    for (const banned of BANNED_FLATTERY_WORDS) {
      if (new RegExp(`\\b${banned}\\b`, "i").test(lower)) {
        errors.push(`Turn ${i + 1} (${turn.speaker}) contains banned flattery term: "${banned}".`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
