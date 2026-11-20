# 🟧 Bill Nye Tile: Non-Dual Audio Preprint Studio (Teaching Robots How to Pronounce Words & Tell the Truth!)

**Altitude:** `A7` (Public-Facing Clarity Layer • Zero Jargon • Non-Activating)  
**Companion Runtime:** `NonDual-Audio-Preprint-Studio v1.0.0` (`DOI: 10.5281/zenodo.24393275` • `3/3` Tests Passing)  
**Companion Note:** [`docs/why-structured-guardrails-matter-even-with-synthetic-voices.md`](../docs/why-structured-guardrails-matter-even-with-synthetic-voices.md)  
**Maintainer:** Borealis Serenity Hedling (`NDH-RESEARCH-PILOT` · County Dublin, Ireland)  

---

## ⭐ Bill Nye Says…

> “Kids!  
> 
> Have you ever heard a computer voice try to read an unfamiliar name—and totally mangle it?! Or heard an AI podcast host spend ten minutes saying, *‘Oh wow, this is the most brilliant, revolutionary, genius paper ever written!’* without telling you what the software **can't** do?!  
> 
> Even if a built-in browser voice still sounds a little cold and robotic today, **what it says and how accurately it pronounces words still matters!** By building a **Phonetic Dictionary** (`"Flyxion"` $\to$ `"FLIK-shun"`, `"Tōrō"` $\to$ `"TOH-roh"`) and a **Zero-Flattery Linter** that bans empty praise and requires **at least two honest limitations**, we make sure the script itself is respectful, accurate, and truthful before a human narrator or warmer voice ever reads a single line!”

---

## 🎙️ Part 1: Three Guardrails Inside the Studio

1. **Unicode Phonetic Lock (`src/phonetic-guard.js`):**  
   Standard text-to-speech engines stumble over names and Sanskrit or Japanese terms with accent marks (`Tōrō`, `Bonshō`, `rasa-darśan`). Our Unicode-aware phonetic normalizer swaps tricky spellings for clear syllable guides right before speech synthesis runs.
2. **Zero-Flattery & Limitation Linter (`src/anti-sycophancy-linter.js`):**  
   An automated test (`node --test`) scans every line of dialogue and fails the build if hype words (*"brilliant," "groundbreaking," "genius"*) sneak in—or if the script forgets to list **at least two real limitations**.
3. **Calm `<= 680 Hz` Stillness Bed & Clean Transcript (`src/essay-player-app.js`):**  
   Pair the spoken dialogue with a gentle, low-pass filtered ambient hush—or read the clean semantic transcript directly with your own preferred screen reader!

---

## 🧭 Provenance & Non-Activation Footer

* **Gratitude:** Special thanks to **Flyxion (`@standardgalactic`)** for pioneering the research-projection direction and building technology that made it possible to observe and address spoken-word AI failure modes.
* **Status:** Verified Educational Explainer Tile (`v1.0.0` Spoken-Word Studio • `3/3` Tests Passing)  
* **Non-Activation Clause:** Descriptive educational tile only; strictly non-activating.  
* **Signed-off-by:** `Borealis Serenity Hedling <chguard-sentinel@vaked.dev>`
