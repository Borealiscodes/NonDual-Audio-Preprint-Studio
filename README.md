# Academic and Audio Experiments

Hedling, B. S. (2026). From Robotic Screen-Reader Telemetry to Embodied Neural Cadence: A Narrative & Empirical Chronicle of Guardrails, CLI Flag Literalism, and Dual-Voice VITS Synthesis Under Edge Constraints. Zenodo. https://doi.org/10.5281/zenodo.24399123

---

> ### ✅ RELEASE v1.0.0 — SPOKEN-WORD PREPRINT STUDIO & ANTI-SYCOPHANCY LINTER (EXPERIMENTAL)
> **Status:** `v1.0.0` Verified Guardrails • ARM64 / Termux Ready  
> **Primary Target Preprint:** Hedling, B. S. (2026). *Beyond Bolted-On Screen Readers* (Zenodo [`DOI: 10.5281/zenodo.24393275`](https://doi.org))  
> **🪞 Meta-Irony Note:** The companion markdown files (`docs/why-structured-guardrails-matter-even-with-synthetic-voices.md` and `tiles/bill-nye-phonetics-and-guardrails-explainer.md`) are currently text-only as we explore warm, embodied narration without AI flattery.

# 🎙️ Non-Dual Audio Preprint Studio

An open, zero-dependency audio-essay studio and deterministic script linter translating written research preprints into two-speaker dialogue for accessible listening. Features Unicode phonetic locking, a zero-flattery linting engine, and structured multi-register voice balancing.

## 🙏 Gratitude & Lineage

Special thanks to **Flyxion (`@standardgalactic`)** for pioneering research-projection directions and addressing spoken-word AI failure modes like phonetic drift and sycophantic ego-inflation.

## 📖 Companion Analytical Notes (Text-Only)

* **Analytical Note:** `docs/why-structured-guardrails-matter-even-with-synthetic-voices.md`
* **Plain-Language Explainer:** `tiles/bill-nye-phonetics-and-guardrails-explainer.md`

## 🛡️ Deterministic Guardrails

1. **Unicode Phonetic Lock (`src/phonetic-guard.js`):** Normalizes terms (e.g., `Flyxion` $\to$ `FLIK-shun`, `rasa-darśan` $\to$ `RAH-sah DAR-shahn`) prior to playback.
2. **Zero-Flattery Linter (`src/anti-sycophancy-linter.js`):** Blocks empty praise terms and requires at least two explicit analytical limitations.
3. **Six-Register Structural Alternation:** Balances grounded sensory ecology (Speaker A) with critical evaluation of environmental barriers (Speaker B).

## 📚 Proven Repositories & Projects for Embodied Readings

* **LibriVox Open-Domain Human Audiobooks:** [://github.com](https://://github.com) — Human narration benchmark for warmth and cadence.
* **Piper Fast Local Neural TTS:** [://github.com](https://://github.com) — Offline neural text-to-speech for ARM64/Linux.
* **Coqui TTS:** [://github.com](https://://github.com) — Expressive deep-learning speech synthesis toolkit.
* **Thorium Reader:** [://github.com](https://://github.com) — Accessible EPUB/audiobook desktop reader with screen-reader and Braille support.
* **Narrator / EPUB to Audiobook:** [://github.com](https://://github.com) — Chapter-by-chapter audiobook conversion workflows.

## 📁 Structure & Quickstart

Includes `index.html`, `style.css`, `scripts/zenodo-24393275-dialogue.json`, and automated test suites in `test/audio-guardrails.test.mjs`.

```bash
node --test test/audio-guardrails.test.mjs
python3 -m http.server 8089 --bind 127.0.0.1
```
