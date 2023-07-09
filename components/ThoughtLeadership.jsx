import React from "react";
import Link from 'next/link'

// Import images.
const parliament =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/parliament.jpg";
const mann = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/mann.jpg";
const lecture =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/lecture.jpg";
const arrow_head =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const ThoughtLeadership = () => {
  return (
    <div className="bg-[#EEEEEE] py-36">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] mt-4 leading-normal mb-20">
          Thought leadership
        </h2>

        <div className="grid grid-cols-4 gap-14 gap-y-20">
          <div className="lg:col-span-1 sm:col-span-2 col-span-4">
            <img src={parliament} />
            <h4 className="pt-1 font-CormorantGaramond text-[1.4rem] leading-normal font-semibold my-4 pb-4 border-b border-mid-grey">
              Qi at the House of Commons discussing the future of finance
            </h4>
            <p className="font-SourceSansPro text-[16px] ">
              Qi attended the House of Commons to discuss the future of finance
              alongside peers and MPs. As a regular contributor to the UK tech
              scene and a member of Crypto UK, Qi is developing a new
              financially inclusive infrastructure that will promote innovation
              and technical creativity
            </p>
          </div>
          <div className="lg:col-span-1 sm:col-span-2 col-span-4">
            <img src={mann} />
            <h4 className="pt-1 font-CormorantGaramond text-[1.4rem] leading-normal font-semibold my-4 pb-4 border-b border-mid-grey">
              Meet the spiritual scientist behind Qi
            </h4>
            <p className="font-SourceSansPro text-[16px] ">
              “We are now entering the realm of superior technology, and the
              human-like attributes and principles of the blockchain will remain
              a constant in the future. It will certainly evolve and most likely
              take on a new identity, however we will one day look back and be
              reminded of a set of immutable rules and commands that resemble
              mankind’s desire to live in a fairer world”
            </p>
            <p className="mt-2 font-semibold">Mann Matharu, Founder & CEO</p>
          </div>
          <div className="lg:col-span-2 col-span-4">
            <img src={lecture} />
            <div className="sm:flex block pt-1">
              <h4 className="font-CormorantGaramond sm:w-[400px] w-auto text-[1.4rem] pr-3 leading-normal font-semibold my-4 sm:border-r border-r-0 border-b sm:pb-0 pb-4 sm:border-b-0 border-mid-grey">
                Inspiring great minds and creating a new future with Brunel
                University London
              </h4>
              <p className="font-SourceSansPro text-[16px] w-full sm:p-3 p-0 sm:pl-6 pl-0">
                Qi’s strong partnership with one of the world’s leading research
                institutions, Brunel University London allows them to push
                innovation through a series of labs especially crafted where
                academia meets the real and virtual world.
              </p>
            </div>
          </div>
        </div>

        {/*Download Links*/}
        <div className="mt-36">
          <div className="w-[250px] md:w-[350px] font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
            <div className="flex justify-between cursor-pointer">
              <p className="p-1 mr-5 md:flex flex-none">
                <Link href='#contact'>
                  Press enquiries
                </Link>
              </p>
              <div className="relative border border-t-mid-grey mt-[17px] border-l-0 border-r-0 border-b-0 w-full">
                <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
              </div>
            </div>
            <div className="flex justify-between cursor-pointer">
              <p className="p-1 mr-5 md:flex flex-none">
                <Link href='#contact'>
                  Events
                </Link>
              </p>

              <div className="relative border border-t-mid-grey mt-[17px] border-l-0 border-r-0 border-b-0 w-full">
                <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadership;
