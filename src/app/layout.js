import { Shippori_Mincho, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
});

export const metadata = {
  title: {
    default: "SunLips | 生活に、花がある豊かさを。",
    template: "%s | SunLips"
  },
  description: "山形県鶴岡市の生花店SunLips（サンリップス）。花はモノではなく、命。喜びの日にも、悲しみの日にも、あなたの心に静かに寄り添います。",
  keywords: ["花屋", "生花店", "鶴岡市", "山形県", "SunLips", "サンリップス", "フラワーショップ", "花の定期便"],
  authors: [{ name: "SunLips" }],
  openGraph: {
    title: "SunLips | 生活に、花がある豊かさを。",
    description: "山形県鶴岡市の生花店SunLips。花はモノではなく、命。喜びの日にも、悲しみの日にも、あなたの心に静かに寄り添います。",
    url: "https://sunlips.vercel.app",
    siteName: "SunLips",
    images: [
      {
        url: "/og-image.jpg", // ユーザーにこの画像をpublicフォルダに置くよう依頼する
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunLips | 生活に、花がある豊かさを。",
    description: "山形県鶴岡市の生花店SunLips。花はモノではなく、命。",
    images: ["/og-image.jpg"], // 同じく配置依頼
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${shipporiMincho.variable} ${cormorantGaramond.variable} noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
