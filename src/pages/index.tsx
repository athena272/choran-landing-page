import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/sections/Header";
import Welcome from "@/sections/Welcome/Welcome";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Features />
      <Footer />
    </>
  );
}
