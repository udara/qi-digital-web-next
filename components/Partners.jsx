// Import React.
import React from "react";
import Link from 'next/link'

// Images.
const cardstream = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/cardstream.jpg";
const brunel = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/brunel.jpg";
const innovate = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/co-innovate.jpg";
const bitstamp = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/bitstamp.jpg";
const dg = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/dg.jpg";
const pay = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/pay.jpg";
const arrow_head = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

// CSS.
// import styles from "../css/styles.module.css";

const Partners = () => {
  return (
    <div className="w-full py-32">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        {/*Header*/}

        <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] mt-4 leading-tight mb-32">
          Our partners
        </h2>

        {/*Icon Section*/}
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-x-4 gap-y-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-20 mb-40">
            <div className="flex justify-center">
              <img src={cardstream} className="max-h-[74px]" />
            </div>
            <div className="flex justify-center">
              <img src={brunel} className="max-h-[74px]" />
            </div>
            <div className="flex justify-center">
              <img src={innovate} className="max-h-[74px]" />
            </div>
            <div className="flex justify-center">
              <img src={bitstamp} className="max-h-[74px]" />
            </div>
            <div className="flex justify-center">
              <img src={dg} className="max-h-[74px]" />
            </div>
            <div className="flex justify-center">
              <img src={pay} className="max-h-[74px]" />
            </div>
          </div>
        </div>

        {/*Download Links*/}

        <div className="flex w-full justify-end mb-5">
          <div className="font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
            <div className="flex justify-between cursor-pointer w-[250px] md:w-[350px]">
              <p className="p-1 mr-5 md:flex flex-none">
                <Link href='contact'>
                  Become a partner
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

export default Partners;
