
import BlogTitle from "./BlogTitle";
import AuthorData from "./AuthorData";
import MoreInfo from "./MoreHeadingDetails";

const BlogHead = ({
  blogTitle,
  authorName,
  authorImageSrc,
  publishedDate
}: {
  blogTitle: string,
  authorName: string,
  authorImageSrc: string,
  publishedDate: string
}) => {
  return (
    <>
      <BlogTitle
        title={blogTitle}
      />
      <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
        <div className="flex flex-wrap items-center">
          <AuthorData
            name={authorName}
            authorImageSrc={authorImageSrc}
          />
          <MoreInfo date={publishedDate} />
        </div>
      </div>
    </>
  );
};

export default BlogHead;
