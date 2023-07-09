// Import React.
import React, { Fragment, useState, useEffect } from "react";
import Link from 'next/link'

// Import images.
const logo = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/logo.png";
const logoWhite =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/logo-white.png";
const orbit = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/orbit.svg";

// CSS.
import styles from "../styles/styles.module.css";

const Hero = () => {
  const [state, setState] = useState({
    scrY: 0,
    logo_white: false,
  });

  const getScrollPos = () => {
    setState({ ...state, scrY: window.scrollY });
  };

  useEffect(() => {
    // Client-side-only code
    window.addEventListener("scroll", getScrollPos);
  })


  useEffect(() => {
    if (state.scrY >= 0 && state.scrY < 2080) {
      setState({
        ...state,
        logo_white: false,
      });
    }
    if (state.scrY > 2081) {
      setState({
        ...state,
        logo_white: true,
      });
    }
  }, [state.scrY]);

  const nav = state.logo_white ? (
    <div className="fixed z-20 h-[70px] bg-black inset-x-0 top-0 w-full">
      <div className="flex justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
        <Link href='/#hero' scroll={false}>
          <div
            className="w-11 h-11 mt-3 bg-contain bg-no-repeat cursor-pointer"
            style={{
              backgroundImage: `url(${logoWhite})`,
            }}
          ></div>
        </Link>

        <div className="w-fit flex justify-between sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro font-base text-white opacity-70">
          <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
            <Link href='/#technology' scroll={false}>
              <span className="hidden 450:block">TECHNOLOGY</span>
              <span className="450:hidden block">TECH</span>
            </Link>
          </div>

          <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
            <Link href='/articles'>
              ARTICLES
            </Link>
          </div>

          <div className="cursor-pointer grid content-center sm:pl-3 pl-1.5">
            <Link href='/#contact' scroll={false}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed z-20 h-[70px] inset-x-0 top-0 w-full">
      <div className="flex justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
        <Link href='/#hero' scroll={false}>
          <div
            className="w-11 h-11 mt-3 bg-contain bg-no-repeat opacity-70 cursor-pointer"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>
        </Link>
        <div className="w-fit flex justify-between sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro font-base text-black opacity-70">
          <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
            <Link href="/#technology" scroll={false}>
              <span className="hidden 450:block">TECHNOLOGY</span>
              <span className="450:hidden block">TECH</span>
            </Link>
          </div>

          <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
            <Link href='/articles'>
              ARTICLES
            </Link>
          </div>

          <div className="cursor-pointer grid content-center sm:pl-3 pl-1.5">
            <Link href='/#contact' scroll={false}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div
        id="hero"
        className={`${styles.horse} h-[2200px] bg-cover bg-no-repeat bg-bottom bg-gray-300`}
      >
        <div className="relative h-[70px]">{nav}</div>

        <div className="relative flex justify-center max-w-[660px] mx-auto">
          <div className="absolute z-10 top-4 w-full">
            <div className="overflow-hidden hidden 350:block">
              <img className={`${styles.rotate}`} src={orbit} />
            </div>

            <div className="absolute z-20 top-1/3 350:pt-4 pt-[144px] px-2 lg:hidden block w-full">
              <h1 className="mx-auto text-center text-black font-CormorantGaramond font-medium 500:max-w-[505px] max-w-[400px] px-2 md:text-[3.4rem] sm:text-[3.8rem] 620:text-[3.5] 550:text-[3.3rem] 500:text-[3.2rem] 400:text-[2.8rem] 350:text-[2.4rem] text-[2.2rem] leading-none opacity-90">
                Open your world to crypto-commerce
              </h1>

              <h2 className="text-center pt-6 text-black opacity-30 font-SourceSansPro font-semibold tracking-none px-4 leading-snug mx-auto lg:text-[2.1rem] sm:text-[1.9rem] 500:text-[1.6rem] 400:text-[1.4rem] text-[1.3rem] leading-none">
                With our Web3 payment gateway
              </h2>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute z-20 w-full top-[280px]">
            <h1 className="text-center text-black font-CormorantGaramond font-medium px-2 text-[4rem] leading-none opacity-90">
              Open your world to crypto-commerce
            </h1>

            <h2 className="text-center pt-8 text-black font-semibold opacity-20 font-SourceSansPro tracking-none text-[2.3rem] leading-none">
              With our Web3 payment gateway
            </h2>
          </div>
        </div>

        <div>
          <div className="sm:mt-[750px] mt-[650px] font-CormorantGaramond font-medium lg:text-[4rem] sm:text-[3.3rem] text-[3rem] max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6">
            <h3 className="leading-tight text-light-grey">Trusted</h3>
            <h3 className="leading-tight text-mid-grey">Transparent</h3>
            <h3 className="leading-tight opacity-90">Open</h3>
          </div>

          <div className="flex justify-center mt-32 mx-auto lg:px-20 md:px-12 px-6">
            <div className="w-[980px] text-left font-SourceSansPro font-normal text-[18px] sm:text-[21px] leading-7 opacity-80">
              Leading the way in blockchain innovation, we engineer technology
              that enables companies of all sizes to accept new payment methods.
              Open your world to new opportunities and markets with Qi's Web3
              payment gateway.
              <div className="font-bold mt-4">Be where your customers are.</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
