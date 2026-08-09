interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  comments: number;
  delay?: string;
}

interface BlogProps {
  title: string;
  description: string;
  posts: BlogPost[];
  className?: string;
}

export default function Blog({
  title,
  description,
  posts,
  className = "",
}: BlogProps) {
  return (
    <section
      id="blog"
      className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}
    >
      <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
        <div className="section_title mb-8.5 sm:mb-10 lg:mb-14 xl:mb-16">
          <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
            <h2 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
              {title}
            </h2>
            <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-9 lg:gap-x-5 xl:gap-x-9">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`blog-post group wow animate__animated animate__fadeInUp ${post.delay || ""}`}
            >
              <div className="blog-post-img relative mb-6">
                <div className="hover-overlay rounded-xl">
                  <img
                    src={post.image}
                    className="scale-100 group-hover:scale-110"
                    alt={post.title}
                  />
                </div>
              </div>

              <div className="blog-post-txt sm:px-4 lg:px-2 xl:px-5">
                <div className="flex text-base sm:text-17px xl:text-18px mb-2.5">
                  <span>{post.category}</span>
                  <span className="flaticon-vertical-line text-20px relative top-px mx-0.5 2xs:mx-1"></span>
                  <span>{post.date}</span>
                </div>

                <span className="font-main text-21px 2xs:text-22px xs:max-lg:text-23px xl:text-25px leading-[1.3]">
                  <a href="blog-post.html">{post.title}</a>
                </span>

                <p className="2xs:max-lg:text-17px xl:text-18px mt-3.5">
                  {post.description}
                </p>

                <p className="2xs:text-17px xl:text-18px mt-2.5">
                  {post.comments} Comments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
