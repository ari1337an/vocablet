// Define the type for a blog post
type BlogPost = {
  title: string;
  author: string;
  content: string;
};

// Define the type for the blog posts object
type BlogPosts = {
  [key: string]: BlogPost;
};

// Hardcoded blog posts
export const blogPosts: BlogPosts = {
  "blog-post-1": {
    title: "Blog Post 1",
    author: "Author 1",
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `,
  },
  "blog-post-2": {
    title: "Blog Post 2",
    author: "Author 2",
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `,
  },
  // Add more posts as needed
};
