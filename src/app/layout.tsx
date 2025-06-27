import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLayout } from "@/components";
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kousha Talebian - Principal Engineer at Twilio",
    template: "%s | Kousha Talebian",
  },
  description:
    "Principal Engineer at Twilio specializing in AI, LLMs, and scalable systems. 15+ years experience building innovative software solutions. Based in Vancouver, BC.",
  keywords: [
    "Kousha Talebian",
    "Principal Engineer",
    "Twilio",
    "Software Engineer",
    "AI Engineer",
    "LLM",
    "Full Stack Developer",
    "Vancouver Developer",
    "Iranian Canadian Engineer",
    "Temporal",
    "React",
    "TypeScript",
    "System Architecture",
  ],
  authors: [{ name: "Kousha Talebian" }],
  creator: "Kousha Talebian",
  publisher: "Kousha Talebian",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://koushatalebian.com",
    title: "Kousha Talebian - Principal Engineer at Twilio",
    description:
      "Principal Engineer at Twilio specializing in AI, LLMs, and scalable systems. 15+ years experience building innovative software solutions.",
    siteName: "Kousha Talebian",
    images: [
      {
        url: "https://koushatalebian.com/kousha.webp",
        width: 400,
        height: 400,
        alt: "Kousha Talebian - Principal Engineer at Twilio",
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Kousha Talebian - Principal Engineer at Twilio",
    description:
      "Principal Engineer at Twilio specializing in AI, LLMs, and scalable systems.",
    images: ["https://koushatalebian.com/kousha.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://koushatalebian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* PWA and mobile meta tags */}
        <meta name="author" content="Kousha Talebian" />
        <meta name="language" content="EN" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="me" href="https://github.com/ktalebian" />
        <link rel="me" href="https://linkedin.com/in/koushatalebian" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kousha Talebian" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f3f4f6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kousha Talebian",
              url: "https://koushatalebian.com",
              image: {
                "@type": "ImageObject",
                url: "https://koushatalebian.com/kousha.webp",
                width: 400,
                height: 400,
                caption: "Kousha Talebian - Principal Engineer at Twilio",
              },
              jobTitle: "Principal Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Twilio",
                url: "https://twilio.com",
              },
              nationality: "Canadian",
              birthPlace: "Iran",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressRegion: "BC",
                addressCountry: "Canada",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of British Columbia",
              },
              knowsAbout: [
                "Software Engineering",
                "AI",
                "Machine Learning",
                "LLM",
                "System Architecture",
                "TypeScript",
                "React",
                "Node.js",
              ],
              sameAs: [
                "https://github.com/ktalebian",
                "https://linkedin.com/in/koushatalebian",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QWPHKX22ST"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QWPHKX22ST');
          `}
        </Script>

        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
