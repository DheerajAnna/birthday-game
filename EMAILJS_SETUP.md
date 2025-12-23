# 📧 EmailJS Setup Guide - Auto-Send Emails!

## What This Does

With EmailJS configured, the email will **automatically send** when she clicks the button - no need to open email client!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with Google or email

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred service)
4. Click **"Connect Account"**
5. Sign in with your Gmail
6. Copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name:** Birthday Gift Card
4. **Template Content:**

```
Subject: {{subject}}

To: {{to_email}}

Content:
{{{html_content}}}
```

5. Click **"Save"**
6. Copy the **Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key

1. Click **"Account"** → **"General"**
2. Find **"Public Key"**
3. Copy it (looks like: `AbCdEfGhIjKlMnOp`)

### Step 5: Update Your Code

Open `script.js` and replace these lines (around line 786-788):

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'AbCdEfGhIjKlMnOp'; // Your Public Key
```

### Step 6: Test It!

1. Open `index.html`
2. Complete the game
3. Click "Email to Me 💌"
4. Watch it send automatically! ✨

---

## 📋 Detailed Template Setup

### Template Settings in EmailJS:

**To Email:**
```
{{to_email}}
```

**Subject:**
```
{{subject}}
```

**Content (HTML):**
```html
{{{html_content}}}
```

**Optional - Add these variables:**
- `{{gift_code}}` - The gift card code
- `{{gift_amount}}` - The amount
- `{{final_note}}` - Your love note

---

## 🎯 How It Works

### With EmailJS Configured:
1. User clicks "Email to Me"
2. Button shows "Sending... ⏳"
3. Email sends automatically via EmailJS
4. Button shows "✓ Sent!"
5. Success message appears
6. Email arrives in inbox! 📧

### Without EmailJS (Fallback):
1. Opens email client (like before)
2. User clicks send manually

---

## 💡 Pro Tips

### Test Email First
```javascript
// Use your email for testing
const recipientEmail = 'annadheeraj2003@gmail.com';

// After testing, change to:
const recipientEmail = 'aayushi2003thakur@gmail.com';
```

### Check Email Quota
- Free plan: 200 emails/month
- More than enough for personal use!
- Check usage in EmailJS dashboard

### Troubleshooting

**Email not sending?**
1. Check browser console for errors
2. Verify Service ID, Template ID, Public Key
3. Make sure Gmail is connected in EmailJS
4. Check EmailJS dashboard for failed sends

**Falls back to mailto?**
- EmailJS credentials not configured
- Service/Template ID incorrect
- Network issue
- Will still work via email client!

---

## 🔒 Security

### Is it safe?
✅ **Yes!** EmailJS handles everything securely:
- Your Gmail password is never exposed
- Public Key is safe to use in frontend
- OAuth authentication with Google
- No sensitive data in code

### Keep Private:
- Don't share your EmailJS account
- Keep Service/Template IDs in your code only
- If deploying publicly, consider environment variables

---

## 📊 Email Tracking

In EmailJS dashboard you can see:
- ✅ Emails sent successfully
- ❌ Failed emails
- 📈 Usage statistics
- 📧 Email history

---

## 🎨 Customize Email Template

### Option 1: Use HTML Content (Current)
The email uses the beautiful HTML we created in the code.

### Option 2: Custom Template in EmailJS
Create your own template in EmailJS dashboard:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { background: #ffeef8; padding: 20px; }
        .container { background: white; padding: 30px; border-radius: 20px; }
        .code { font-size: 2rem; color: #ff1493; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎁 Happy Birthday!</h1>
        <p>Your Nykaa Gift Card</p>
        <div class="code">{{gift_code}}</div>
        <p>Amount: ₹{{gift_amount}}</p>
        <p>{{final_note}}</p>
    </div>
</body>
</html>
```

---

## 🚀 Alternative: Without EmailJS

If you don't want to set up EmailJS, the current code will:
1. Fall back to `mailto:` (opens email client)
2. Still works perfectly
3. User just needs to click "Send"

To use without EmailJS:
- Just leave the IDs as `'YOUR_SERVICE_ID'`
- It will automatically use mailto fallback

---

## 📱 Mobile Support

EmailJS works on:
- ✅ iPhone/iPad
- ✅ Android
- ✅ Desktop
- ✅ All browsers

---

## 🎁 Final Checklist

Before deploying:

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Service ID, Template ID, Public Key added to code
- [ ] Tested with your email
- [ ] Changed to her email: `aayushi2003thakur@gmail.com`
- [ ] Deployed to hosting
- [ ] QR code generated
- [ ] Ready to share! 🎉

---

## 🆘 Need Help?

### EmailJS Documentation
https://www.emailjs.com/docs/

### Common Issues

**"emailjs is not defined"**
- Make sure EmailJS script is loaded in HTML
- Check line 190 in index.html

**"Invalid service ID"**
- Double-check Service ID in EmailJS dashboard
- Make sure it matches exactly

**"Template not found"**
- Verify Template ID
- Make sure template is saved

---

## 💰 Pricing

**Free Plan:**
- 200 emails/month
- Perfect for personal use
- No credit card required

**If you need more:**
- Paid plans start at $7/month
- 1000+ emails
- Priority support

---

**You're all set!** With EmailJS, the email will send automatically with one click! 🎉💌
