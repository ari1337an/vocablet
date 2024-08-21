const BlogTitle = ({
  title,

}: {
  title: string;
}) => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
        {title}
      </h2>
      
    </>
  );
};

export default BlogTitle;
