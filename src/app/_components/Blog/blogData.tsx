import { Blog } from "@/server/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Improve Vocabulary with AI",
    paragraph:
      "In this blog, I share the top 10 tips to learn vocabulary very fast. I have learned these tips from my experience and a lot of research. I hope you will find these tips helpful.",
    image: "/images/blog/pexels-markus-chatgpt.jpg",
    author: {
      name: "Faisal Ahmed",
      image: "/images/blog/author-faisal.jpg",
      designation: "CEO, AlphaWolf Ventures",
    },
    tags: ["creative"],
    publishDate: "2024",
    slug: "top-10-tips-to-learn-vocabulary-very-fast",
  },
  {
    id: 2,
    title:
      "Quizlet vs. Magoosh vs. Vocablet: Best Vocabulary Learning Tools Compared",
    paragraph:
      "A detailed comparison of Quizlet, Magoosh, and Vocablet, exploring the best vocabulary learning tools for different needs and preferences.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Arian S. Hasan",
      image: "/images/blog/author-arian.jpg",
      designation: "GRE Aspirant",
    },
    tags: ["Analysis"],
    publishDate: "2024",
    slug: "quizlet-vs-magoosh-vs-vocablet-best-vocabulary-learning-tools-compared",
  },
  {
    id: 3,
    title: "How to roleplay as different characters and learn vocabulary",
    paragraph:
      "In this blog, I share the top 10 tips to learn vocabulary very fast. I have learned these tips from my experience and a lot of research. I hope you will find these tips helpful.",
    image: "/images/blog/luca-bravo-unsplash.jpg",
    author: {
      name: "Faisal Ahmed",
      image: "/images/blog/author-faisal.jpg",
      designation: "CEO, AlphaWolf Ventures",
    },
    tags: ["creative"],
    publishDate: "2024",
    slug: "how-to-roleplay-as-different-characters-and-learn-vocabulary",
  },
];
export default blogData;
