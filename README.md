# Katleho Mokoena - Career Portfolio Website

A modern, responsive portfolio website showcasing skills and experience in Software Development, Application Support Engineering, and Data Analysis.

## 🌐 Live Website

Once deployed to GitHub Pages, your website will be available at:
`https://[your-username].github.io/[repository-name]/`

## 📁 Project Structure

```
Career Website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## 🚀 How to Host on GitHub Pages

Follow these step-by-step instructions to get your website live:

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Repository
1. Click the **"+"** icon in the top right corner
2. Select **"New repository"**
3. Name your repository (e.g., `career-portfolio` or `katleho-mokoena-portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click **"Create repository"**

### Step 3: Initialize Git in Your Project Folder

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Career portfolio website"
```

### Step 4: Connect to GitHub and Push Files

```bash
# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push your files to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted to enter your GitHub username and password (or personal access token).

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**

### Step 6: Access Your Live Website

1. GitHub will provide you with a URL (usually takes 1-2 minutes to deploy)
2. Your website will be available at: `https://[your-username].github.io/[repository-name]/`
3. You can find this URL in the **"Pages"** settings section

## 🔄 Updating Your Website

Whenever you make changes to your website:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

Your changes will be live on GitHub Pages within 1-2 minutes!

## 📝 Customization Tips

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change this to your preferred color */
    --primary-dark: #1e40af;
    /* ... other colors */
}
```

### Update Content
- Edit `index.html` to change text, add sections, or modify content
- All your information is in the HTML file

### Add More Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link in the navbar

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features (Grid, Flexbox, CSS Variables)
- **JavaScript** - Interactivity and animations
- **Google Fonts** - Inter font family
- **GitHub Pages** - Free hosting

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive timeline for work experience
- ✅ Skills showcase with hover effects
- ✅ Certificate gallery
- ✅ Language proficiency bars
- ✅ Contact information section
- ✅ Modern, professional design
- ✅ Fast loading and optimized

## 🔒 Privacy Note

Your contact information (email, phone) is visible on the website. If you prefer, you can:
- Use a contact form instead
- Use a professional email forwarding service
- Add privacy settings

## 📞 Support

If you encounter any issues:
1. Check GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
2. Verify your repository is set to "Public"
3. Ensure your `index.html` is in the root directory
4. Check the "Actions" tab in GitHub for deployment status

## 🎉 You're All Set!

Your professional portfolio website is now live and ready to share with recruiters and employers. Simply paste the GitHub Pages URL in your job applications!

---

**Built with ❤️ for your career success**

