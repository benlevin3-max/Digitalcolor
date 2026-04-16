import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Color USA - AI-Powered Professional Hair Color System",
  description: "The world's most precise AI hair color mixing system. 1,000+ shades, 0.1ml precision, engineered in Germany. For professional colorists.",
  keywords: [
    "AI hair color system",
    "professional hair color",
    "hair color mixing machine",
    "German hair color",
    "precision hair color",
    "salon color system",
    "digital hair color",
    "hair color AI",
    "1000 shades hair color",
    "professional colorist tools",
    "hair color dispenser",
    "ISO certified hair color",
  ],
  metadataBase: new URL("https://www.digitalcolorusa.com"),
  alternates: {
    canonical: "https://www.digitalcolorusa.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.digitalcolorusa.com",
    title: "Digital Color USA - AI-Powered Professional Hair Color System",
    description: "The world's most precise AI hair color mixing system. 1,000+ shades, 0.1ml precision, engineered in Germany. For professional colorists.",
    siteName: "Digital Color USA",
    images: [
      {
        url: "/images/hero-color-explosion.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Color USA - AI Hair Color System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Color USA - AI-Powered Professional Hair Color System",
    description: "The world's most precise AI hair color mixing system. 1,000+ shades, 0.1ml precision, engineered in Germany.",
    images: ["/images/hero-color-explosion.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digital Color USA",
  url: "https://www.digitalcolorusa.com",
  logo: "https://www.digitalcolorusa.com/images/digital-color-logo.pdf",
  description: "The world's most precise AI-powered professional hair color mixing system, engineered in Germany.",
  sameAs: [
    "https://www.instagram.com/digitalcolorusa",
    "https://www.facebook.com/digitalcolorusa",
    "https://www.linkedin.com/company/digitalcolorusa",
    "https://www.youtube.com/@digitalcolorusa",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.digitalcolorusa.com/#contact",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Digital Color AI Hair Color Mixing System",
  description: "AI-powered professional hair color mixing machine with 0.1ml precision, 1,000+ shades, and German-manufactured pigments. ISO 9001 certified.",
  url: "https://www.digitalcolorusa.com",
  image: "https://www.digitalcolorusa.com/images/hero-color-explosion.jpg",
  brand: {
    "@type": "Brand",
    name: "Digital Color USA",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Digital Color USA",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
  },
  category: "Professional Hair Color Equipment",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Precision", value: "0.1ml" },
    { "@type": "PropertyValue", name: "Shades", value: "1,000+" },
    { "@type": "PropertyValue", name: "Patents", value: "19+" },
    { "@type": "PropertyValue", name: "Certification", value: "ISO 9001" },
    { "@type": "PropertyValue", name: "Standard", value: "DIN" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Professional Hair Colorists and Salon Owners",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-color-explosion.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
