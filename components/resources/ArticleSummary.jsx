import React from "react";
import Link from 'next/link'

// Import images.
const arrow_head =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const ArticleSummary = ({
  number,
  title,
  summary,
  author,
  authorThumb,
  createdAt,
  readTime,
  link,
}) => {
  return (
    <div className="sm:flex sm:justify-between sm:gap-10 h-full resources-content-article-summary">
      <div className="text-5xl text-light-grey mb-7">{number}</div>

      <div className="grid content-between w-full">
        <div className="mb-6">
          <div className="flex">
            <img src={authorThumb} className="h-10 w-10 rounded-full mt-1" />
            <div>
              <div className="flex">
                <h5 className="font-SourceSansPro text-[12pt] leading-6 grid content-center ml-3">
                  {author}
                </h5>

                <h5 className="font-SourceSansPro text-[12pt] text-neutral-400 leading-6 grid content-center ml-1">
                  - {createdAt}
                </h5>
              </div>

              <h3 className="text-[#9b0a69] font-SourceSansPro ml-3">
                {readTime}
              </h3>
            </div>
          </div>

          <Link href={`/article/${link}`}>
            <h3 className="mb-3 mt-3 leading-[26pt] text-[22pt] font-semibold cursor-pointer">
              {title}
            </h3>
          </Link>
          <p className="font-SourceSansPro text-sm text-black mb-4 leading-5">
            {summary}
          </p>
        </div>

        <Link href={`/article/${link}`}>
          <div className="flex justify-between cursor-pointer w-3/4">
            <p className="p-1 mr-5 md:flex flex-none font-SourceSansPro">
              Read full article
            </p>
            <div className="relative border border-t-mid-grey mt-[17px] border-l-0 border-r-0 border-b-0 w-full">
              <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleSummary;
