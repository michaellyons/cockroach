import type { Metadata } from "next";
import "./globals.css";
import { APP_NAME, APP_DESC } from './config'
// Since we are using JetBrains Mono from our globals.css, we no longer need to import Inter font
// and we can remove the inter variable and its usage.

// Define URLs for localhost and production environments based on NODE_ENV
const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = isProduction ? 'https://acme.com' : 'http://localhost:3000';



export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: APP_NAME,
  description: APP_DESC,
  openGraph: {
    title: APP_NAME,
    description: APP_DESC,
    images: [ '/og_image.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We will use the font-family defined in globals.css for the entire body
  // which is JetBrains Mono, so no need for a dynamic className here.
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
