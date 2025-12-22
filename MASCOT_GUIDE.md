# 🎮 Mascot Animation Guide

## What the Mascots Do

Your game now features **animated mascots** that bring extra cuteness and life to every level!

### 🎪 Mascot Behaviors

#### **1. Bounce Animation**
- Mascot bounces around in a playful pattern
- Moves up, down, left, and right
- Rotates slightly while bouncing
- Duration: 8 seconds per cycle

#### **2. Peek Animation**
- Mascot peeks from the side of the screen
- Slides in and out playfully
- Perfect for corner positions
- Duration: 6 seconds per cycle

#### **3. Float Animation**
- Gentle floating up and down
- Slight rotation for natural movement
- Calm and soothing
- Duration: 10 seconds per cycle

#### **4. Jump Animation**
- Quick bouncy jumps
- Scales up slightly at peak
- Energetic and fun
- Duration: 3 seconds per cycle

### 🎉 Special Celebration Mascot

When she answers a question **correctly**, a special celebration mascot appears:
- Pops up at the bottom center of the screen
- Does a happy jumping animation
- Stays for 3 seconds then disappears
- Adds extra joy to correct answers!

### 📍 Mascot Positions

The game spawns **2-3 mascots** at random positions:
- Bottom left corner
- Top right corner
- Bottom right corner
- Top left corner

Each mascot gets a random animation style, so every playthrough feels fresh!

### 🎨 Customizing Your Mascot

#### Change the Mascot Image

1. Add your mascot image to the `images` folder
   - Recommended size: 200x200px to 400x400px
   - Transparent background (PNG) works best
   - Square images look best

2. Update `script.js` in two places:

**Location 1 - Regular Mascots (around line 102):**
```javascript
img.src = 'images/pikachu.jpg';  // Change to your image
```

**Location 2 - Celebration Mascot (around line 127):**
```javascript
img.src = 'images/pikachu.jpg';  // Change to your image
```

#### Adjust Mascot Size

In `style.css`, find the `.mascot` class (around line 39):
```css
.mascot {
    width: 80px;   /* Change this */
    height: 80px;  /* Change this */
}
```

Recommended sizes:
- Small: 60px x 60px
- Medium: 80px x 80px (default)
- Large: 120px x 120px

#### Change Number of Mascots

In `script.js`, find the `createMascots()` function (around line 95):
```javascript
const numMascots = 2 + Math.floor(Math.random() * 2); // 2 or 3 mascots
```

Change to:
- Fixed 2 mascots: `const numMascots = 2;`
- Fixed 3 mascots: `const numMascots = 3;`
- Fixed 4 mascots: `const numMascots = 4;`
- Random 1-3: `const numMascots = 1 + Math.floor(Math.random() * 3);`

### 💡 Mascot Ideas

Instead of Pikachu, you could use:
- **Her favorite animal** (cat, bunny, panda)
- **Her favorite character** (Hello Kitty, Totoro, etc.)
- **Inside joke character**
- **Your couple mascot** if you have one
- **Cute emoji-style graphics**

### 🎯 Pro Tips

1. **Use transparent PNGs** for best results (no white backgrounds)
2. **Keep file sizes small** (under 500KB) for fast loading
3. **Test on mobile** - mascots are sized to work on phones too
4. **Match the theme** - choose mascots that fit the pink/cute aesthetic
5. **Consider her favorites** - use characters she loves!

### 🐛 Troubleshooting

**Mascots not showing?**
- Check that `pikachu.jpg` exists in the `images` folder
- Make sure the filename matches exactly (case-sensitive)
- Try using a PNG file instead of JPG
- Check browser console (F12) for errors

**Mascots too big/small?**
- Adjust the width/height in `style.css` (`.mascot` class)
- Make sure your image isn't too large (resize if needed)

**Want to disable mascots?**
- In `script.js`, comment out this line: `createMascots();` (line 384)
- Or set `numMascots = 0;` in the `createMascots()` function

---

## 🎨 Animation Timing Reference

If you want to adjust animation speeds, edit these in `style.css`:

```css
.mascot.bounce { animation: bounceAround 8s ease-in-out infinite; }
.mascot.peek { animation: peekFromSide 6s ease-in-out infinite; }
.mascot.float { animation: floatMascot 10s ease-in-out infinite; }
.mascot.jump { animation: jumpUp 3s ease-in-out infinite; }
```

Change the numbers (8s, 6s, etc.) to make animations faster or slower:
- Faster: Use smaller numbers (e.g., 4s, 3s)
- Slower: Use larger numbers (e.g., 12s, 15s)

---

Enjoy your adorable animated mascots! 🎉✨
