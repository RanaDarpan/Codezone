import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "CourseZone",
  description: "We offer all the courses like DSA, Python, Java, Machine Learning",
   icons: {
    icon: { url: "icon.png", type: "image/png" }, 
  },

};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}