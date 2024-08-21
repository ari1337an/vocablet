import AboutSectionOne from "@/app/_components/About/AboutSectionOne";
import AboutSectionTwo from "@/app/_components/About/AboutSectionTwo";
import Blog from "@/app/_components/Blog";
import ScrollUp from "@/app/_components/Common/ScrollUp";
import Contact from "@/app/_components/Contact";
import Features from "@/app/_components/Features";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Pricing from "@/app/_components/Pricing";
import Video from "@/app/_components/Video";
import { Metadata } from "next";
import "./react-modal.css"

export const metadata: Metadata = {
  title: "Vocablet | Your Personalized Vocabulary Builder",
  description:
    "Learn Vocabulary Quickly and Easily with Vocablet. Improve your vocabulary with our AI-powered Roleplaying and Vocabulary Builder. Talk with your favourite characters, learn new words, practice with flashcards, and track your progress.",
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
