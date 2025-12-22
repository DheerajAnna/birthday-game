# 💕 Birthday Game for Your Girlfriend

A cute, interactive browser-based game featuring 4 levels with photos, memories, and ending with a Nykaa gift card reveal!

## 🎮 Game Features

- **Level 1**: Memory Match - Multiple choice questions about your relationship
- **Level 2**: Photo Reveal Puzzle - Blurred photo that reveals when answered correctly
- **Level 3**: Timeline Challenge - **Drag & drop events in chronological order!**
- **Level 4**: Final Treasure - Gift card reveal with confetti animation + **Email gift card button!**

## 🎨 Theme

- Pink and rose gold color scheme
- Floating hearts background
- **Animated mascots** (Pikachu) bouncing, peeking, and celebrating!
- Smooth animations and transitions
- Mobile-responsive design
- Cute fonts (Pacifico & Poppins)

## ⚙️ How to Customize

### Step 1: Add Your Photos & Mascot

1. The `images` folder is already created for you
2. Add your photos to this folder:
   - Your relationship photos (first-date.jpg, birthday.jpg, etc.)
   - **pikachu.jpg** - Your mascot image (or any cute character you want!)
3. Open `script.js` and update the photo URLs in the `gameData` object:

```javascript
const gameData = {
    level1: {
        photo: "images/first-date.jpg", // Your photo path
        // ... rest of the data
    },
    level2: {
        photo: "images/birthday.jpg", // Your photo path
        // ... rest of the data
    },
    level3: {
        photos: [
            "images/memory1.jpg",
            "images/memory2.jpg",
            "images/memory3.jpg",
            "images/memory4.jpg"
        ],
        // ... rest of the data
    }
};
```

### Step 2: Customize Questions & Timeline Events

In `script.js`, edit the `gameData` object:

**For Level 1 & 2 (Multiple Choice):**
```javascript
level1: {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0, // Index of correct answer (0 = first option, 1 = second, etc.)
    photo: "images/your-photo.jpg",
    loveNote: "Your love note here..."
}
```

**For Level 3 (Timeline - Drag & Drop):**
```javascript
level3: {
    events: [
        {
            text: "First event description",
            date: "Month Year",
            photo: "images/event1.jpg"
        },
        {
            text: "Second event description",
            date: "Month Year",
            photo: "images/event2.jpg"
        },
        // Add 3-5 events in CHRONOLOGICAL ORDER
    ],
    loveNote: "Your love note here..."
}
```

**Important:** List events in the CORRECT chronological order. The game will shuffle them automatically!

### Step 3: Update Gift Card Details

In `script.js`, update:

```javascript
giftCardAmount: "5000", // Your gift card amount
giftCardCode: "YOUR-ACTUAL-CODE" // Your Nykaa gift card code
```

### Step 4: Customize the Nykaa Logo (Optional)

In `index.html`, find this line and replace with actual Nykaa logo:

```html
<img src="https://via.placeholder.com/200x100/FF69B4/FFFFFF?text=NYKAA" alt="Nykaa Gift Card" class="gift-card-logo">
```

Replace with:
```html
<img src="images/nykaa-logo.png" alt="Nykaa Gift Card" class="gift-card-logo">
```

### Step 5: Change the Mascot (Optional)

The game uses `pikachu.jpg` by default. To use a different mascot:

1. Add your mascot image to the `images` folder (e.g., `bunny.jpg`, `cat.jpg`)
2. In `script.js`, find both instances of `'images/pikachu.jpg'` and replace with your image:
   - In the `createMascots()` function (line ~102)
   - In the `spawnCelebrationMascot()` function (line ~127)

**Mascot behaviors:**
- 2-3 mascots appear at random positions
- They bounce, peek, float, and jump around
- A celebration mascot pops up when she answers correctly!

### Step 6: Personalize the Welcome Message

In `index.html`, edit the welcome screen:

```html
<h1 class="title">Happy Birthday, [Her Name]! 🎉</h1>
<p class="subtitle">Your custom message here...</p>
```

## 🚀 How to Deploy & Create QR Code

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository (e.g., "birthday-game")
3. Upload all files (index.html, style.css, script.js, and images folder)
4. Go to Settings → Pages
5. Select "main" branch and save
6. Your site will be live at: `https://yourusername.github.io/birthday-game`

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your entire project folder
4. Get instant URL like: `https://your-site-name.netlify.app`

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click

### Creating the QR Code

1. Once deployed, copy your website URL
2. Go to any free QR code generator:
   - [qr-code-generator.com](https://www.qr-code-generator.com)
   - [qrcode-monkey.com](https://www.qrcode-monkey.com)
3. Paste your URL
4. Customize QR code with pink colors if you want
5. Download and print/share!

## 📱 Testing Before Deployment

1. Open `index.html` in your browser (double-click the file)
2. Test all levels and interactions
3. Make sure photos load correctly
4. Verify gift card code is correct
5. Test on mobile browser too!

## 🎯 Quick Checklist

- [ ] Replace all placeholder photos with your actual photos
- [ ] Update all questions to be about your relationship
- [ ] Set correct answer indices for each question
- [ ] Write personalized love notes for each level
- [ ] Update gift card amount and code
- [ ] Customize welcome message with her name
- [ ] Test the game thoroughly
- [ ] Deploy to hosting service
- [ ] Generate QR code
- [ ] Test QR code on your phone

## 💡 Tips

- **Photo sizes**: Use photos around 500-800px wide for best performance
- **Love notes**: Keep them heartfelt but not too long (2-3 sentences)
- **Questions**: Make them fun and not too difficult
- **Testing**: Always test on mobile since she'll scan with her phone
- **Backup**: Keep the gift card code written down separately just in case!

## 🎁 Final Touch Ideas

- Add background music (optional - can be added to the code)
- Include a video message in the final level
- Add more photos to the collage
- Create a custom domain name (e.g., happybirthday-[hername].com)

## ❤️ Enjoy!

This game is designed to be sweet, personal, and memorable. Take your time customizing it with your special moments together. She's going to love it! 💕

---

**Need help?** If you run into any issues:
1. Check that all file names match exactly (case-sensitive)
2. Make sure photos are in the correct folder
3. Test in different browsers
4. Clear browser cache if changes don't appear
