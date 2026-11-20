/**
 * src/phonetic-guard.js — Deterministic TTS Phonetic Normalizer
 * Prevents text-to-speech engines from mispronouncing handles and philosophical terms.
 *
 * Signed-off-by: Borealis Serenity Hedling <chguard-sentinel@vaked.dev>
 */

export const PHONETIC_LEXICON = Object.freeze([
  { term: "Flyxion", spoken: "FLIK-shun" },
  { term: "rasa-darśan", spoken: "RAH-sah DAR-shahn" },
  { term: "Rasa-Darśan", spoken: "RAH-sah DAR-shahn" },
  { term: "Tōrō", spoken: "TOH-roh" },
  { term: "Bonshō", spoken: "BON-shoh" },
  { term: "Tsukubai", spoken: "TSOO-koo-bye" },
  { term: "Iwakura", spoken: "ee-WAH-koo-rah" },
  { term: "Hakuin", spoken: "HAH-koo-een" },
  { term: "Huineng", spoken: "HWAY-nung" },
  { term: "sumi-e", spoken: "SOO-mee-eh" },
  { term: "koan", spoken: "KOH-ahn" },
]);

export function normalizeForSpeech(text, lexicon = PHONETIC_LEXICON) {
  let out = String(text ?? "");
  for (const entry of lexicon) {
    const escaped = entry.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replace(new RegExp(`\\b${escaped}\\b`, "g"), entry.spoken);
  }
  return out;
}
