import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="title" content="Vocablet: Learn vocabulary with AI" />
        <meta
          name="keywords"
          content="vocabulary app,vocabulary learning,chat vocabulary,personalized vocabulary,advanced vocabulary,learn vocabulary,chat learning app,chatbot vocabulary,vocabulary suggestions,language learning,learn new words,vocabulary flashcards,vocabulary builder,chatbot language learning,interactive vocabulary learning,vocabulary training app,personalized language learning,advanced words suggestion,chat with ai,ai vocabulary tutor,vocabulary flashcards app,learn vocabulary fast,language proficiency,custom vocabulary lists,ai language learning, roleplay, roleplay vocabulary, alphawolf vocabulary, chat agents"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vocablet",
              url: "https://vocablet.io",
              potentialAction: [
                {
                  "@type": "RegisterAction",
                  target: "https://vocablet.io/auth/signup",
                  name: "Signup",
                },
                {
                  "@type": "LoginAction",
                  target: "https://vocablet.io/auth/login",
                  name: "Login",
                },
                {
                  "@type": "ViewAction",
                  target: "https://vocablet.io/blog",
                  name: "Blog",
                },
                {
                  "@type": "ViewAction",
                  target: "https://vocablet.io/pricing",
                  name: "Pricing",
                },
              ],
            }),
          }}
        />

        <GoogleTagManager gtmId="AW-16554231936" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <SessionProvider session={session}>
            {children}
            <Toaster />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { auth } from "@/server/authentication/auth";
import { SessionProvider } from "next-auth/react";
