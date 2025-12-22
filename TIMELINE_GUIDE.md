# ⏰ Timeline Challenge Guide

## How It Works

Level 3 is now an **interactive drag-and-drop timeline** where she arranges major events from your relationship in chronological order!

## 🎮 Gameplay

1. **She sees:** 4-5 shuffled event cards at the bottom
2. **She drags:** Each event card to the numbered timeline slots
3. **She arranges:** Events from earliest (1) to latest (5)
4. **Need to rearrange?** Click on any placed event to remove it back to the pool
5. **She checks:** Clicks "Check My Answer" button
6. **Result:** 
   - ✅ Correct → Celebration mascot + beautiful timeline reveal with all photos
   - ❌ Wrong → Hint message, she can try again!

## 📝 How to Customize

### In `script.js`, find `level3` in the `gameData` object:

```javascript
level3: {
    events: [
        {
            text: "We met for the first time",
            date: "January 2023",
            photo: "images/event1.jpg"
        },
        {
            text: "Our first date at the café",
            date: "February 2023",
            photo: "images/event2.jpg"
        },
        {
            text: "We became official 💕",
            date: "March 2023",
            photo: "images/event3.jpg"
        },
        {
            text: "Our first trip together",
            date: "June 2023",
            photo: "images/event4.jpg"
        },
        {
            text: "Celebrated your birthday",
            date: "December 2023",
            photo: "images/event5.jpg"
        }
    ],
    loveNote: "Your heartfelt message here..."
}
```

## ⚠️ IMPORTANT Rules

### 1. **List Events in CORRECT Chronological Order**
The game will shuffle them automatically. You just need to list them from earliest to latest in the code.

### 2. **Use 4-5 Events**
- Minimum: 4 events
- Maximum: 5 events (recommended)
- More than 5 may be too challenging/long

### 3. **Each Event Needs:**
- `text`: Short description (e.g., "Our first date")
- `date`: Month and Year (e.g., "March 2023")
- `photo`: Path to photo (e.g., "images/event1.jpg")

## 💡 Event Ideas

### Relationship Milestones
- "We met for the first time"
- "Our first conversation"
- "First date at [place]"
- "We became official 💕"
- "First 'I love you'"
- "Met each other's families"
- "First trip together"
- "Moved in together"
- "First anniversary"

### Special Moments
- "Your birthday celebration"
- "Our first Valentine's Day"
- "That surprise date"
- "The day we [inside joke]"
- "When you [sweet memory]"
- "Our favorite concert/event"
- "That amazing trip to [place]"

### Recent Memories
- "Last month's adventure"
- "That special dinner"
- "Weekend getaway"
- "Your graduation/achievement"
- "Our latest celebration"

## 🎨 Visual Features

### Timeline Display
- Pink gradient background
- Vertical timeline line
- Numbered slots (1, 2, 3, 4, 5)
- Empty slots say "Drop event here..."
- Filled slots turn green
- **Click filled slots to remove** - hover shows ✕ icon

### Event Cards
- White cards with pink borders
- Show event text and date
- Draggable with cursor/touch
- Hover effect for feedback
- Placed cards turn light green

### Success Reveal
- Beautiful vertical timeline
- Each event shows:
  - Number badge
  - Event text
  - Date in pink
  - Photo (150px height)
- Your love note at the bottom

## 🔄 Rearranging Events

Made a mistake? No problem!

### Two Ways to Rearrange:

1. **Click to Remove**
   - Click any placed event in the timeline
   - It returns to the pool at the bottom
   - Drag it to a different slot

2. **Drag to Swap**
   - Drag a new event to an occupied slot
   - The old event automatically returns to the pool
   - New event takes its place

### Visual Feedback:
- Hover over placed events → see ✕ icon
- Slot background changes on hover
- Clear indication it's clickable

## 📱 Mobile Support

The drag-and-drop works on:
- ✅ Desktop (mouse drag + click)
- ✅ Mobile (touch drag + tap)
- ✅ Tablets
- ✅ All modern browsers

## 🎯 Tips for Great Events

### 1. **Be Specific**
❌ "We went somewhere"
✅ "Our first trip to the beach"

### 2. **Include Emotions**
❌ "We became a couple"
✅ "We became official 💕"

### 3. **Use Inside References**
- Places only you two know
- Nicknames or jokes
- Special moments she'll remember

### 4. **Vary the Types**
Mix different kinds of events:
- First times
- Celebrations
- Adventures
- Milestones
- Surprises

### 5. **Make It Personal**
Every event should trigger a happy memory!

## 🔧 Advanced Customization

### Change Number of Events

In `script.js`, just add or remove events from the array. The game automatically adjusts!

**For 4 events:**
```javascript
events: [
    { text: "Event 1", date: "Jan 2023", photo: "images/1.jpg" },
    { text: "Event 2", date: "Mar 2023", photo: "images/2.jpg" },
    { text: "Event 3", date: "Jun 2023", photo: "images/3.jpg" },
    { text: "Event 4", date: "Dec 2023", photo: "images/4.jpg" }
]
```

**For 6 events:** (if you want more challenge)
Just add more objects to the array!

### Adjust Difficulty

**Easier:**
- Use very distinct dates (months apart)
- Use obvious milestones
- 4 events instead of 5

**Harder:**
- Use closer dates
- More subtle events
- 5-6 events

## 🐛 Troubleshooting

**Events not shuffling?**
- They shuffle automatically on page load
- Refresh to see different order

**Can't drag events?**
- Make sure you're using a modern browser
- Try Chrome, Firefox, Safari, or Edge
- Check that JavaScript is enabled

**Photos not showing in reveal?**
- Check photo paths are correct
- Make sure photos are in `images` folder
- Verify file names match exactly

**Timeline looks weird on mobile?**
- The CSS is already responsive
- Try portrait orientation
- Zoom out if needed

## 🎉 What Happens When She Wins

1. ✨ Celebration mascot jumps up
2. 🎊 Timeline game hides
3. 📸 Beautiful timeline reveals with all photos in order
4. 💕 Your love note appears
5. ➡️ "Continue" button to final level

---

## Example Timeline

Here's a complete example you can use as a template:

```javascript
level3: {
    events: [
        {
            text: "We matched on the dating app 💕",
            date: "December 2022",
            photo: "images/first-match.jpg"
        },
        {
            text: "Our first coffee date",
            date: "January 2023",
            photo: "images/first-date.jpg"
        },
        {
            text: "Made it official at the park",
            date: "February 2023",
            photo: "images/official.jpg"
        },
        {
            text: "First weekend trip to the mountains",
            date: "May 2023",
            photo: "images/trip.jpg"
        },
        {
            text: "Celebrated your birthday together 🎂",
            date: "December 2023",
            photo: "images/birthday.jpg"
        }
    ],
    loveNote: "From our first message to now, every moment has been magical. You've brought so much joy, laughter, and love into my life. I can't wait to create countless more memories with you! 💖"
}
```

---

**Make it personal, make it sweet, and watch her smile! 🥰**
