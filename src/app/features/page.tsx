import { Metadata } from "next";
import Features from "../_components/Features";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Features | Vocablet AI",
  description: "The features of Vocablet AI.",
  // other metadata
};

const FeaturesPage = () => {
  return (
    <>
    <Header/>
      <Features />
      <Footer/>
    </>
  );
};

export default FeaturesPage;
