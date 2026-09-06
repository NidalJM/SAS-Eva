# YouCode SAS — Day 2 Assessment (Progressive Format)
## Variables, Operators & Conditions — “SkyYouCode Baggage Fee Calculator”

**Total Time:** 30 minutes
**Format:** No notes, no internet, individual work, console only. **One single file, built step by step.**

### How it works
You will build a small program in 8 steps.

At each step, you **add new lines** to the file — you never delete or rewrite the code from a previous step (unless a step explicitly asks you to update the value of a variable).

If you get stuck on a step, leave a comment indicating this, move on to the next one, and continue building on top of what you have already done — subsequent steps still award partial points even if a previous step is incomplete.

Run your file after each step to verify that the result matches what is expected before continuing.

### Departure Code (provided — do not modify these 4 lines)
```js
const passengerName = "Yassine";

let weightKg = 27;

let isOversized = true;

let ticketClass = "business";

```

---

### Step 1 — Configuration Verification
Add lines to display a header `"=== Baggage Fee Calculator for Yassine ==="`, then display `weightKg`, `isOversized`, and `ticketClass`.

**Expected result after this step:**
```
=== Baggage Fee Calculator for Yassine ===
27 true business
```

---

### Step 2 — Base Fee Based on Weight
Add an `if/else if/else` statement that declares `let fee` and sets it based on `weightKg`: **20 kg or less → `0`** (free baggage allowance), **21 to 32 kg → `15`**, **over 32 kg → `40`**. Then display `"Base Fee:", fee`.

**Expected Additional Result:**
```
Base Fee: 15
```

---

### Step 3 — Oversized Baggage Fee
Add a check: if `isOversized` is `true`, add `10` to `fee`. Then display `"Fee after oversized baggage fee:", fee`.

**Expected Additional Result:**
```
Fee after oversized baggage fee: 25
```

---

### Step 4 — Class Adjustment with Switch
Add a `switch` to `ticketClass`: `"economy"` → no change, `"business"` → subtract `5` from `fee`, `"first"` → set `fee` to `0` (fully waived). Then display "Fee after class adjustment:", fee".

**Expected additional result:**
```
Fee after class adjustment: 20
```

---

### Step 5 — Validate the weight
Add a line declaring `let isValidWeight` which is `true` only if `weightKg` is between `0` and `100` inclusive (anything outside this range is considered an unrealistic/invalid entry). Display it with a label.

**Additional expected result:**
```
Valid weight: true
```
*(Use the label of your choice, e.g., `console.log("Valid weight:", isValidWeight);`)*

---

### Step 6 — Summary line with a literal template
Add a `console.log` using a literal template that combines `passengerName`, `weightKg`, and `fee` into a single readable sentence, with the currency **MAD**.

**Additional expected result (example wording, yours may vary slightly):**
``` Baggage fee for Yassine (27kg): 20 MAD
```

---

### Step 7 — Diplomatic Exemption
Add a new line `let isDiplomat = true;`, then an `if` statement that, when `isDiplomat` is `true`, replaces `fee` with a fixed amount of `0` regardless of what was calculated previously, and displays a message indicating this exemption.

**Expected Additional Result:**
``` Diplomatic exemption applied, new fee: 0 MAD
```

---

### Step 8 — Final Fee Category
Add a final `if / else if / else` (or `switch(true)`) statement that displays "No Fee" if `fee` is exactly `0`, "Low" if `fee` is greater than `0` and up to `20`, or "High" above `20` — based on the CURRENT value of `fee` after the override in Step 7.

**Expected Additional Result:**
```
No Fee
```

---

## Expected Full Result in the Console (by running the entire file from start to finish)
```
=== Baggage Fee Calculator for Yassine ===
27 true business class
Base fee: 15
Oversized baggage fee: 25
Class adjustment fee: 20
Valid weight: true
Baggage fee for Yassine (27kg): 20 MAD
Diplomatic exemption applied, new fee: 0 MAD
No fee
```