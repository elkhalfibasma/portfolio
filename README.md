# Portfolio Website - Basma EL KHALFI

## Overview
This is a modern, responsive portfolio website built with HTML, CSS (Tailwind CSS), and JavaScript. The design features a consistent color palette (#FFD580 gold accent, #1C1E26 dark backgrounds) across all pages.

## Pages

### 1. **index.html** - Home Page
- Hero section with professional introduction
- About Me section with photo and contact information
- Social media icons (GitHub and LinkedIn) added in the "Find Me On" section
- Download CV button

### 2. **about.html** - About Me Page
- Professional description section
- Technical skills displayed in an attractive grid layout with icons
- Skills included: Java/J2EE, C/C++/C#, Mobile Development, React.js/Node.js, SQL/NoSQL, PHP/Python/.NET/Django

### 3. **projects.html** - Projects Page
- **Two-column layout:**
  - **Left side:** Project list divided into Professional Projects and Academic Projects
  - **Right side:** Detailed project information (description, technologies, image placeholder)
- **6 Projects included:**
  - **Professional:** ENL Application (ONEE), Mini CRM (Rankin Digital)
  - **Academic:** Health Tracker AI, JobMatch, YNAB, AI Interview Platform
- Click on any project to view its details

### 4. **certifications.html** - Certifications Page
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- 6 certification card placeholders
- Click to enlarge functionality (modal/lightbox)
- Download buttons for each certification
- "Lifetime Achievement" badge section at the top

### 5. **contact.html** - Contact Page
- **Left side:** Contact form with validation
  - Fields: Full Name, Email, Message
  - Form validation with error messages
  - Currently uses mailto: fallback (opens email client)
  - EmailJS integration ready (see setup instructions below)
- **Right side:** Contact information with social media links
  - Email, Phone, Location
  - GitHub and LinkedIn icons

## How to Add Images

### For Projects (projects.html)
Each project has a placeholder marked with:
```html
<!-- Insert [PROJECT NAME] project image here -->
```

Replace the placeholder div with an actual image:
```html
<img src="path/to/your/image.jpg" alt="Project Name" class="w-full h-64 object-cover rounded-xl">
```

### For Certifications (certifications.html)
Each certification card has a placeholder. Replace:
```html
<div class="bg-gradient-to-br from-[#FFD580]/20 to-[#6C63FF]/20 h-48 flex items-center justify-center border-2 border-[#FFD580]/50">
    <p class="text-[#E0E0E0] text-center px-4">📜 Certification Image Placeholder 1<br><small>Click to enlarge</small></p>
</div>
```

With:
```html
<img src="path/to/certification1.jpg" alt="Certification Name" class="w-full h-48 object-cover">
```

Also update:
1. The certification name in `<h3>` tag
2. The issuing organization and year
3. The download link `href` attribute
4. The `onclick` function to pass the correct image source to the modal

## Setting Up EmailJS (Optional - for Contact Form)

To enable email sending directly from the contact form without a backend:

1. **Create EmailJS Account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service:**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Get your Service ID

3. **Create Email Template:**
   - Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Get your Template ID

4. **Get Public Key:**
   - Find your Public Key in the EmailJS dashboard

5. **Update contact.html:**
   - Find the commented section in `contact.html`
   - Uncomment the initialization code:
   ```javascript
   (function() {
       emailjs.init("YOUR_PUBLIC_KEY");
   })();
   ```
   - Uncomment the emailjs.send() block in the form submission handler
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual credentials

## Color Palette
- **Primary Accent:** #FFD580 (Gold)
- **Background:** #1C1E26 (Dark)
- **Text Primary:** #F5F5F5 (Light)
- **Text Secondary:** #E0E0E0
- **Borders:** #6C63FF (Purple accent)

## File Structure
```
Portfolio/
├── index.html              # Home page
├── about.html              # About Me page
├── projects.html           # Projects page with two-column layout
├── certifications.html     # Certifications grid with modal
├── contact.html            # Contact form and information
├── styles.css              # Custom CSS styles
├── script.js               # JavaScript functionality
├── CV_ELKHALFI_Basma.pdf   # Downloadable CV
├── 1727476970661.jfif      # Profile photo
└── README.md               # This file
```

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS 2.2.19 (via CDN)
- EmailJS (optional, for contact form)

## Responsive Design
The website is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Navigation
All pages have consistent navigation:
- Home
- About Me
- Projects
- Certifications
- Contact

## Next Steps
1. Add your certification images to the certifications page
2. Add project screenshots to the projects page
3. (Optional) Set up EmailJS for the contact form
4. Update the profile image if needed
5. Update CV file if needed

## Notes
- All placeholder images have clear HTML comments indicating where to insert actual images
- The website uses only HTML, CSS, and JavaScript as requested - no frameworks beyond Tailwind CSS
- All content is in English as specified
- The design is consistent across all pages, based on the index.html template

## Support
For any questions or modifications needed, refer to the HTML comments in each file which provide guidance on customization.
