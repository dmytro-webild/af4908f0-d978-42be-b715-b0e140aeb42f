import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'TransBridge Connect: English-Persian Translation Marketplace',
  description: 'Connect with certified English-Persian translators or offer your linguistic services. Your reliable platform for professional translation projects.',
  keywords: ["English-Persian translation, Farsi translation, Persian language services, professional translators, translation marketplace, hire translator, freelance linguist, document translation, localization"],
  openGraph: {
    "title": "TransBridge Connect: English-Persian Translation Marketplace",
    "description": "Connect with certified English-Persian translators or offer your linguistic services. Your reliable platform for professional translation projects.",
    "url": "https://www.transbridgeconnect.com",
    "siteName": "TransBridge Connect",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/team-young-colleagues-having-meeting-cafe_273609-16141.jpg",
        "alt": "Global communication and translation"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "TransBridge Connect: English-Persian Translation Marketplace",
    "description": "Connect with certified English-Persian translators or offer your linguistic services. Your reliable platform for professional translation projects.",
    "images": [
      "http://img.b2bpic.net/free-photo/team-young-colleagues-having-meeting-cafe_273609-16141.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
