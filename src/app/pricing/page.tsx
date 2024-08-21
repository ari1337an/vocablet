import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Pricing from "@/app/_components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vocablet AI",
  description:
    "Learn Vocabulary Quickly and Easily with Vocablet. Improve your vocabulary with our AI-powered Roleplaying and Vocabulary Builder. Talk with your favourite characters, learn new words, practice with flashcards, and track your progress.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <Pricing />
      <Footer />
    </>
  );
}
