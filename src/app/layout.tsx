
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Naym Hossen - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Naym Hossen, a skilled Full Stack Developer specializing in MERN stack development. View projects, skills, and case studies.",
  keywords:
    "Full Stack Developer, MERN Stack, Naym Hossen, Portfolio, Web Development, React, Node.js, MongoDB",
  author: "Naym Hossen",
  openGraph: {
    type: "website",
    url: "https://naymhossen.vercel.app",
    title: "Naym Hossen - Full Stack Developer",
    description:
      "Discover projects and achievements of Naym Hossen, a passionate MERN Stack developer.",
    images: [
      {
        url: "/images/portfolio cover.png",
        width: 800,
        height: 600,
        alt: "Portfolio Cover",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
