# YouCode SAS — Day 3 Assessment (Progressive Format)
## Loops (for/while, break, continue) — “SafeYouCode ATM Simulator”

**Total Time:** 30 minutes
**Format:** No notes, no internet, individual work, console only. **One single file, built step by step.**
**Allowed:** Everything covered in Days 1-2 (variables, operators, conditions) plus `for`/`while`, `break`, `continue`.

Nothing from subsequent days (no functions, arrays, objects).

### How it works
You will build an ATM simulator in 8 steps.

Each step describes **an expected behavior and an expected result** — it's up to you to choose the tools (loops, conditions, operators) to achieve it. There are often several correct ways to get the same result.

Run your file after each step to verify that the result matches what is expected before continuing.

### Starting Code (provided — do not modify these 2 lines)
```js
let balance = 500;

let totalAttempts = 10;

```

### Step 1 — Configuration Verification
Display a header `"=== ATM Withdrawal Simulator ==="`, then display `balance` and `totalAttempts`.

**Expected Result After This Step:**
```
=== ATM Withdrawal Simulator ===
500 10
```

---

### Step 2 — Process Each Withdrawal Attempt
For each attempt number from `1` to `totalAttempts`, the requested amount is the attempt number multiplied by `15`.

Display the number of each attempt and its requested amount.

**Additional Expected Result:**
```
Attempt 1 - Requested amount: 15
Attempt 2 - Requested amount: 30
Attempt 3 - Requested amount: 45
Attempt 4 - Requested amount: 60
Attempt 5 - Requested amount: 75
Attempt 6 - Requested amount: 90
Attempt 7 - Requested amount: 105
Attempt 8 - Requested amount: 120
Attempt 9 - Requested amount: 135
Attempt 10 - Requested amount: 150
```

---

### Step 3 — Invalid Attempts
Every 4th attempt (number divisible by 4) is invalid and canceled.

For an invalid attempt: do not treat it as a normal request — instead, display a message indicating that it has been ignored, and proceed to the next attempt.

**Additional expected result (replaces the result of Step 2, as the behavior has changed):**
```
Attempt 1 - Requested amount: 15
Attempt 2 - Requested amount: 30
Attempt 3 - Requested amount: 45
Attempt 4 - Invalid withdrawal request, skipped.

Attempt 5 - Requested amount: 75
Attempt 6 - Requested amount: 90
Attempt 7 - Requested amount: 105
Attempt 8 - Invalid withdrawal request, skipped.

Attempt 9 - Requested amount: 135
Attempt 10 - Requested amount: 150

```

---

### Step 4 — Insufficient Funds
If a requested (valid) amount is greater than the current balance, display a message indicating insufficient funds, and the entire simulation must stop immediately — no further attempts should be processed after this point.

**Additional expected result at this stage:**
```

.

Attempt 33 - Requested amount: 495
Attempt 34 - Insufficient funds. Stopping simulation.

```

---

### Step 5 — Successful Withdrawals
When a requested amount IS available, the balance must decrease by that amount, and a message must confirm the successful withdrawal and the new balance.

**Expected additional result (full updated trace):**
```
Attempt 1 - Requested amount: 15
Attempt 1 - Withdrawal successful. New balance: 485
Attempt 2 - Requested amount: 30
Attempt 2 - Withdrawal successful. New balance: 455
Attempt 3 - Requested amount: 45
Attempt 3 - Withdrawal successful. New balance: 410
Attempt 4 - Invalid withdrawal request, skipped.
Attempt 5 - Requested amount: 75
Attempt 5 - Withdrawal successful. New balance: 335
Attempt 6 - Requested amount: 90
Attempt 6 - Withdrawal successful. New balance: 245
Attempt 7 - Requested amount: 105
Attempt 7 - Withdrawal successful. New balance: 140
Attempt 8 - Invalid withdrawal request, skipped.

Attempt 9 - Requested amount: 135
Attempt 9 - Withdrawal successful. New balance: 5
Attempt 10 - Requested amount: 150
Attempt 10 - Insufficient funds. Stopping simulation.

```

---

### Step 6 — Final Summary
Once all attempts have been processed (or the simulation stopped earlier), display a summary sentence that includes the final balance and the total number of allowed attempts, in **MAD** currency.

**Expected additional result (example wording, yours may vary slightly):**
```
Simulation complete. Final balance: 5 MAD after 10 allowed attempts.

```

---

### Step 7 — VIP Bonus
Add a line `let isVIP = true;`. If the customer is a VIP, the balance should increase by `100`, and a message should indicate the bonus and the new balance.

**Additional expected result:**
``` VIP bonus applied, new balance: 105 MAD
```

---

### Step 8 — Final Balance Category
Based on the CURRENT balance (after Step 7), classify