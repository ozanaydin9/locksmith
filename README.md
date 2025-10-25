# 🔑 Acil Çilingir - Professional Locksmith Website

A modern, production-ready locksmith website built with Next.js 15, Material UI, and Framer Motion. Features responsive design, SEO optimization, and smooth animations.

## 🚀 Features

### 🎨 Design & UX
- **Modern, mobile-first design** with dark navy (#081229) and gold (#F6B93B) color scheme
- **Animated hero section** with key/lock animation using Framer Motion
- **Smooth scroll navigation** with sticky header
- **Responsive design** optimized for all devices
- **Accessibility-focused** with proper ARIA labels and semantic HTML

### 🛠 Technical Stack
- **Next.js 15** with App Router
- **React 19** with modern hooks and features
- **Material UI (MUI)** for consistent design system
- **Framer Motion** for smooth animations
- **TypeScript-ready** (can be easily converted)

### 📱 Key Components
1. **Hero Section** - Animated key/lock with CTAs
2. **Services** - 6 service cards with hover effects
3. **About** - Trust indicators and testimonials
4. **Map Section** - Google Maps integration with service areas
5. **Contact Form** - Full-featured form with validation
6. **WhatsApp FAB** - Floating action buttons for quick contact

### 🔧 Functionality
- **Contact form** with server-side validation
- **WhatsApp integration** with pre-filled messages
- **Phone call links** for direct contact
- **Geolocation support** (optional user permission)
- **SEO optimization** with metadata and JSON-LD schema
- **Performance optimized** with lazy loading and compression

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Environment Variables (Optional)
Create a `.env.local` file for production integrations:

```env
# Email Integration (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key

# Email Integration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# SMS Integration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890
BUSINESS_PHONE_NUMBER=+905XXXXXXXXX

# Database (if using Prisma/MongoDB)
DATABASE_URL=your_database_connection_string
```

### 3. Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

```bash
# Or deploy via Vercel CLI
npm i -g vercel
vercel --prod
```

### Other Platforms
- **Netlify**: Works with static export
- **Railway**: Full-stack deployment
- **DigitalOcean App Platform**: Container deployment
- **AWS Amplify**: Serverless deployment

## 📝 Customization Guide

### 🏢 Business Information
Replace placeholder information in these files:

1. **Contact Information** (`components/Hero.jsx`, `components/Footer.jsx`):
   ```javascript
   // TODO: Replace with actual phone number
   href="tel:+905XXXXXXXXX"
   
   // TODO: Replace with actual WhatsApp number  
   href="https://wa.me/905XXXXXXXXX?text=..."
   
   // TODO: Replace with actual email
   href="mailto:info@acilcilingir.com"
   ```

2. **Business Name & Address** (`app/layout.jsx`):
   ```javascript
   // Update JSON-LD schema with actual business info
   "name": "Your Business Name",
   "address": {
     "streetAddress": "Your Street Address",
     "addressLocality": "Your City",
     // ...
   }
   ```

3. **Google Maps** (`components/MapSection.jsx`):
   ```javascript
   // Replace with your actual location coordinates
   src="https://www.google.com/maps/embed?pb=!1m18!..."
   ```

### 🎨 Styling & Branding
1. **Colors** (`app/theme.js`):
   ```javascript
   primary: {
     main: '#F6B93B', // Your brand color
   },
   secondary: {
     main: '#081229', // Your secondary color
   }
   ```

2. **Logo**: Replace emoji in header with actual logo image
3. **Fonts**: Update font imports in `app/layout.jsx`

### 📧 Email Integration

#### SendGrid Setup
```javascript
// In app/api/contact/route.js
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'your-email@domain.com',
  from: 'noreply@yourdomain.com',
  subject: `New Contact Form - ${name}`,
  html: `...`
}

await sgMail.send(msg)
```

#### SMTP Setup (Gmail/Outlook)
```javascript
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})
```

### 🗄 Database Integration
For storing contact form submissions:

```javascript
// Example with Prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

await prisma.contactSubmission.create({
  data: { name, phone, message, createdAt: new Date() }
})
```

## 🌐 SEO & Performance

### Built-in SEO Features
- **Meta tags** with Turkish keywords
- **JSON-LD schema** for LocalBusiness
- **Open Graph** and Twitter Card tags
- **Sitemap** generation (add `app/sitemap.js`)
- **Robots.txt** (add `public/robots.txt`)

### Performance Optimizations
- **Image optimization** with Next.js Image component
- **Lazy loading** for maps and heavy components
- **Code splitting** with dynamic imports
- **Compression** enabled in Next.js config

### Lighthouse Score Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 🔧 Advanced Features

### Analytics Integration
```javascript
// Google Analytics 4
// Add to app/layout.jsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Internationalization (i18n)
```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
}
```

### Progressive Web App (PWA)
```bash
npm install next-pwa
```

## 📱 Mobile Optimization

### Key Mobile Features
- **Sticky bottom CTAs** for easy thumb access
- **Touch-friendly buttons** (minimum 44px)
- **Swipe gestures** for service cards
- **Optimized forms** with proper input types
- **Fast loading** with critical CSS inlining

## 🔒 Security

### Implemented Security Features
- **CSRF protection** with Next.js built-ins
- **Input validation** on both client and server
- **Rate limiting** (add middleware for production)
- **Security headers** in Next.js config
- **Environment variable protection**

### Additional Security (Production)
```javascript
// Add rate limiting middleware
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
})
```

## 🐛 Troubleshooting

### Common Issues
1. **Framer Motion SSR issues**: Ensure `'use client'` directive
2. **MUI hydration warnings**: Check theme consistency
3. **Map not loading**: Verify Google Maps API key
4. **Form not submitting**: Check API route and validation

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and customization services:
- **Email**: developer@example.com
- **Website**: https://yourwebsite.com
- **Documentation**: Check the `/docs` folder for detailed guides

---

**Built with ❤️ for locksmith businesses everywhere**