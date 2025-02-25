import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foody Blog",
  description: "A beautiful Responsive Modern Food Blog created with Next.js, Sanity and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
      //  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
