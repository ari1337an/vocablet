import Image from "next/image";

const AuthorData = ({ name, authorImageSrc }: { name: string, authorImageSrc: string }) => {
  return (
    <>
      <div className="mb-5 mr-10 flex items-center">
        <div className="mr-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={authorImageSrc} alt="author image" fill />
          </div>
        </div>
        <div className="w-full">
          <span className="mb-1 text-base font-medium text-body-color">
            By <span>{name}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthorData;
