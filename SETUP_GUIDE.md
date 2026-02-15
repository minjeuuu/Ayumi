# 🚀 AYUMI ENHANCED - SETUP & DEPLOYMENT GUIDE

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Modern browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and images)

---

## 🛠️ Installation Steps

### 1. Install Dependencies

```bash
cd ayumi-enhanced
npm install
```

This will install all required packages:
- React 19.2.3
- TypeScript 5.8.2
- Vite 6.2.0
- Anthropic AI SDK
- Tailwind CSS
- Lucide Icons
- Framer Motion
- Zustand
- And more...

### 2. Configure Environment

The `.env.local` file is already configured with the API key. No changes needed unless you want to customize settings.

### 3. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

---

## 🏗️ Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Option 2: Vercel

1. Import project from Git
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy:
npm run deploy
```

### Option 4: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 5: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

Build and run:
```bash
docker build -t ayumi-enhanced .
docker run -p 5173:5173 ayumi-enhanced
```

---

## 🔧 Configuration Options

### Theme Customization

Edit `utils/themeConfig.ts` to:
- Add new themes
- Modify existing colors
- Change font families
- Adjust spacing/sizing

### Bible Versions

To add more versions, update:
1. `types.ts` - Add to BibleVersion type
2. `services/bibleService.ts` - Add API endpoint
3. `constants/bibleData.ts` - Add version info

### Image Sources

Modify `services/imageService.ts` to:
- Add new image APIs
- Change default sources
- Customize image categories

---

## 📱 Mobile App Conversion

### Progressive Web App (PWA)

Add to `index.html`:
```html
<link rel="manifest" href="/manifest.json">
```

Create `public/manifest.json`:
```json
{
  "name": "Ayumi - Walking with God",
  "short_name": "Ayumi",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#1e40af",
  "background_color": "#ffffff"
}
```

### Capacitor (iOS & Android)

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add ios
npx cap add android
npm run build
npx cap sync
npx cap open ios
npx cap open android
```

### React Native Conversion

Consider using React Native Web for cross-platform development.

---

## 🔒 Security Best Practices

### API Key Protection

1. **Never commit `.env.local` to Git**
2. Use environment variables in production
3. Implement rate limiting
4. Add request authentication
5. Monitor API usage

### Data Privacy

1. All data stored locally by default
2. Implement data encryption for sensitive info
3. Add user consent for data collection
4. Provide data export/delete options
5. Follow GDPR/CCPA guidelines

---

## 🧪 Testing

### Unit Tests (Optional Setup)

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Add to `package.json`:
```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest --coverage"
}
```

### E2E Tests (Optional Setup)

```bash
npm install --save-dev @playwright/test
npx playwright install
```

---

## 📊 Performance Optimization

### Image Optimization

1. Use lazy loading for images
2. Implement progressive image loading
3. Cache images locally
4. Use WebP format where supported

### Code Splitting

Already implemented via Vite's built-in code splitting.

### Caching Strategy

```typescript
// Service Worker (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### API Issues

1. Check API key is correct
2. Verify network connection
3. Check API rate limits
4. Review error logs

### Theme Not Applying

1. Clear browser cache
2. Check localStorage
3. Verify theme config
4. Reload page

---

## 📈 Monitoring & Analytics

### Add Google Analytics

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### Error Tracking

Consider integrating:
- Sentry
- LogRocket
- Rollbar

---

## 🔄 Updates & Maintenance

### Updating Dependencies

```bash
npm outdated
npm update
```

### Version Control

```bash
git add .
git commit -m "feat: Enhanced version with 200+ new features"
git push
```

---

## 📚 Additional Resources

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Anthropic API**: https://docs.anthropic.com
- **TypeScript**: https://www.typescriptlang.org

---

## 🎯 Performance Benchmarks

Expected metrics:
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+
- **Bundle Size**: ~500KB (gzipped)

---

## ✅ Pre-Launch Checklist

- [ ] Test all 12 themes
- [ ] Verify all 10 Bible versions work
- [ ] Test on mobile, tablet, desktop
- [ ] Check all API integrations
- [ ] Test offline functionality
- [ ] Verify data persistence
- [ ] Test all navigation flows
- [ ] Check accessibility (WCAG AA)
- [ ] Review error handling
- [ ] Test performance
- [ ] Security audit
- [ ] User testing

---

## 🚀 Launch Day

1. Final build: `npm run build`
2. Deploy to production
3. Smoke test all features
4. Monitor error logs
5. Track user feedback
6. Celebrate! 🎉

---

## 💡 Tips for Success

1. **Start Simple**: Enable features gradually
2. **Monitor Usage**: Track which features users love
3. **Gather Feedback**: Listen to user requests
4. **Iterate Quickly**: Push updates frequently
5. **Document Changes**: Keep changelog updated
6. **Build Community**: Engage with users
7. **Stay Prayerful**: This is ministry work!

---

## 🙏 Remember

This app is a tool for spiritual growth. The technology serves the mission. Keep the focus on helping people walk closer with God.

> "Your word is a lamp to my feet and a light to my path." - Psalm 119:105

---

**Happy Deploying! May this app bless many!** 🌟
