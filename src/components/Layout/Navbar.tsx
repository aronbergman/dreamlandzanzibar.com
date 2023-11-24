"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkAndLightMode from "./DarkAndLightMode";

import Image from "next/image";

import blackLogo from "/public/images/logo.svg";
import whiteLogo from "/public/images/white-logo.svg";
import menuImg1 from "/public/images/menu/menu-1.jpg";
import menuImg2 from "/public/images/menu/menu-2.jpg";
import menuImg3 from "/public/images/menu/menu-3.jpg";
import menuImg4 from "/public/images/menu/menu-4.jpg";
import menuImg5 from "/public/images/menu/menu-5.jpg";

const Navbar: React.FC = () => {
  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  const currentRoute = usePathname();

  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne: string = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo: string = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-color-f3f4f6" id="navbar">
        <div className="container-fluid mw-1640">
          {/*<Link className="navbar-brand" href="/">*/}
          {/*  <Image src={blackLogo} className="main-logo" alt="Black logo" />*/}
          {/*  <Image*/}
          {/*    src={whiteLogo}*/}
          {/*    className="white-logo d-none"*/}
          {/*    alt="White logo"*/}
          {/*  />*/}
          {/*</Link>*/}

          {/* Toggle navigation */}
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-70">

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/about-us" ? "active" : ""
                  }`}
                  href="/about-us"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/activities" ? "active" : ""
                  }`}
                  href="/activities"
                >
                  Activities
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/our-rooms" ? "active" : ""
                  }`}
                  href="/our-rooms"
                >
                  Our rooms
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/bar-restaurant" ? "active" : ""
                  }`}
                  href="/bar-restaurant"
                >
                  Bar–Restaurant
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/contacts" ? "active" : ""
                  }`}
                  href="/contacts"
                >
                  Contacts
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/photos" ? "active" : ""
                  }`}
                  href="/photos"
                >
                  Photos
                </Link>
              </li>

            </ul>
          </div>

          {/* others-options */}
          <div className="others-options">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                  className={`dropdown-item ${
                    currentRoute === "/home" ? "active" : ""
                  }`}
                  href="#"
                >
                  FR
                </Link>
              </li>
              <li>
                <button
                  className="search-icon border-0 bg-transparent p-0"
                  onClick={handleToggleSearchModal}
                >
                  <i className="flaticon-loupe"></i>
                </button>
              </li>

              {/*<li>*/}
              {/*  <Link*/}
              {/*    href="/authentication/"*/}
              {/*    className="default-btn active d-none d-lg-block"*/}
              {/*  >*/}
              {/*    Login Now*/}
              {/*  </Link>*/}
              {/*  <Link href="/authentication/" className="d-lg-none account">*/}
              {/*    <i className="flaticon-account"></i>*/}
              {/*  </Link>*/}
              {/*</li>*/}

              <li>
                {/* DarkAndLightMode */}
                <DarkAndLightMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Form */}
      <div 
        className={`offcanvas offcanvas-top src-form-wrapper ${
          isActive ? "show" : ""
        }`} 
      >
        <div className="container">
          <div className="offcanvas-body small">
            <form className="src-form">
              <input type="text" className="form-control" placeholder="Search Here..." />
              <button type="submit" className="src-btn">
                <i className="ri-search-line"></i>
              </button>
            </form>
          </div>
        </div>

        <button type="button" className="btn-close" onClick={handleToggleSearchModal}>
          <i className="ri-close-line"></i>
        </button>
      </div>
    </>
  );
};

export default Navbar;
