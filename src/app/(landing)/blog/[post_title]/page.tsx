"use client";

import React from "react";
import { blogPosts } from "../data/posts";

// Define the type for the props
interface BlogPageProps {
  params: {
    post_title: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const post_title = params.post_title as string;

  const post = blogPosts[post_title];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-20">
      <header className="w-full bg-primary text-white py-4">
        <h1 className="text-center text-3xl">Vocablet Blog</h1>
      </header>

      <div className="flex flex-grow w-full p-4">
        <main className="w-3/4 p-4">
          <article className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">By {post.author}</p>
            <div
              className="text-lg text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </article>
        </main>
        <aside className="w-1/4 bg-black text-white px-8 py-5 rounded-xl">
          <nav>
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul>
              {Object.keys(blogPosts).map((slug) => (
                <li key={slug} className="mb-2">
                  <a
                    href={`/blog/${slug}`}
                    className="text-slate-400 hover:underline"
                  >
                    {blogPosts[slug].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
