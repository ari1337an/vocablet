import SharePost from "@/app/_components/Blog/SharePost";
import TagButton from "@/app/_components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import BlogHead from "@/app/_components/Blog/_component/BlogHead";
import BlogWideImage from "@/app/_components/Blog/_component/BlogWideImage";
import Paragraph from "@/app/_components/Blog/_component/Paragraph";
import SubHeading from "@/app/_components/Blog/_component/SubHeading";
import UnorderedList from "@/app/_components/Blog/_component/UnorderedList";
import ListItem from "@/app/_components/Blog/_component/listItem";
import HighlightBox from "@/app/_components/Blog/_component/HighlightBox";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <Header />
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <BlogHead
                  blogTitle="10 amazing sites to download stock photos & digital assets for
                  free"
                  authorName="Faisal Ahmed"
                  authorImageSrc="/images/blog/author-02.png"
                  publishedDate="21 August, 2024"
                />

                <div>
                  <Paragraph>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </Paragraph>

                  <BlogWideImage
                    imageSrc="/images/blog/blog-details-02.jpg"
                    imageAlt="Transformer Diagram"
                  />

                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-primary dark:text-white">
                      malesuada
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </Paragraph>

                  <Paragraph>
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </Paragraph>

                  <SubHeading>
                    Digital marketplace for Ui/Ux designers.
                  </SubHeading>

                  <Paragraph>
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </Paragraph>

                  <UnorderedList>
                    <ListItem>
                      Consectetur adipiscing elit in voluptate velit.
                    </ListItem>

                    <ListItem>
                      Consectetur adipiscing elit in voluptate velit.
                    </ListItem>

                    <ListItem>
                      Consectetur adipiscing elit in voluptate velit.
                    </ListItem>

                    <ListItem>
                      Consectetur adipiscing elit in voluptate velit.
                    </ListItem>
                  </UnorderedList>

                  <HighlightBox>
                    <p className="text-center text-base font-medium italic text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                  </HighlightBox>

                  <Paragraph>
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </Paragraph>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
