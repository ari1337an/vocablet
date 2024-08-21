import Image from 'next/image';
import BlogTitle from "./BlogTitle";
import AuthorData from "./AuthorData";
import MoreInfo from "./MoreHeadingDetails";

const BlogWideImage = ({
  imageSrc,
  imageAlt
}: {
  imageSrc: string,
  imageAlt: string
}) => {
  return (
    <>
      <div className="mb-10 w-full overflow-hidden rounded">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default BlogWideImage;
