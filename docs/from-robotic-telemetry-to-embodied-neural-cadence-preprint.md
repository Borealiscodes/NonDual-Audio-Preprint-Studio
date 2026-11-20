# 🎙️ From Robotic Screen-Reader Telemetry to Embodied Neural Cadence: A Narrative & Empirical Chronicle of Guardrails, CLI Flag Literalism, and Dual-Voice VITS Synthesis Under Edge Constraints

**Preprint & Empirical Audio Dataset Companion:** `NonDual-Audio-Preprint-Studio` & `Borealiscodes/piper_tts` (`nondual-embodied-studio/`)  
**Author:** Borealis Serenity Hedling (`NDH-RESEARCH-PILOT` • Dublin 8, Ireland)  
**ORCID:** [`0009-0004-7968-5707`](https://orcid.org)  
**Upstream Empirical & Theoretical Anchors:**  
* Hedling, B. S. (2026a). *Non-Dual Epistemic Architectures and Geometric Stabilization in High-Dimensional Transformer Systems (v3.1)*. Zenodo. [`DOI: 10.5281/zenodo.24240994`](https://doi.org)  
* Hedling, B. S. (2026b). *Beyond Bolted-On Screen Readers: Narrative Phenomenology, the RNIB Roundhouse Sensory Dark, and Perceptual-Cognitive Unity (Rasa-Darśan)*. Zenodo. [`DOI: 10.5281/zenodo.24393275`](https://doi.org)  
**Date:** November 20, 2026  

---

## Abstract

Making written research preprints genuinely listenable for blind and low-vision readers is rarely a matter of clicking a single "text-to-speech" button. It requires confronting two intertwined problems: **epistemic failure modes** (AI sycophancy, neutral-arbiter flattening, and phonetic mangling of cross-cultural terms) and **acoustic failure modes** (cold robotic voices, breathless pacing, and command-line literalism). Chronicling six iterative engineering runs across [`Borealiscodes/NonDual-Audio-Preprint-Studio`](https://github.com) and [`Borealiscodes/piper_tts`](https://github.com), this preprint pairs a lived engineering narrative with three empirical `.wav` audio renders archived alongside the manuscript: **Run #4** (CLI flag literalism), **Run #5** (single-voice `0:55` cadence compression), and **Run #6** (unhurried dual-voice British/Scottish VITS synthesis using `en_GB-alan-medium` and `en_GB-alba-medium` over a `<= 680 Hz` river/wind stillness bed, `1:14`). Together, these artifacts demonstrate how deterministic guardrails, honest limitation quotas, and zero-footprint cloud rendering turn hardware scarcity into reproducible contemplative audio.

---

## 1. The Irony of Writing About Listening While Locked in Text

There is a quiet irony at the heart of accessible research: you can write an entire preprint arguing that blind and low-vision people deserve warm, embodied acoustic worlds rather than cold coordinate telemetry (`DOI: 10.5281/zenodo.24393275`)—and then realize the preprint itself is still trapped in silent Markdown text.

When we set out to translate that essay into spoken audio, we were inspired by two very different traditions:
1. The **Royal National Institute of Blind People (RNIB) and London Roundhouse sensory-darkness storytelling performances** (such as collaborations with author Patrick Ness), where sound, breath, and voice form a single shared space for blind and sighted audiences alike.
2. The **research-projection experiments pioneered by Flyxion (`@standardgalactic`)**, which revealed both the promise of conversational two-speaker audio essays and the sharp failure modes of unguarded AI summarizers—models that mispronounce non-standard names (*"Flyxion"*), mangle Sanskrit and Japanese terms (*rasa-darśan*, *Tōrō*, *Bonshō*), spend a third of the broadcast flattering the author's "groundbreaking brilliance," and smooth away disability-justice stakes under Michael Oliver's **Social Model of Disability**.

Before rendering a single second of sound, we therefore built **guardrails in code**—and formalized them in Coq (`AntiSycophancyLinter` in [`Borealiscodes/CoQ-Hallucination-Guard`](https://github.com)):
* A **Unicode-aware phonetic lock** (`"Flyxion"` $\to$ `"FLIK-shun"`, `"rasa-darśan"` $\to$ `"RAH-sah DAR-shahn"`, `"Tōrō"` $\to$ `"TOH-roh"`, `"Bonshō"` $\to$ `"BON-shoh"`).
* A **zero-flattery linter** that fails any build containing empty praise words (*"brilliant," "groundbreaking," "revolutionary," "masterpiece," "genius"*) or fewer than **two explicit limitations**.
* A **six-register dialogue structure** where **Speaker A** carries *David Attenborough's* sensory habitat observation and *Bill Nye's* plain-language mechanism clarity, while **Speaker B** carries the *Social Model of Disability*, *Sophie Scholl's* refusal of comfortable illusions, and *Carl Sagan's* cosmic humility, separated by *Zen stillness pauses*.

---

## 2. Six Runs: What Actually Happened When the Code Met Real Hardware

### Act I: The Cold Browser Synthesizer (`NonDual-Audio-Preprint-Studio v1.0.0`)
In our first prototype, the guardrails passed (`3/3` unit tests), the `<= 680 Hz` WebAudio stillness bed hummed gently, and the live `aria-live` transcript highlighted each turn cleanly. Yet pressing **Play** on an Android tablet revealed an immediate emotional wall: **built-in browser `speechSynthesis` voices sound metallic, rushed, and cold.** The script was honest, yet the voice felt like an airport announcements terminal reading a Zen parable.

### Act II: Hitting the Storage Wall on Edge Hardware (`ENOSPC`)
To bring warmer neural VITS voices offline onto the tablet, we forked [`Borealiscodes/piper_tts`](https://github.com) and attempted to install a Debian ARM64 `proot-distro` container in Termux. Halfway through unpacking `onnxruntime` and the `.onnx` voice weights, the terminal halted with a blunt reality check: **`OSError: [Errno 28] No space left on device`.**

Independent researchers, disabled technologists, and human rights defenders working on constrained mobile hardware constantly hit these invisible ceilings. Rather than abandoning the experiment, that storage limit forced a cleaner architecture: **keep script authoring and guardrail verification lightweight (`< 25 KB`, `0.006s`) on the edge device, and delegate heavy `.onnx` neural synthesis to a disposable, zero-cost Ubuntu GitHub Actions runner (`workflow_dispatch`)**—leaving `0 KB` of permanent clutter on the tablet.

### Act III: Three Audible Artifacts on the Road to Natural Cadence

Running the pipeline in the cloud produced **three distinct `.wav` recordings**—each teaching a lesson no unit test alone could catch, and all three archived with this preprint on Zenodo:

1. **Audio Artifact 1 — Run #4 (`run4-cli-flag-literalism.wav`): When a Synthesizer Reads Its Own Flags Aloud**  
   In our first cloud render, the `<= 680 Hz` river/wind stillness bed survived cleanly—and then a warmer neural voice began solemnly reciting *"download dire json input"* over and over again. Unlike a traditional compiler that crashes on an unrecognized argument, `piper-tts` 1.8 treated unmatched `--download-dir` / `--json-input` wrapper syntax as literal prose to be vocalized. Switching to normalized plain text on `stdin` with `--data-dir .` cured the literalism immediately.
2. **Audio Artifact 2 — Run #5 (`run5-single-voice-compressed.wav`, `0:55`): The Breathless Monologue**  
   In Run #5, the synthesizer finally spoke the real essay—pronouncing *"RAH-sah DAR-shahn"*, *"FLIK-shun"*, *"TOH-roh"*, and *"BON-shoh"* cleanly. Yet listening back revealed two new flaws: because `en_US-lessac-medium` is a single-speaker checkpoint, both Speaker A and Speaker B collapsed into **one rapid-fire American female voice** that raced through the entire contemplative dialogue in **55 seconds** with almost no breathing room.
3. **Audio Artifact 3 — Run #6 (`run6-dual-gb-embodied-success.wav`, `1:14`): Two Voices Breathing in a Quiet Room**  
   For Run #6, we paired **two distinct British/Scottish VITS models**—**`en_GB-alan-medium`** for Speaker A and **`en_GB-alba-medium`** for Speaker B—slowed phoneme duration to **`--length-scale 1.30`**, added **`--sentence-silence 0.55`** between clauses, and inserted **`2,000 ms` river/wind stillness pauses** between turns. At **1 minute 14 seconds (`1:14`)**, the jarring screen-reader tone vanished: two unhurried voices conversed across a calm acoustic room, letting the river bed breathe between ideas while stating their own synthetic limitations aloud.

---

## 3. Summary Comparison Across All Six Iterations

| Iteration / Zenodo Audio File | Pipeline Configuration | Runtime & Phenomenological Finding |
| :--- | :--- | :--- |
| **Baseline (`NonDual-Audio-Preprint-Studio`)** | Android Chrome `window.speechSynthesis` + WebAudio `<= 680 Hz` bed. | Guardrails verified (`3/3`), but OS synthesizer sounded cold and mechanical. |
| **Local Edge Attempt (`proot-distro`)** | On-device Debian ARM64 container + `piper-tts`. | Hit `Errno 28: No space left on device` on `/data`; motivated cloud runner separation. |
| **Artifact 1: `run4-cli-flag-literalism.wav`** | Ubuntu runner + `en_US-lessac-medium` with `--json-input` / `--download-dir`. | Stillness bed worked, but CLI flag mismatch caused Piper to read `"download dire json input"` aloud. |
| **Artifact 2: `run5-single-voice-compressed.wav`** | Plain `stdin` + `--data-dir .` on single-speaker `en_US-lessac-medium` (`1.12x`). | Accurate phonetics, but single voice compressed all four turns into a breathless `0:55` rush. |
| **Artifact 3: `run6-dual-gb-embodied-success.wav`** | Dual VITS models (**`en_GB-alan-medium`** + **`en_GB-alba-medium`**), `1.30x` cadence, `0.55s` sentence silence, `2.0s` turn pauses over `<= 680 Hz` bed. | **Verified Breakthrough (`1:14`):** Natural conversational pacing, distinct regional voices, audible stillness pauses, and zero jarring screen-reader tone. |

---

## 4. Honest Boundaries: What Neural Synthesis Still Cannot Replace

Even when two VITS models converse at an unhurried `1.30x` cadence over a filtered river bed, honesty requires naming what remains unfinished:

* Neural Voices Approximate Human Presence: A VITS checkpoint has no lungs, lived memory, or shared vulnerability in a dark theater; it serves as a respectful accessibility bridge, never a replacement for a human narrator.
* Transcript Sovereignty Comes First: Clean semantic HTML and Markdown transcripts must always accompany synthesized audio so screen-reader users, deaf/hard-of-hearing readers, and human volunteer narrators remain in full control of pacing and voice.

---

# References (APA 7th Edition)

* Hedling, B. S. (2026a). Non-dual epistemic architectures and geometric stabilization in high-dimensional transformer systems (v3.1) [Preprint]. Zenodo. doi.org
* Hedling, B. S. (2026b). Beyond bolted-on screen readers: Narrative phenomenology, the RNIB Roundhouse sensory dark, and perceptual-cognitive unity (rasa-darśan) [Preprint]. Zenodo. doi.org
* Hedling, B. S. (2026c). Non-Dual Audio Preprint Studio (v1.0.0): Spoken-word preprint studio, Unicode phonetic guardrails, and anti-sycophancy linter [Computer software]. GitHub. github.com
* Hedling, B. S. (2026d). piper_tts research fork (nondual-embodied-studio/): Dual-voice VITS embodied narration and guardrail pipeline [Computer software]. GitHub. github.com
* Oliver, M. (1990). The politics of disablement. Macmillan.
* Rhasspy / Open Home Foundation. (2024–2026). Piper: A fast, local neural text-to-speech system [Computer software]. GitHub. github.com
* Royal National Institute of Blind People (RNIB) & Roundhouse. (2015–2024). Sensory-darkness live storytelling and accessible arts collaborations (featuring Patrick Ness). RNIB / Roundhouse London.

---

## Gratitude & Provenance:

Special thanks to Flyxion (@standardgalactic) for pioneering the research-projection direction that motivated this systematic study of spoken-word AI failure modes.

