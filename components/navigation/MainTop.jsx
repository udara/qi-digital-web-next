import React, { useState, useEffect } from "react";
import Link from 'next/link'

const logo = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/logo.png";
const logoWhite = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/logo-white.png";

const MainTop = ({ transitionHeight = 2081 }) => {

  const [state, setState] = useState({
    scrY: 1,
    logo_white: transitionHeight == 0 ? true : false,
  });

  const getScrollPos = () => {
    setState({ ...state, scrY: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPos);
  },[]);

  useEffect(() => {
    if (state.scrY >= transitionHeight) {
      setState({
        ...state,
        logo_white: true,
      });
    } else {
      setState({
        ...state,
        logo_white: false,
      });
    }
  }, [state.scrY]);

  const logoWhiteDiv = (
    <div className="fixed z-20 h-[70px] bg-black inset-x-0 top-0 w-full">
      <div className="flex justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
        <Link href="/#hero" scroll={false}>
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
  );

  const logoBlackDiv = (
    <div className="fixed z-20 h-[70px] inset-x-0 top-0 w-full">
      <div className="flex justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
        <Link href="/#hero" scroll={false}>
          <div
            className="w-11 h-11 mt-3 bg-contain bg-no-repeat opacity-70 cursor-pointer"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>
        </Link>
        <div className="w-fit flex justify-between sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro font-base text-black opacity-70">
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
  );

  const nav = state.logo_white ? logoWhiteDiv : logoBlackDiv;

  return nav;
};

export default MainTop;
