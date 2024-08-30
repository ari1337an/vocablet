import { Blog } from "@/server/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title:
      "How to Improve Vocabulary with AI",
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
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
