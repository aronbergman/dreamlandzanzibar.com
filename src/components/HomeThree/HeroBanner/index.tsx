"use client";

import Link from "next/link";
import Image from "next/image";

import heroImg from "/public/images/banner/banner-img-6.jpg";
import heroImg2 from "/public/images/banner/banner-img-5.jpg";
import shape from "/public/images/shape/shape-14.png";
import shape2 from "/public/images/shape/shape-18.png";
import BookingSearchForm from "./BookingSearchForm";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-area banner-bg-3 bg-color-f7f2ff overflow-hidden position-relative z-1">
        <div className="container-fluid mw-1640">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="banner-img-wrap style-three">
                <div className="row">
                  <div
                    className="col-lg-5 col-sm-6"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <div className="banner-img-two position-relative z-1">
                      <Image src={heroImg} alt="banner"/>
                    </div>
                  </div>

                  <div
                    className="col-lg-7 col-sm-6"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <div className="banner-img position-relative z-1">
                      <Image src={heroImg2} alt="banner"/>
                      <Image
                        src={shape}
                        className="shape shape-14"
                        alt="shape-14"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 order-1 order-lg-2">
              <div className="banner-content style-three">
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <span className="top-title">WELCOME TO THE</span>
                  <h1>MOST AUTHENTIC HOTEL IN ZANZIBAR</h1>
                  <p>
                    Our bungalows are designed with utmost care and respect for the natural surroundings, allowing you
                    to connect with the beauty of Tanzania.
                  </p>

                  <div className="banner-btn">
                    <Link href="/activites" className="default-btn active rounded-10">
                      Activites
                    </Link>
                    <Link
                      href="/our-rooms"
                      className="default-btn rounded-10 bg-transparent"
                    >
                      <span>Our rooms</span>
                    </Link>
                  </div>
                </div>

                {/* BookingSearchForm */}
                <BookingSearchForm/>
              </div>
            </div>
          </div>
        </div>

        {/* shape */}
        <Image src={shape2} className="shape shape-18" alt="shape-18"/>
      </div>
    </>
  );
};

export default HeroBanner;
