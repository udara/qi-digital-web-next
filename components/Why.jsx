import React from "react";

// Import images.
const circle = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/circle_arrow.svg";

const Why = () => {
  return (
    <div className="bg-[#C3BDAD] py-36">
      <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
        <h2 className="font-CormorantGaramond lg:text-[3.2rem] sm:text-[3.2rem] text-[2.8rem] mt-4 leading-none mb-14">
          About Qi
        </h2>

        <div className="lg:flex block border-b border-mid-grey">
          <div className="xl:w-1/2 lg:w-2/3 w-full grid content-center">
            <p className="xl:w-full  w-4/5 font-SourceSansPro sm:text-[18px] text-[16px] leading-7 max-w-[620px]  pb-5">
              Qi Digital® is a London based technology company that specialises
              in the development of crypto-powered payment solutions for
              everyday businesses. Our advanced, cloud-compatible and Web3-ready
              gateway can be integrated easily with existing technology stacks.
            </p>
          </div>
          <div className="xl:w-1/2 lg:w-1/3 w-full flex justify-end grid content-end mt-10 lg:mt-0">
            <div className="grid content-end 2xl:h-[280px] 2xl:w-[560px] xl:h-[240px] xl:w-[480px] md:h-[200px] md:w-[400px] sm:h-[160px] sm:w-[320px] h-[120px] w-[240px] border-t border-l border-r rounded-t-full border-mid-grey">
              <div className="mx-auto 2xl:h-[22px] 2xl:w-[44px] xl:h-[20px] xl:w-[40px] md:h-[16px] md:w-[32px] sm:h-[13px] sm:w-[26px] h-[10px] w-[20px] border-t border-l border-r rounded-t-full border-mid-grey"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-x-20 gap-y-0 font-SourceSansPro text-[16px] leading-7 mt-10">
          <div className="mb-4 max-w-[500px]">
            <div
              className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
              style={{
                backgroundImage: `url(${circle})`,
              }}
            ></div>
            <h4 className="mb-1 font-extrabold">Blockchain philosophy</h4>
            <p>
              At Qi we promote openness, inclusion and transparency inline with
              the blockchain ethos.
            </p>
          </div>

          <div className="mb-4 max-w-[500px]">
            <div
              className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
              style={{
                backgroundImage: `url(${circle})`,
              }}
            ></div>
            <h4 className="mb-1 font-extrabold">Innovation as standard</h4>
            <p>
              Qi Digital® is an innovative and forward thinking company
              committed to being at the leading edge of developments in the
              crypto-payments space.
            </p>
          </div>

          <div className="mb-4 max-w-[500px]">
            <div
              className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
              style={{
                backgroundImage: `url(${circle})`,
              }}
            ></div>
            <h4 className="mb-1 font-extrabold">Research-led</h4>
            <p>
              Qi has close ties to educational institutions like Brunel
              University where we regularly collaborate on product innovation
              with staff and alumni. Our recently created AI Lab creates a space
              for experimentation and further R&D.
            </p>
          </div>

          <div className="mb-4 max-w-[500px]">
            <div
              className="h-11 w-11 bg-contain bg-no-repeat mb-4 mt-7"
              style={{
                backgroundImage: `url(${circle})`,
              }}
            ></div>
            <h4 className="mb-1 font-extrabold">Human</h4>
            <p>
              We work hard to humanise our software and service. We are in this
              together so feel free to talk to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
