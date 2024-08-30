import Image from "next/image";

type BlogWideImageProps = {
  imageSrc: string;
  imageAlt: string;
  attributionName?: string;
  attributionLink?: string;
  sourceName?: string;
};

const BlogWideImage: React.FC<BlogWideImageProps> = ({
  imageSrc,
  imageAlt,
  attributionName,
  attributionLink,
  sourceName,
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
        {/* Image attribution */}
        {/* Image attribution */}
        {attributionName && attributionLink && sourceName && (
          <p className="text-center text-sm text-gray-500 mt-2">
            Image by{" "}
            <a
              href={attributionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              {attributionName}
            </a>{" "}
            from {sourceName}
          </p>
        )}
      </div>
    </>
  );
};

export default BlogWideImage;
