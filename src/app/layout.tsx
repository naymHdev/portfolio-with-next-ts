import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Naym Hossen - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Naym Hossen, a skilled Full Stack Developer specializing in MERN stack development. View projects, skills, and case studies.",
  keywords:
    "Full Stack Developer, Full Stack, MERN Stack, Naym Hossen, Portfolio, Web Development, React, Node.js, MongoDB, Problem Solver, Real world problem solver",
  author: "Naym Hossen",
  openGraph: {
    type: "website",
    url: "https://naym-hossen.vercel.app",
    title: "Naym Hossen - Full Stack Developer",
    description:
      "Discover projects and achievements of Naym Hossen, a passionate Full Stack developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable}`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
