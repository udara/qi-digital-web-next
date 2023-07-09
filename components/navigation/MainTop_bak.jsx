import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import logoWhite from "../../assets/logo-white.png";
import logo from "../../assets/logo.png";
import burgerWhite from "../../assets/burger_white.svg";
import burger from "../../assets/burger.svg";

const MainTop = ({ transitionHeight = 2081 }) => {
  const [state, setState] = useState({
    scrY: 1,
    isHidden: false,
    toggleMenuClass: "translate-y-full",
    toggleBurgerMenu: "translate-y-0",
    toggleBurgerX: "translate-y-0",
    logo_white: transitionHeight == 0 ? true : false,
  });

  const toggleMenu = () => {
    setState({
      ...state,
      isHidden: state.isHidden ? false : true,
      toggleMenuClass: state.isHidden
        ? "translate-y-full"
        : "-translate-y-full",
      toggleBurgerMenu: state.isHidden ? "translate-y-0" : "-translate-y-full",
      toggleBurgerX: state.isHidden ? "-translate-y-full" : "translate-y-0",
    });
  };

  const getScrollPos = () => {
    setState({ ...state, scrY: window.scrollY });
  };

  window.addEventListener("scroll", getScrollPos);

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

  const logoDiv = (
    <>
      {/** Mobile Menu Top Bar */}
      <div
        className={`${
          state.logo_white ? `bg-black` : `bg-light-grey`
        } flex fixed w-full h-[70px] md:hidden`}
      >
        <div
          className={`w-full h-11 mt-3 bg-contain transition-transform ${state.toggleBurgerMenu}  bg-no-repeat cursor-pointer ml-6 justify-between`}
          style={{
            backgroundImage: `url(${state.logo_white ? logoWhite : logo})`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${state.logo_white ? burgerWhite : burger})`,
          }}
          onClick={toggleMenu}
          className={`align-middle transition-transform ${state.toggleBurgerMenu} cursor-pointer h-11 w-11 text-white h-full  mr-3  bg-center bg-contain bg-no-repeat`}
        ></div>
      </div>
      {/** Mobile Menu Top Bar End*/}

      <div
        className={`${state.logo_white ? `bg-black` : `bg-light-grey`} fixed 
                z-20 h-screen md:h-[70px]  inset-x-0 top-0 w-full
                transition-transform translate-y-0
                md:-translate-y-0 ${state.toggleMenuClass}`}
      >
        <div className="md:flex text-white justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
          <div className="flex justify-between items-center">
            <div
              className="w-11 h-11 bg-center bg-contain mt-3 md:mt-0 bg-no-repeat cursor-pointer"
              style={{
                backgroundImage: `url(${state.logo_white ? logoWhite : logo})`,
              }}
            ></div>
            <div
              onClick={toggleMenu}
              className={`md:hidden transition-transform delay-150
                                ${state.toggleBurgerX}  cursor-pointer text-2xl
                                font-light  opacity-70 `}
            >
              X
            </div>
          </div>

          {/** Menu Items */}
          <div
            className="md:flex flex-col space-y-6 md:space-y-0
                        md:flex-row mt-7 md:mt-0 md:w-fit md:justify-between w-full
                    sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro
                    font-base text-white opacity-70"
          >
            <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
              <Link
                onClick={toggleMenu}
                to="technology"
                smooth="true"
                duration={1200}
              >
                TECHNOLOGY
              </Link>
            </div>

            <div className="cursor-pointer grid content-center sm:pl-3 pl-1.5">
              <Link
                onClick={toggleMenu}
                to="contact"
                smooth="true"
                duration={1200}
              >
                CONTACT
              </Link>
            </div>
          </div>
          {/** Menu Items End*/}
        </div>
      </div>
    </>
  );

  return [logoDiv];
};

export default MainTop;
