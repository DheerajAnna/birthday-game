# 💌 Email Gift Card Feature

## Overview

At the end of the game (Level 4), after the gift card is revealed, she can click the **"Email to Me 💌"** button to send herself a beautifully formatted email with the gift card code!

## 🎨 How It Works

### User Experience
1. She completes all 4 levels
2. Gift card reveals with confetti 🎊
3. Two buttons appear:
   - **Copy Code 📋** - Copies code to clipboard
   - **Email to Me 💌** - Sends email with gift card

### When She Clicks "Email to Me"
1. Opens her default email client (Gmail, Outlook, Apple Mail, etc.)
2. Email is pre-filled with:
   - **To:** aayushi2003thakur@gmail.com
   - **Subject:** 🎁 Your Birthday Gift Card! 💕
   - **Body:** Beautiful HTML-formatted email

3. She just needs to click "Send"!
4. Success message appears: "✉️ Gift card emailed to you! Check your inbox 💕"

## 📧 Email Content

The email includes:

### Header
- 🎁 Happy Birthday! 🎂

### Gift Card Box
- Nykaa branding
- Gift amount (₹5000 or your amount)
- Gift code in large, easy-to-read format
- Pink gradient background

### Personal Message
- Your final love note from the game
- Additional sweet message
- Hearts decoration 💕 💖 💗 💓 💝

### Footer
- "With all my love 💕"
- Instructions to redeem at Nykaa.com

## 🎨 Email Design

The email uses:
- **Pink theme** matching the game
- **Gradient backgrounds**
- **Large, readable gift code**
- **Responsive design** (looks good on mobile and desktop)
- **Professional styling** with inline CSS

## 🔧 Technical Details

### Email Recipient
Currently set to: `aayushi2003thakur@gmail.com`

To change, edit `script.js`:
```javascript
const recipientEmail = 'aayushi2003thakur@gmail.com'; // Change this
```

### Email Method
Uses `mailto:` protocol which:
- ✅ Works on all devices
- ✅ Opens default email client
- ✅ No server required
- ✅ Privacy-friendly (no third-party services)
- ✅ User controls sending

### Limitations
- User must have an email client configured
- HTML formatting may vary by email client
- Some clients may show plain text version

## 📱 Mobile Support

Works perfectly on:
- ✅ iPhone (Apple Mail, Gmail app)
- ✅ Android (Gmail, default mail app)
- ✅ Desktop (Outlook, Apple Mail, Thunderbird)
- ✅ Webmail (opens in browser)

## 🎯 User Flow

```
Complete Game → Gift Card Reveals → Click "Email to Me"
                                          ↓
                              Email Client Opens (pre-filled)
                                          ↓
                                  User Clicks Send
                                          ↓
                              Email Arrives in Inbox
                                          ↓
                          Beautiful Gift Card Email! 💕
```

## 💡 Why This Feature?

### Benefits:
1. **Backup** - She won't lose the gift code
2. **Convenience** - Easy to find later in email
3. **Beautiful** - Nicely formatted keepsake
4. **Shareable** - Can forward if needed
5. **Professional** - Looks like an official gift card email

## 🎨 Customization

### Change Email Recipient
In `script.js`, line ~788:
```javascript
const recipientEmail = 'newemail@example.com';
```

### Customize Email Content
In `script.js`, lines ~792-832, edit the HTML template:
- Change colors
- Modify text
- Add more sections
- Adjust styling

### Change Button Text
In `index.html`, line ~170:
```html
<button class="btn-email" onclick="emailGiftCard()">
    Your Custom Text 💌
</button>
```

## 🐛 Troubleshooting

**Email client doesn't open?**
- User may not have email configured
- Try on different device
- Copy code manually as backup

**Email looks plain?**
- Some email clients strip HTML
- Code is still readable in plain text
- Core information is preserved

**Wrong email address?**
- Update `recipientEmail` in script.js
- Refresh the page
- Complete game again

## 🔒 Privacy & Security

- ✅ No data sent to external servers
- ✅ No tracking or analytics
- ✅ Email stays on user's device until sent
- ✅ User controls when to send
- ✅ No third-party email services

## 📊 Success Indicators

After clicking the button:
1. Email client opens (or browser tab for webmail)
2. Green success message appears
3. Message auto-hides after 5 seconds
4. User can click again if needed

## 🎁 Example Email Preview

```
┌─────────────────────────────────────┐
│     🎁 Happy Birthday! 🎂          │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   Your Nykaa Gift Card        │ │
│  │         ₹5000                 │ │
│  │                               │ │
│  │   Your Gift Code:             │ │
│  │   NYKAA2024LOVE              │ │
│  └───────────────────────────────┘ │
│                                     │
│  You deserve the world and so      │
│  much more! Thank you for being    │
│  amazing...                        │
│                                     │
│  💕 💖 💗 💓 💝                    │
│                                     │
│  With all my love 💕               │
│  Use at Nykaa.com                  │
└─────────────────────────────────────┘
```

---

## 🚀 Ready to Use!

The email feature is fully functional and ready to go. She'll love having a beautiful email to keep! 💕

**Test it:** Complete the game and click "Email to Me" to see it in action!
