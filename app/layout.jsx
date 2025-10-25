import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import theme from './theme'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export const metadata = {
  title: 'CEM ANAHTAR - Ertan Ügüt | 7/24 Çilingir Hizmetleri Kadıköy',
  description: 'Kadıköy merkezli profesyonel çilingir hizmetleri. Kapı açma, anahtar kopyalama, araç çilingir ve güvenlik sistemleri. Ertan Ügüt ile güvenilir çözümler.',
  keywords: 'çilingir, anahtarcı, acil çilingir, kapı açma, anahtar kopyalama, 7/24 çilingir, araç çilingir, kasa açma, kilit değişimi, Kadıköy çilingir, CEM ANAHTAR, Ertan Ügüt',
  authors: [{ name: 'CEM ANAHTAR' }],
  creator: 'CEM ANAHTAR',
  publisher: 'CEM ANAHTAR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acil-cilingir.vercel.app'), // TODO: Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CEM ANAHTAR - Ertan Ügüt | Kadıköy Çilingir Hizmetleri',
    description: 'Kadıköy merkezli profesyonel çilingir hizmetleri. Kapı açma, anahtar kopyalama, araç çilingir ve güvenlik sistemleri.',
    url: 'https://cemanahtar.vercel.app', // TODO: Replace with actual domain
    siteName: 'CEM ANAHTAR',
    images: [
      {
        url: '/assets/og-image.jpg', // TODO: Add actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEM ANAHTAR - Kadıköy Çilingir Hizmetleri',
    description: 'Kadıköy merkezli profesyonel çilingir hizmetleri. Hızlı ve güvenilir çözümler.',
    images: ['/assets/og-image.jpg'], // TODO: Add actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://cemanahtar.vercel.app",
              "name": "CEM ANAHTAR - Ertan Ügüt",
              "image": "https://cemanahtar.vercel.app/assets/logo.jpg",
              "description": "Kadıköy merkezli profesyonel çilingir hizmetleri. Kapı açma, anahtar kopyalama, araç çilingir ve güvenlik sistemleri.",
              "url": "https://cemanahtar.vercel.app",
              "telephone": "+905352057513",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Caferağa Mahallesi, Bahariye Caddesi 37 Dükkan: 40",
                "addressLocality": "Kadıköy",
                "addressRegion": "İstanbul",
                "postalCode": "34710",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.9877,
                "longitude": 29.0316
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 41.0082,
                  "longitude": 28.9784
                },
                "geoRadius": "50000"
              },
              "priceRange": "₺₺",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Çilingir Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Acil Kapı Açma"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Anahtar Kopyalama"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Araç Çilingir"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kasa Açma"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
