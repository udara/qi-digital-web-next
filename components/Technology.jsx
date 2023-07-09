import React from "react";
import Link from 'next/link'

// Images.
const arrow_head =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const Technology = () => {
  return (
    <div className="relative lg:flex flex-none xl:h-[800px] lg:h-[899px] 600:h-[1500px] h-[1700px]">
      <div className="absolute lg:flex block inset-x-0 top-0 max-w-[1480px] mx-auto">
        <div className="600:h-[750px] h-[850px] lg:w-1/2 w-full py-36 leading-7 pr-4 bg-[#F5EEDE] lg:bg-transparent lg:px-20 md:px-12 px-6">
          <div className="w-11/12 xl:h-[450px] lg:h-[550px] min-h-0">
            <div className="h-28 grid content-end mb-7">
              <h3 className="text-[#b1b1b1] font-CormorantGaramond font-medium lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] leading-tight -mb-1">
                We are
              </h3>
              <h3 className="font-CormorantGaramond text-[#696969] font-medium lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] leading-tight">
                legacy-inclusive
              </h3>
            </div>

            <div className="font-SourceSansPro sm:text-[18px] text-[16px] leading-8 ">
              <p>
                There is a financial renaissance taking place and our
                ‘legacy-inclusive’ philosophy ensures that no organisation is
                left behind.
              </p>
              <p className="pt-5">
                This approach allows us to bridge the gap between traditional
                and new systems, driving accessibility in blockchain technology
                around the world to transform lives through financial inclusion.
              </p>
            </div>
          </div>

          {/*Download Links*/}
          <div className="lg:mt-20 md:mt-32 600:mt-32 mt-32">
            <div className="flex w-full justify-end">
              <div className="font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
                <div className="flex justify-between cursor-pointer md:w-[380px] sm:w-[380px] w-[300px]">
                  <p className="p-1 mr-5 sm:flex flex-none">
                    <Link href='contact'>
                      Speak to us today
                    </Link>
                  </p>
                  <div className="relative border border-t-mid-grey mt-[18px] border-l-0 border-r-0 border-b-0 w-full">
                    <img
                      src={arrow_head}
                      className="h-6 absolute right-0 -top-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="600:h-[750px] h-[850px] lg:w-1/2 w-full leading-7 pb-36 lg:pt-36 pt-20 bg-[#D3C4BD] lg:bg-transparent lg:px-20 md:px-12 px-6">
          <div className="w-full pr-4 xl:h-[450px] lg:h-[550px] min-h-0">
            <div className="h-28 grid content-end mb-7">
              <h3 className="font-CormorantGaramond font-medium text-[2.8rem] leading-tight">
                Build with Qi
              </h3>
            </div>
            <div>
              <p className="font-SourceSansPro sm:text-[18px] text-[16px] leading-8 ">
                We thrive on innovation and we welcome members of the business
                and development community to collaborate with us where, together
                we bring technical ingenuity to the world.{" "}
              </p>
              <p className="font-SourceSansPro sm:text-[18px] text-[16px] leading-8 mt-3">
                If you have any proof-of-concepts that are centred around
                blockchain payments, or would like to learn more about how to
                build with Qi’s infrastructure, please get in touch.
              </p>
            </div>
          </div>

          {/*Download Links*/}
          <div className="lg:mt-20 md:mt-32 600:mt-32 mt-32">
            <div className="flex w-full justify-end">
              <div className="font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
                <div className="flex justify-between cursor-pointer md:w-[380px] sm:w-[380px] w-[300px]">
                  <p className="p-1 mr-5 sm:flex flex-none">
                    <Link href="#contact">
                      Let's partner
                    </Link>
                  </p>
                  <div className="relative border border-t-mid-grey mt-[18px] border-l-0 border-r-0 border-b-0 w-full">
                    <img
                      src={arrow_head}
                      className="h-6 absolute right-0 -top-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 1 */}
      <div className="bg-[#F5EEDE] w-1/2 xl:h-[800px] lg:h-[900px] lg:block hidden"></div>

      {/* Box 2 */}
      <div className="bg-[#D3C4BD] w-1/2 xl:h-[800px] lg:h-[900px] lg:block hidden"></div>
    </div>
  );
};

export default Technology;
