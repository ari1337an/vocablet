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
import "./react-modal.css";

export const metadata: Metadata = {
  title: "Vocablet | AI-Powered Vocabulary Learning Platform",
  description:
    "Vocablet is a personalized vocabulary learning app that helps users expand their vocabulary through interactive role-playing and flashcards.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.wikidata.org/wiki/Q130047855", // Replace or remove if not applicable
  name: "Vocablet",
  url: "https://vocablet.io/",
  logo: "https://vocablet.io/favicon.ico",
  founder: [
    {
      "@type": "Person",
      name: "Arian S. Hasan", // Replace with the actual founder's name
    },
    {
      "@type": "Person",
      name: "Faisal Ahmed Sifat", // Replace with the actual founder's name
    },
  ],
  description:
    "Vocablet is a personalized vocabulary learning app that helps users expand their vocabulary through interactive role-playing and flashcards.", // Assuming you have a dynamic description
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-302-4519439", // Replace with actual contact number
    contactType: "Customer Service",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
