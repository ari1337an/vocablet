"use client";

import React from "react";
import { blogPosts } from "./data/posts";
import Link from "next/link";

const BlogPage: React.FC = () => {
  return (
    <div className="mt-20">
      <header className="w-full bg-primary text-white py-4">
        <h1 className="text-center text-3xl">Vocablet Blog</h1>
      </header>

      <div className="flex flex-wrap gap-10 p-20">
        {Object.keys(blogPosts).map((key) => {
          const post: any = blogPosts[key];
          return (
            <Link
              key={key}
              href={`/blog/${key}`}
              passHref
              className="block border border-gray-300 rounded-lg p-4 w-72 hover:bg-gray-700 transition"
            >
              <>
                <h2 className="text-4xl font-extrabold">{post.title}</h2>
                <h4 className="text-lg text-muted-foreground">by {post.author}</h4>
                <div
                  className="text-white overflow-hidden max-h-24"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
