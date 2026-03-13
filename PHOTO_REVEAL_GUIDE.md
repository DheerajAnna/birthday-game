# 📸 Photo Reveal Puzzle - Complete Guide

## Overview

Both Level 2 and Level 4 now have proper photo reveal mechanics:
- **Blurred photo** shown during the question
- **Clear photo** revealed after correct answer
- **Love note** displayed with the clear photo

---

## 🎮 How It Works

### Level 2: Photo Reveal Puzzle

**Question Phase:**
- Shows blurred/mystery photo
- Question: "What were you doing in this photo?"
- 4 multiple choice options
- Photo has CSS blur effect

**Reveal Phase (After Correct Answer):**
- Blurred photo is replaced with clear photo
- Blur effect removed
- Love note appears below the photo
- "Continue" button to next level

### Level 4: Photo Reveal Puzzle 2

**Question Phase:**
- Shows blurred/mystery photo
- Question: "What were you doing in this photo?"
- 4 multiple choice options
- Photo has CSS blur effect

**Reveal Phase (After Correct Answer):**
- Blurred photo is replaced with clear photo
- Blur effect removed
- Love note appears below the photo
- "Continue" button to next level

---

## 📝 Data Structure

### Level 2 Configuration

```javascript
level2: {
    question: "What were you doing in this photo?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 1, // Index of correct answer
    blurredPhoto: "URL_TO_BLURRED_IMAGE", // Shown during question
    photo: "URL_TO_CLEAR_IMAGE",          // Shown after correct answer
    loveNote: "Your sweet message here"
}
```

### Level 4 Configuration

```javascript
level4: {
    question: "What were you doing in this photo?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 0, // Index of correct answer
    blurredPhoto: "URL_TO_BLURRED_IMAGE", // Shown during question
    photo: "URL_TO_CLEAR_IMAGE",          // Shown after correct answer
    loveNote: "Your sweet message here"
}
```

---

## 🎨 Current Placeholder URLs

### Level 2
- **Blurred Photo:** `https://via.placeholder.com/500x400/FFC0CB/FFFFFF?text=Mystery+Photo`
- **Clear Photo:** `images/shared image.jpeg`

### Level 4
- **Blurred Photo:** `https://via.placeholder.com/500x400/FFE0F0/FFFFFF?text=Mystery+Photo+2`
- **Clear Photo:** `https://via.placeholder.com/500x400/FFB6C1/FFFFFF?text=Revealed+Photo`

---

## 🔄 How to Replace with Real Photos

### Option 1: Use Actual Blurred Photos

1. **Create blurred versions of your photos:**
   - Use an image editor (Photoshop, GIMP, online tools)
   - Apply blur filter (Gaussian blur recommended)
   - Save as separate files

2. **Upload to your images folder:**
   ```
   images/
   ├── level2-blurred.jpeg
   ├── level2-clear.jpeg
   ├── level4-blurred.jpeg
   └── level4-clear.jpeg
   ```

3. **Update script.js:**
   ```javascript
   // Level 2
   blurredPhoto: "images/level2-blurred.jpeg",
   photo: "images/level2-clear.jpeg",
   
   // Level 4
   blurredPhoto: "images/level4-blurred.jpeg",
   photo: "images/level4-clear.jpeg",
   ```

### Option 2: Use CSS Blur (Simpler)

Just use the same photo for both, the CSS will handle the blur:

```javascript
// Level 2
blurredPhoto: "images/shared image.jpeg",  // Same photo
photo: "images/shared image.jpeg",          // Same photo

// Level 4
blurredPhoto: "images/your-photo.jpeg",    // Same photo
photo: "images/your-photo.jpeg",            // Same photo
```

The `.blurred` CSS class will make it look blurred initially!

---

## 🎯 CSS Blur Effect

The blur is applied via CSS class:

```css
.blurred {
    filter: blur(20px);
    transition: filter 0.5s ease;
}
```

When the correct answer is selected:
1. The `src` is changed to the clear photo
2. The `.blurred` class is removed
3. Smooth transition reveals the clear image

---

## 💡 Recommended Approach

### For Best Results:

**Use the same photo for both blurred and clear:**
- Simpler to manage
- CSS blur looks natural
- Smooth reveal animation
- Less file management

**Example:**
```javascript
level2: {
    blurredPhoto: "images/shared image.jpeg",
    photo: "images/shared image.jpeg",  // Same file!
    // CSS handles the blur effect
}
```

### For Maximum Control:

**Use separate blurred and clear photos:**
- More control over blur intensity
- Can add other effects to blurred version
- Slightly larger file size

**Example:**
```javascript
level2: {
    blurredPhoto: "images/level2-mystery.jpeg",  // Pre-blurred
    photo: "images/level2-reveal.jpeg",          // Clear version
}
```

---

## 🔧 Technical Implementation

### Setup Phase (Question)
```javascript
function setupLevel2() {
    document.getElementById('blurredPhoto').src = data.blurredPhoto;
    // Photo appears with .blurred CSS class
}
```

### Reveal Phase (Correct Answer)
```javascript
function showResult(level) {
    if (level === 2) {
        const img = document.getElementById('blurredPhoto');
        img.src = gameData.level2.photo;        // Load clear photo
        img.classList.remove('blurred');         // Remove blur effect
        // Show love note
    }
}
```

---

## 📋 Quick Customization Checklist

- [ ] Replace Level 2 blurred photo URL
- [ ] Replace Level 2 clear photo URL
- [ ] Update Level 2 love note
- [ ] Replace Level 4 blurred photo URL
- [ ] Replace Level 4 clear photo URL
- [ ] Update Level 4 love note
- [ ] Test blur effect works
- [ ] Test reveal animation is smooth
- [ ] Verify love notes display correctly

---

## 🎨 Visual Flow

```
Level 2 Question
    ↓
[Blurred Photo] 🌫️
"What were you doing?"
[Options 1-4]
    ↓
Select Correct Answer
    ↓
[Clear Photo] ✨
"Love Note Message"
[Continue Button]
```

---

## 🐛 Troubleshooting

### Photo not blurring?
- Check if `.blurred` class is in CSS
- Verify `filter: blur(20px)` is applied
- Try increasing blur value: `blur(30px)`

### Photo not revealing?
- Check if `classList.remove('blurred')` is called
- Verify clear photo URL is correct
- Check browser console for errors

### Love note not showing?
- Verify `loveNote` field in gameData
- Check if `note2` or `note4` element exists in HTML
- Ensure `textContent` is being set

---

## ✨ Enhancement Ideas

1. **Stronger Blur:** Increase blur value in CSS
2. **Pixelated Effect:** Use `pixelate` filter instead
3. **Grayscale:** Add `grayscale(100%)` to blur
4. **Multiple Reveals:** Gradually reduce blur on each wrong answer
5. **Sound Effects:** Add "reveal" sound when photo clears

---

**All set!** Replace the placeholder URLs with your actual photos and enjoy the reveal effect! 📸💕
