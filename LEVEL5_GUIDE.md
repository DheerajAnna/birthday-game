# 🎁 Level 5: Multi-Select Question & Dual Gifts

## Overview

Level 5 is now an interactive multi-select question that leads to **TWO amazing gifts**:
1. 🍜 **Restaurant Date** at Shang Palace
2. 💄 **Nykaa Gift Card** worth ₹7251

## 🎮 How It Works

### The Question
**"What do you absolutely love in life?"**

**Options (Multi-select):**
- Food 🍜
- Smitha 👩
- My PS5 🎮
- Makeup 💄

### The Logic

**Correct Answer:** She must select **EXACTLY** Food AND Makeup (and nothing else)

**Wrong Answers:** Any other combination shows a warning:
> "🤔 Are you sure? I think you should be a bit more careful about what you love."

She can retry until she gets it right!

---

## 🎁 Gift #1: Restaurant Date

### When She Selects Food + Makeup

**Screen:** Beautiful Asian-themed page with swinging lanterns 🏮

**Content:**
- **Restaurant:** Shang Palace
- **Location:** Shangri-La Hotel, Bangalore
- **Time:** 2:15 PM Today
- **Cuisine:** Authentic Asian (one of Bangalore's best!)
- **Connection:** "You chose **Food** 🍜 - and I chose the perfect place!"

**Design:**
- Asian lanterns swinging animation
- Restaurant image placeholder
- Date/time details with icons
- Food emojis: 🥟 🍜 🥢 🍱 🥠 🍵

**Button:** "Continue to Your Next Gift 💄"

---

## 🎁 Gift #2: Nykaa Gift Card

### The Birthday Animation

**Step 1:** (2 seconds)
```
Our Birthdays:
15th March  and  27th April
```

**Step 2:** (2 seconds later)
```
Just the numbers:
15    27
```

**Step 3:** (2 seconds later)
```
Rearranged:
7  2  5  1
```
*(Numbers flip with animation)*

**Step 4:** (2.5 seconds later)
```
Your gift amount:
₹7251
```
*(Scales up dramatically)*

**Final:** Gift card reveals with confetti! 🎊

### Gift Card Details

**Amount:** ₹7251
**Card Number:** XXXX-XXXX-XXXX-7251 (placeholder)
**Card PIN:** XXXX (placeholder)

**Connection:** "You chose **Makeup** 💄 - here's something special!"

**Footer:** "From our birthdays to your beauty! 🎂💕"

---

## 🎨 Visual Features

### Multi-Select Checkboxes
- Large, easy-to-click checkboxes
- Pink borders that glow on hover
- Selected options turn deep pink
- Smooth animations

### Warning Prompt
- Yellow gradient background
- Shake animation when shown
- Friendly retry button

### Restaurant Page
- Swinging lantern animations
- Brown/Asian color scheme
- Professional restaurant card design
- Responsive layout

### Makeup Page
- Pink theme matching the game
- Smooth step-by-step animations
- Birthday numbers that flip and rearrange
- Dramatic final amount reveal
- Confetti explosion!

---

## 📝 Customization Guide

### Update Restaurant Details

In `index.html` (lines ~223-258):

```html
<h3>🏯 Shang Palace</h3>
<p class="restaurant-subtitle">at Shangri-La Hotel, Bangalore</p>
<span class="detail-text">Today!</span>  <!-- Change date -->
<span class="detail-text">2:15 PM</span>  <!-- Change time -->
```

### Update Restaurant Image

Replace placeholder in `index.html` line ~229:
```html
<img src="YOUR_RESTAURANT_IMAGE_URL" alt="Shang Palace">
```

### Update Gift Card Details

In `script.js` (lines ~84-85):
```javascript
giftCardNumber: "1234-5678-9012-7251", // Your actual card number
giftCardPin: "1234" // Your actual PIN
```

### Change Birthday Dates

In `index.html` (lines ~275-277):
```html
<span class="date-full">15th March</span>  <!-- Your birthday -->
<span class="date-full">27th April</span>  <!-- Her birthday -->
```

And update the rearranged numbers (lines ~292-295):
```html
<span class="date-number flip">7</span>
<span class="date-number flip">2</span>
<span class="date-number flip">5</span>
<span class="date-number flip">1</span>
```

---

## 🎯 Animation Timing

| Step | Duration | Action |
|------|----------|--------|
| Step 1 | 2s | Show full birthdays |
| Step 2 | 2s | Show just numbers |
| Step 3 | 2s | Show rearranged |
| Step 4 | 2.5s | Show final amount |
| Final | - | Reveal gift card + confetti |

**Total:** ~8.5 seconds of animation

---

## 💡 The Clever Connection

### Food → Restaurant Date
"You chose **Food** 🍜 - and I chose the perfect place!"

### Makeup → Nykaa Gift Card
"You chose **Makeup** 💄 - here's something special!"

### Birthday Numbers → Gift Amount
15th March + 27th April = 15 27 → Rearranged = 7251 → ₹7251!

---

## 📧 Email Feature

Both gifts can be emailed!

**Email Content:**
- Gift card amount: ₹7251
- Card number
- Card PIN
- Birthday connection message
- Beautiful HTML formatting

**Recipients:**
- Testing: annadheeraj2003@gmail.com
- Final: aayushi2003thakur@gmail.com (change in script.js line 902)

---

## 🎮 User Flow

```
Level 5 Question
    ↓
Select Food + Makeup
    ↓
Submit Answer
    ↓
✓ Correct!
    ↓
🍜 Restaurant Reveal
    ↓
Click "Continue"
    ↓
💄 Birthday Animation
    ↓
Numbers Transform
    ↓
₹7251 Revealed
    ↓
🎁 Gift Card + Confetti!
    ↓
Email/Copy Options
```

---

## 🐛 Testing Checklist

- [ ] Can select multiple checkboxes
- [ ] Wrong combinations show warning
- [ ] Can retry after warning
- [ ] Food + Makeup triggers restaurant reveal
- [ ] Lanterns swing smoothly
- [ ] Restaurant details display correctly
- [ ] "Continue" button works
- [ ] Birthday animation plays in sequence
- [ ] Numbers flip and rearrange
- [ ] Final amount scales up
- [ ] Gift card reveals with confetti
- [ ] Copy button works
- [ ] Email button works
- [ ] Mobile responsive

---

## 🎨 Color Scheme

**Restaurant Page:**
- Brown/Tan: #8B4513
- Pink accents: #ff69b4
- White cards
- Asian theme

**Makeup Page:**
- Deep Pink: #ff1493
- Light Pink: #ff69b4
- Pink gradients: #fff0f5, #ffe4e1
- White backgrounds

---

## 📱 Mobile Support

All features are fully responsive:
- Checkboxes scale appropriately
- Restaurant card adjusts padding
- Date numbers resize for mobile
- Animations work smoothly
- Touch-friendly buttons

---

## 🎁 What Makes This Special

1. **Interactive Choice:** She actively chooses what she loves
2. **Dual Rewards:** Two gifts instead of one!
3. **Personal Connection:** Her choices directly link to the gifts
4. **Birthday Magic:** Your birthdays combine to create the gift amount
5. **Beautiful Animations:** Smooth, professional transitions
6. **Surprise Factor:** She won't expect the birthday number transformation!

---

## 🚀 Ready to Test!

Open `index.html` and play through to Level 5. Select Food + Makeup to see the magic! ✨

**Pro Tip:** Try selecting wrong combinations first to see the warning message - it's cute! 😊
