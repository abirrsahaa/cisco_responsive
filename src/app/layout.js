import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CiscoxlpuiGen",
  description: "The biggest cybersec community of lpu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-[#161f2a]"}>{children}</body>
    </html>
  );
}
