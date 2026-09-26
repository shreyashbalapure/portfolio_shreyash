import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyashbalapure.vercel.app"),
  title: "Shreyash Balapure | Full-Stack Software Developer & AI Automation Engineer",
  description:
    "Portfolio of Shreyash Balapure - Full-Stack Software Developer & AI Automation Engineer with 2+ years experience in React.js, Next.js, Angular, .NET Core, Groq LLMs, n8n, MSSQL, and PostgreSQL. Based in Pune, India.",
  keywords: [
    "Shreyash Balapure",
    "Shreyash Balapure Portfolio",
    "Software Developer",
    "Software Developer Pune",
    "Full Stack Developer",
    "Full Stack Developer Pune",
    "AI Automation",
    "AI Automation Engineer",
    "React.js Developer",
    "Next.js Developer",
    ".NET Core Developer",
    "Angular Developer",
    "Groq LLM Integration",
    "n8n Workflow Automation",
    "PostgreSQL Neon",
    "MSSQL Developer",
    "Baxture Technologies",
  ],
  authors: [{ name: "Shreyash Balapure", url: "https://shreyashbalapure.vercel.app" }],
  creator: "Shreyash Balapure",
  publisher: "Shreyash Balapure",
  alternates: {
    canonical: "https://shreyashbalapure.vercel.app",
  },
  openGraph: {
    title: "Shreyash Balapure | Full-Stack Software Developer & AI Automation Engineer",
    description:
      "Full-Stack Software Developer with 2+ years experience in React.js, Next.js, Angular, .NET Core, and AI workflow automation.",
    url: "https://shreyashbalapure.vercel.app",
    siteName: "Shreyash Balapure Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Shreyash Balapure - Full Stack Software Developer & AI Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Balapure | Full-Stack Software Developer & AI Automation Engineer",
    description:
      "Portfolio of Shreyash Balapure - Full-Stack Software Developer & AI Automation Engineer.",
    images: ["/profile.png"],
    creator: "@shreyashtechz",
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
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://shreyashbalapure.vercel.app/#person",
      "name": "Shreyash Balapure",
      "givenName": "Shreyash",
      "familyName": "Balapure",
      "jobTitle": "Full-Stack Software Developer & AI Automation Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Baxture Technologies Pvt Ltd",
      },
      "url": "https://shreyashbalapure.vercel.app",
      "image": "https://shreyashbalapure.vercel.app/profile.png",
      "sameAs": [
        "https://www.linkedin.com/in/shreyashbalapure/",
        "https://github.com/shreyashbalapure",
        "https://x.com/shreyashtechz",
      ],
      "knowsAbout": [
        "Software Engineering",
        "Full Stack Web Development",
        "React.js",
        "Next.js",
        "Angular",
        ".NET Core",
        "AI Automation",
        "Groq LLM Integration",
        "n8n Workflow Automation",
        "MSSQL",
        "PostgreSQL",
        "RESTful APIs",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India",
      },
      "email": "shreyashbalapure7@gmail.com",
      "telephone": "+919834375805",
    },
    {
      "@type": "WebSite",
      "@id": "https://shreyashbalapure.vercel.app/#website",
      "url": "https://shreyashbalapure.vercel.app",
      "name": "Shreyash Balapure - Software Developer Portfolio",
      "publisher": {
        "@id": "https://shreyashbalapure.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
