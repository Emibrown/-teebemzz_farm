import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Teebemzz Farms - Fresh From Farm to Table',
  description:
    'Experience the taste of nature with our sustainably raised poultry and fish. We are committed to ethical farming practices and delivering the highest quality products to your family.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} bg-background-light text-text-light antialiased`}>
        {children}
      </body>
    </html>
  );
}
