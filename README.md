# Davidov Israel Investments - Website

A professional real estate website for American Jewish investors interested in Israeli property.

## 📁 File Structure

```
davidov-israel-investments/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                 # All images (YOU NEED TO ADD THESE)
│   ├── hero-bg.jpg        # Hero background (Jerusalem skyline)
│   ├── jerusalem.jpg      # Jerusalem area card
│   ├── tel-aviv.jpg       # Tel Aviv area card
│   ├── herzliya.jpg       # Herzliya area card
│   ├── netanya.jpg        # Netanya area card
│   ├── rishon.jpg         # Rishon LeZion area card
│   ├── team.jpg           # Your team/personal photo
│   ├── testimonial-1.jpg  # Client photo 1
│   ├── testimonial-2.jpg  # Client photo 2
│   ├── testimonial-3.jpg  # Client photo 3
│   ├── blog-1.jpg         # Blog post image 1
│   ├── blog-2.jpg         # Blog post image 2
│   ├── blog-3.jpg         # Blog post image 3
│   ├── favicon.png        # Browser tab icon (32x32 or 64x64)
│   └── og-image.jpg       # Social media preview (1200x630)
└── pages/
    ├── services.html      # Services page (create later)
    ├── areas.html         # Areas page (create later)
    ├── about.html         # About page (create later)
    ├── testimonials.html  # Testimonials page (create later)
    ├── blog.html          # Blog page (create later)
    ├── contact.html       # Contact page ✓
    ├── privacy.html       # Privacy policy (create later)
    └── terms.html         # Terms of service (create later)
```

## 🚀 How to Host on GitHub Pages (FREE)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up" and create an account
3. Verify your email

### Step 2: Create a New Repository
1. Click the "+" icon in the top right → "New repository"
2. Name it: `davidov-israel-investments` (or any name you want)
3. Make it **Public**
4. Check "Add a README file"
5. Click "Create repository"

### Step 3: Upload Your Files
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop ALL the files from this folder
3. Click "Commit changes"

**OR use GitHub Desktop:**
1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Copy all files to the cloned folder
4. Commit and push

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" (tab at the top)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 5: Access Your Website
After a few minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/davidov-israel-investments/
```

## 🔧 Things You MUST Update

### 💡 Quick Navigation
The website includes helpful comments to guide you. Search for these in `index.html`:
- **`⚠️ PLACEHOLDER`** - Marks sections that need your customization
- **`[`** - Finds all bracketed placeholders that need replacing
- **`========`** - Section dividers for major site sections

**TIP:** Use Ctrl+F (Cmd+F on Mac) to quickly jump between placeholders.

### 📋 All Sections with Comments
The website is organized with clear section markers:

1. **HERO SECTION** - Main landing area with headline
2. **SERVICES SECTION** - What you offer to clients
3. **PROCESS SECTION** - 4-step journey explanation
4. **AREAS SECTION** - ⚠️ Add location images
5. **TESTIMONIALS SECTION** - ⚠️ Replace [CLIENT NAME] (3 testimonials)
6. **WHY CHOOSE US SECTION** - ⚠️ Add team photo
7. **BLOG/KNOWLEDGE CENTER SECTION** - Educational content
8. **CONTACT FORM SECTION** - ⚠️ Update phone/email/WhatsApp
9. **FOOTER SECTION** - ⚠️ Update contact information
10. **WHATSAPP FLOATING BUTTON** - ⚠️ Update link with your number

### 1. Contact Information
Search and replace these placeholders in ALL files:

| Placeholder | Replace With |
|-------------|--------------|
| `[US PHONE NUMBER]` | Your US phone (e.g., +1-555-123-4567) |
| `[ISRAEL PHONE NUMBER]` | Your Israel phone (e.g., +972-XX-XXX-XXXX) |
| `[EMAIL ADDRESS]` | Your email (e.g., info@davidov-israel.com) |
| `[WHATSAPP NUMBER]` | WhatsApp number |
| `https://wa.me/1XXXXXXXXXX` | WhatsApp link (e.g., https://wa.me/15551234567) |
| `[CLIENT NAME]` | Real client names for testimonials |
| `[PHONE]` | Phone number |

### 2. Images
Add these images to the `/images/` folder:

**Required Images:**
- `hero-bg.jpg` - Jerusalem or Israel skyline (1920x1080 recommended)
- `jerusalem.jpg` - Jerusalem city image (800x600)
- `tel-aviv.jpg` - Tel Aviv image (800x600)
- `herzliya.jpg` - Herzliya/beach image (800x600)
- `netanya.jpg` - Netanya image (800x600)
- `rishon.jpg` - Rishon LeZion image (800x600)
- `team.jpg` - Your photo or team photo (600x800)
- `favicon.png` - Small icon (32x32)

**Optional but Recommended:**
- Client testimonial photos
- Blog post images

**Free Image Sources:**
- https://unsplash.com (search "Jerusalem", "Tel Aviv", etc.)
- https://pexels.com

### 3. Statistics (if different)
Update these numbers in `index.html`:
- `$50M+` - Investment managed
- `150+` - Families served
- `10+` - Years experience

### 4. Form Setup (Contact Page)
The contact form uses Formspree (free):
1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in `pages/contact.html` with your actual ID

## 🌐 Custom Domain (Optional)

If you want a custom domain like `davidov-israel.com`:

1. Buy a domain from:
   - Namecheap (https://namecheap.com)
   - GoDaddy (https://godaddy.com)
   - Google Domains (https://domains.google)

2. In GitHub repository Settings → Pages:
   - Add your custom domain

3. In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

4. Wait 24-48 hours for DNS propagation

## 📝 Creating Additional Pages

The other pages (services.html, about.html, etc.) follow the same structure as contact.html. Copy contact.html and modify the content.

## ❓ Need Help?

If you get stuck:
1. GitHub Pages docs: https://docs.github.com/en/pages
2. Formspree docs: https://help.formspree.io

---

Good luck with your website! 🏠🇮🇱
