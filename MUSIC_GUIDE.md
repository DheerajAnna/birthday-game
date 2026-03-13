# 🎵 Background Music Setup

## Overview

Background music ("boba date.mp3") now plays throughout the game at a comfortable volume level.

---

## 🎧 How It Works

### Audio Element (HTML)
```html
<audio id="backgroundMusic" loop>
    <source src="audio/boba date.mp3" type="audio/mpeg">
</audio>
```

**Features:**
- `loop` attribute: Music repeats continuously
- `id="backgroundMusic"`: JavaScript can control it
- Supports MP3 format

### Music Control (JavaScript)
```javascript
function startGame() {
    // Start background music
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.volume = 0.3; // Set volume to 30%
    bgMusic.play().catch(err => console.log('Audio autoplay prevented:', err));
}
```

**Features:**
- Music starts when user clicks "Start Game"
- Volume set to **30%** (comfortable background level)
- Error handling for autoplay restrictions
- Loops continuously until game ends

---

## 🔊 Volume Levels

Current setting: **0.3 (30%)**

To adjust, change the volume value in `script.js` line 179:

| Volume | Level | Use Case |
|--------|-------|----------|
| 0.1 | 10% | Very quiet |
| 0.2 | 20% | Subtle |
| **0.3** | **30%** | **Current (Recommended)** |
| 0.4 | 40% | Noticeable |
| 0.5 | 50% | Medium |
| 0.7 | 70% | Loud |
| 1.0 | 100% | Maximum |

---

## 🎯 User Experience

### Welcome Screen
- No music playing
- User sees "Start Game" button

### Click "Start Game"
- Music fades in smoothly
- Game transitions to Level 1
- Music loops continuously

### Throughout Game
- Music plays at 30% volume
- Doesn't interfere with game sounds
- Creates romantic atmosphere
- Loops seamlessly

---

## 🔧 Files Modified

### 1. index.html
Added audio element in body:
```html
<audio id="backgroundMusic" loop>
    <source src="audio/boba date.mp3" type="audio/mpeg">
</audio>
```

### 2. script.js
Updated `startGame()` function:
```javascript
// Start background music
const bgMusic = document.getElementById('backgroundMusic');
bgMusic.volume = 0.3; // Set volume to 30%
bgMusic.play().catch(err => console.log('Audio autoplay prevented:', err));
```

---

## 🎵 Audio File Details

**File:** `audio/boba date.mp3`
**Size:** ~3 MB
**Format:** MP3
**Behavior:** Loops continuously

---

## 🔐 Browser Autoplay Policy

Modern browsers restrict autoplay of audio. The code handles this:

```javascript
bgMusic.play().catch(err => console.log('Audio autoplay prevented:', err));
```

**What happens:**
- If autoplay is allowed: Music plays automatically
- If autoplay is blocked: User sees console message (no error shown)
- User can still manually unmute/play if needed

---

## 🎚️ To Adjust Volume

### Option 1: Change Default Volume
Edit `script.js` line 179:
```javascript
bgMusic.volume = 0.5; // Change 0.3 to your preferred level
```

### Option 2: Add Volume Control UI
Add a slider to let user control volume:
```html
<input type="range" id="volumeControl" min="0" max="100" value="30">
```

```javascript
document.getElementById('volumeControl').addEventListener('input', (e) => {
    document.getElementById('backgroundMusic').volume = e.target.value / 100;
});
```

---

## 🎼 Music Details

**Song:** "boba date"
**Perfect for:** Romantic, sweet birthday celebration
**Mood:** Cute, loving, intimate
**Duration:** Loops throughout game

---

## 🐛 Troubleshooting

### Music not playing?
1. Check browser console for errors
2. Verify `audio/boba date.mp3` file exists
3. Check browser autoplay settings
4. Try unmuting the browser tab

### Volume too loud/quiet?
1. Adjust `bgMusic.volume` value in `script.js`
2. Use range: 0.0 (silent) to 1.0 (max)
3. Test different values: 0.2, 0.3, 0.4, etc.

### Music cuts off?
1. Verify MP3 file is not corrupted
2. Check file size (~3 MB is normal)
3. Try different browser

---

## ✨ Enhancement Ideas

1. **Fade In/Out:** Gradually increase volume
2. **Volume Control:** Let user adjust during game
3. **Multiple Tracks:** Different music for different levels
4. **Mute Button:** Allow user to toggle music
5. **Sound Effects:** Add celebratory sounds on correct answers

---

## 📝 Current Implementation

✅ Background music plays on game start
✅ Volume set to comfortable 30%
✅ Loops continuously
✅ Error handling for browser restrictions
✅ No interference with game experience

---

**All set!** The romantic "boba date" music now plays throughout the game! 🎵💕
