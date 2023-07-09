// Import React.
import React from "react";
import Link from 'next/link'

// Images.
const circle =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/circle_arrow.svg";
const arrow_head =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";
const mobile =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/mobile.png";
const mobileTech =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/mobile_tech.png";

const Legacy = () => {
  return (
    <div id="technology" className="bg-[#e8e6d9] py-32">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        <div className="xl:flex xl:flex-row-reverse justify-between gap-14">
          <div className="flex justify-end xl:w-1/2 w-full">
            <div className="block sm:hidden xl:block mb-20">
              <img src={mobile} className="max-h-[760px]" />
            </div>

            <div className="hidden sm:block xl:hidden mb-20 mx-auto">
              <img src={mobileTech} className="max-h-[760px]" />
            </div>
          </div>

          <div className="xl:w-1/2 lg:w-10/12 w-full pb-14 font-SourceSansPro">
            <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] mt-4 leading-tight mb-14">
              Crypto & Web3 Payment Gateway
            </h2>
            <div className="font-SourceSansPro sm:text-[18px] text-[16px] leading-7 pb-8">
              <p>
                Your gateway into the future, layered with ai and a secure
                connection into multiple blockchains, you’ll be able to invite
                your customers to pay with digital currencies, such as Bitcoin,
                Ethereum and stable coins.
              </p>

              <h3 className="mt-5 mb-2 font-bold">
                Integrate with us without restructuring your existing technology
                stack
              </h3>
              <p>
                Qi Connect
                <sup className="font-features sups font-semibold text-[8px] pl-0.5">
                  TM
                </sup>
                is a multi-dimensional omni-layer for Enterprises that allows
                for fast entry to the world of blockchains. Qi Connect
                <sup className="font-features sups font-semibold text-[8px] pl-0.5">
                  TM
                </sup>
                runs the full Bitcoin Node and is pre-integrated with the
                Ethereum blockchain with an open architecture to allow for
                further access to blockchains on demand.
              </p>
            </div>

            <div className="xl:flex block font-SourceSansPro text-[16px]">
              <div className="grid grid-cols-2 leading-7 gap-10 gap-y-4">
                <div className="col-span-2 md:col-span-1">
                  <div
                    className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
                    style={{
                      backgroundImage: `url(${circle})`,
                    }}
                  ></div>
                  <h4 className="mb-1 font-extrabold">Powerful analytics</h4>
                  <p>An advanced reporting engine for you to monitor success</p>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div
                    className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
                    style={{
                      backgroundImage: `url(${circle})`,
                    }}
                  ></div>
                  <h4 className="mb-1 font-extrabold">Crypto payment tools</h4>
                  <p>
                    Raise invoices, create payments links for your customers to
                    pay you in cryptocurrency
                  </p>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div
                    className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
                    style={{
                      backgroundImage: `url(${circle})`,
                    }}
                  ></div>
                  <h4 className="mb-1 font-extrabold">Developer freedom</h4>
                  <p>
                    Provide your developers with a secure API key for them to
                    integrate our testnets before going live
                  </p>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div
                    className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
                    style={{
                      backgroundImage: `url(${circle})`,
                    }}
                  ></div>
                  <h4 className="mb-1 font-extrabold">Apps</h4>
                  <p>Integrations with today’s much loved productivity tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Download Links*/}
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6 mt-20">
        <div className="flex w-full justify-end">
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

export default Legacy;
