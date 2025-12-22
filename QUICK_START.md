# 🚀 Quick Start Guide

## 5-Minute Setup

### 1. Add Your Photos & Mascot (2 minutes)

The `images` folder is ready! Add these files:
- `first-date.jpg` - Photo from your first date
- `birthday.jpg` - A special photo to reveal
- `memory1.jpg`, `memory2.jpg`, `memory3.jpg`, `memory4.jpg` - Four memorable photos
- `pikachu.jpg` - Your cute mascot (or any character image you like!)

### 2. Edit script.js (2 minutes)

Open `script.js` and find the `gameData` object at the top. Update:

**Level 1:**
```javascript
question: "Where did we first meet?",
correctAnswer: 0, // Change to match your correct option
photo: "images/first-date.jpg",
loveNote: "Write your love note here..."
```

**Level 2:**
```javascript
question: "What were we doing in this photo?",
correctAnswer: 0,
photo: "images/birthday.jpg",
loveNote: "Write your love note here..."
```

**Level 3 (Timeline - Drag & Drop):**
```javascript
events: [
    { text: "We met for the first time", date: "Jan 2023", photo: "images/event1.jpg" },
    { text: "Our first date", date: "Feb 2023", photo: "images/event2.jpg" },
    { text: "We became official 💕", date: "Mar 2023", photo: "images/event3.jpg" },
    { text: "First trip together", date: "Jun 2023", photo: "images/event4.jpg" },
    { text: "Your birthday!", date: "Dec 2023", photo: "images/event5.jpg" }
],
loveNote: "Write your love note here..."
```
**Note:** List events in chronological order. Game shuffles them automatically!

**Gift Card:**
```javascript
giftCardAmount: "5000",
giftCardCode: "YOUR-NYKAA-CODE"
```

### 3. Test Locally (1 minute)

Double-click `index.html` to open in browser and test!

### 4. Deploy

**Easiest Method - Netlify:**
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire BBash folder onto the page
3. Done! Copy the URL

### 5. Create QR Code

1. Go to [qr-code-generator.com](https://www.qr-code-generator.com)
2. Paste your Netlify URL
3. Download QR code
4. Print or send to her!

---

## Example Questions You Can Use

### Level 1 - Memory Match
- "Where did we have our first date?"
- "What was the first movie we watched together?"
- "Where did we first say 'I love you'?"
- "What was our first trip together?"

### Level 2 - Photo Reveal
- "What were we celebrating in this photo?"
- "Where was this photo taken?"
- "What month was this taken?"
- "Who took this photo?"

### Level 3 - Timeline (Drag & Drop Events)
Use 4-5 major milestones in your relationship:
- "We met for the first time"
- "Our first date at [place]"
- "We became official 💕"
- "First trip to [destination]"
- "Celebrated [milestone]"
- "Your birthday celebration"

**Remember:** List them in chronological order in the code!

---

## Troubleshooting

**Photos not showing?**
- Check file names match exactly (case-sensitive)
- Make sure photos are in the `images` folder
- Try using lowercase file names

**Game not working?**
- Open browser console (F12) to see errors
- Make sure all three files are in the same folder
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**QR code not working?**
- Make sure you deployed the site (not using file:// URL)
- Test the URL in your phone browser first
- Try generating QR code again

---

## 💕 You're All Set!

The game is ready to make her birthday special! 🎉
