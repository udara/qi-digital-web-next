// Import React.
import React from "react";
import Link from 'next/link'

// Images.
const bitcoin =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/bitcoin.svg";
const ethereum =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/ethereum.svg";
const lite =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/litecoin.svg";
const ripple =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/ripple.svg";
const tether =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/tether.svg";
const dash = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/dash.svg";
const arrow_head =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const SecureAndReliable = () => {
  return (
    <div className="w-full py-36">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        {/*Header*/}
        <div className="max-w-[500px] mb-20">
          <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] leading-tight">
            Crypto-commerce for businesses everywhere
          </h2>
        </div>
        <div className="max-w-[740px] lg:mx-auto mx-0">
          {/*Description*/}
          <div className="font-SourceSansPro sm:text-[18px] text-[16px] leading-8">
            <p className="mb-5">
              We’ve crafted a suite of intuitive business tools that allow
              online entrepreneurs, finance teams and developers to accept some
              of the most widely used cryptocurrencies. Easily add ‘pay by
              crypto’ functionality into your online store, send invoices or
              integrate crypto payment options into your technology stack and
              instantly future-proof your business.
            </p>
            <h3 className="font-SourceSansPro font-bold mb-1 pt-2">
              Accept all major cryptocurrencies
            </h3>
            <p>
              Qi supports ‘traditional’ cryptocurrencies, including Bitcoin and
              Ethereum, plus Ethereum-based tokens, Litecoin, Dash and
              stablecoins - USDC and USDT.
            </p>
          </div>
        </div>

        {/*Icon Section*/}
        <div className="mx-auto">
          <div className="flex justify-center flex-wrap mt-20 mb-44">
            <img src={bitcoin} className="h-[90px] mx-12 my-8" />
            <img src={ethereum} className="h-[90px]  mx-12 my-8" />
            <img src={lite} className="h-[90px]  mx-12 my-8" />
            <img src={ripple} className="h-[90px]  mx-12 my-8" />
            <img src={tether} className="h-[90px]  mx-12 my-8" />
            <img src={dash} className="h-[90px]  mx-12 my-8" />
          </div>
        </div>

        {/*Download Links*/}

        <div className="flex w-full justify-end">
          <div className="font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
            <div className="flex justify-between cursor-pointer w-[250px] md:w-[350px]">
              <p className="p-1 mr-5 md:flex flex-none">
                <Link href='contact'>
                  Request our investor pack
                </Link>
              </p>
              <div className="relative border border-t-mid-grey mt-[17px] border-l-0 border-r-0 border-b-0 w-full">
                <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
              </div>
            </div>
            <div className="flex justify-between cursor-pointer w-[250px] md:w-[350px]">
              <p className="p-1 mr-5 md:flex flex-none">
                <Link href='contact'>
                  Get crypto-commerce ready
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

export default SecureAndReliable;
