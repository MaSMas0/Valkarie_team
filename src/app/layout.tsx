import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.valkyrieracing.com'),
  title: {
    default: "Valkyrie Racing | Velocity, Racing, Xcellence",
    template: "%s | Valkyrie Racing"
  },
  description: "A student-led motorsport engineering team applying aerodynamic optimisation and precision design to extract maximum performance.",
  keywords: [
    "Valkyrie Racing",
    "motorsport engineering",
    "student racing team",
    "aerodynamics",
    "STEM racing",
    "F24 competition",
    "racing team 2026",
    "engineering competition",
    "precision design",
    "CAD design motorsport",
    "student engineers"
  ],
  authors: [{ name: "Valkyrie Racing Team" }],
  creator: "Valkyrie Racing",
  publisher: "Valkyrie Racing",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.valkyrieracing.com",
    siteName: "Valkyrie Racing",
    title: "Valkyrie Racing | Velocity, Racing, Xcellence",
    description: "A student-led motorsport engineering team applying aerodynamic optimisation and precision design to extract maximum performance.",
    images: [
      {
        url: "/images/logo-1200.webp",
        width: 1200,
        height: 630,
        alt: "Valkyrie Racing Logo"
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Valkyrie Racing | Velocity, Racing, Xcellence",
    description: "A student-led motorsport engineering team applying aerodynamic optimisation and precision design to extract maximum performance.",
    images: ["/images/logo-1200.webp"],
    creator: "@valkyrieracing",
    site: "@valkyrieracing",
  },

  // Additional Meta Tags
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

  // Verification (add your actual verification codes when available)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Icons and Manifest
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '256x256' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: 'https://www.valkyrieracing.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Valkyrie Racing",
    "alternateName": "VRX Racing Team",
    "url": "https://www.valkyrieracing.com",
    "logo": "https://www.valkyrieracing.com/images/logo-1200.webp",
    "description": "A student-led motorsport engineering team applying aerodynamic optimisation and precision design to extract maximum performance.",
    "slogan": "Velocity, Racing, Xcellence",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiries",
      "email": "contact@valkyrieracing.com"
    },
    "sameAs": [
      "https://instagram.com/valkyrieracing",
      "https://facebook.com/valkyrieracing",
      "https://tiktok.com/@valkyrieracing"
    ],
    "memberOf": {
      "@type": "EducationalOrganization",
      "name": "STEM Racing Competition"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Valkyrie Racing",
    "url": "https://www.valkyrieracing.com",
    "description": "Official website of Valkyrie Racing - student-led motorsport engineering team",
    "publisher": {
      "@type": "Organization",
      "name": "Valkyrie Racing"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.valkyrieracing.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.valkyrieracing.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Achievements",
        "item": "https://www.valkyrieracing.com/#achievements"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.valkyrieracing.com/#contact"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          href="/images/logo-mark.png"
          as="image"
          type="image/png"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Analytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
