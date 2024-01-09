"use client";

import Image from "next/image";
import Link from "next/link";

import welcomeImg from "/public/images/destination-img.jpg";
import mokaup from "/public/images/mokaup/mokup-8.png";
import shape from "/public/images/shape/shape-15.png";

const Welcome = () => {
  return (
    <>
      <div className="destination-area pb-175 pt-175 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
            >
              <div className="destination-content">
                <span className="top-title">DREAMLAND BUNGALOWS ZANZIBAR</span>
                <h2>About Dreamland Bungalows Zanzibar</h2>
                <p className="mb-33">
                  At Dreamland Bungalows Zanzibar, we are committed to providing a sustainable and relaxing experience
                  for our guests. Our bungalows are designed with utmost care and respect for the natural surroundings,
                  allowing you to connect with the beauty of Tanzania. Come and discover the magic of Dreamland
                  Bungalows Zanzibar.
                </p>

                <ul className="ps-0 list-unstyled destination-content-list">
                  <li>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="count">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3.66565 11.1119C3.25144 11.113 2.84602 11.2314 2.49631 11.4534C2.14659 11.6753 1.86686 11.9918 1.68947 12.3661C1.51209 12.7404 1.44431 13.1573 1.49397 13.5685C1.54363 13.9797 1.70871 14.3685 1.97009 14.6898L7.54225 21.5157C7.74092 21.7624 7.99559 21.9581 8.2851 22.0866C8.57461 22.2151 8.8906 22.2727 9.20683 22.2545C9.88317 22.2182 10.4938 21.8564 10.8831 21.2615L22.4579 2.62037C22.4598 2.61728 22.4618 2.61419 22.4638 2.61114C22.5724 2.44439 22.5372 2.11393 22.313 1.90633C22.2514 1.84932 22.1788 1.80552 22.0997 1.77763C22.0205 1.74974 21.9365 1.73834 21.8528 1.74415C21.7691 1.74996 21.6874 1.77284 21.6129 1.81139C21.5383 1.84994 21.4725 1.90335 21.4194 1.96831C21.4152 1.97342 21.4109 1.97845 21.4065 1.9834L9.73322 15.1725C9.6888 15.2227 9.63485 15.2636 9.57451 15.2927C9.51416 15.3219 9.44862 15.3388 9.3817 15.3424C9.31478 15.346 9.2478 15.3363 9.18466 15.3138C9.12152 15.2913 9.06348 15.2565 9.01391 15.2114L5.13976 11.6859C4.73739 11.3171 4.21149 11.1123 3.66565 11.1119Z"
                              fill="#10B981"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-35">
                        <h4>Sustainability</h4>
                        <p>
                          We are committed to preserving the natural beauty of Tanzania and Zanzibar through sustainable
                          practices.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="count">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3.66565 11.1119C3.25144 11.113 2.84602 11.2314 2.49631 11.4534C2.14659 11.6753 1.86686 11.9918 1.68947 12.3661C1.51209 12.7404 1.44431 13.1573 1.49397 13.5685C1.54363 13.9797 1.70871 14.3685 1.97009 14.6898L7.54225 21.5157C7.74092 21.7624 7.99559 21.9581 8.2851 22.0866C8.57461 22.2151 8.8906 22.2727 9.20683 22.2545C9.88317 22.2182 10.4938 21.8564 10.8831 21.2615L22.4579 2.62037C22.4598 2.61728 22.4618 2.61419 22.4638 2.61114C22.5724 2.44439 22.5372 2.11393 22.313 1.90633C22.2514 1.84932 22.1788 1.80552 22.0997 1.77763C22.0205 1.74974 21.9365 1.73834 21.8528 1.74415C21.7691 1.74996 21.6874 1.77284 21.6129 1.81139C21.5383 1.84994 21.4725 1.90335 21.4194 1.96831C21.4152 1.97342 21.4109 1.97845 21.4065 1.9834L9.73322 15.1725C9.6888 15.2227 9.63485 15.2636 9.57451 15.2927C9.51416 15.3219 9.44862 15.3388 9.3817 15.3424C9.31478 15.346 9.2478 15.3363 9.18466 15.3138C9.12152 15.2913 9.06348 15.2565 9.01391 15.2114L5.13976 11.6859C4.73739 11.3171 4.21149 11.1123 3.66565 11.1119Z"
                              fill="#10B981"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-35">
                        <h4>Comfort and Beauty</h4>
                        <p>
                          Immerse yourself in the harmonious fusion of nature, serenity and privacy within your crafted
                          bungalow nestled amidst a lush green garden.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="count">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3.66565 11.1119C3.25144 11.113 2.84602 11.2314 2.49631 11.4534C2.14659 11.6753 1.86686 11.9918 1.68947 12.3661C1.51209 12.7404 1.44431 13.1573 1.49397 13.5685C1.54363 13.9797 1.70871 14.3685 1.97009 14.6898L7.54225 21.5157C7.74092 21.7624 7.99559 21.9581 8.2851 22.0866C8.57461 22.2151 8.8906 22.2727 9.20683 22.2545C9.88317 22.2182 10.4938 21.8564 10.8831 21.2615L22.4579 2.62037C22.4598 2.61728 22.4618 2.61419 22.4638 2.61114C22.5724 2.44439 22.5372 2.11393 22.313 1.90633C22.2514 1.84932 22.1788 1.80552 22.0997 1.77763C22.0205 1.74974 21.9365 1.73834 21.8528 1.74415C21.7691 1.74996 21.6874 1.77284 21.6129 1.81139C21.5383 1.84994 21.4725 1.90335 21.4194 1.96831C21.4152 1.97342 21.4109 1.97845 21.4065 1.9834L9.73322 15.1725C9.6888 15.2227 9.63485 15.2636 9.57451 15.2927C9.51416 15.3219 9.44862 15.3388 9.3817 15.3424C9.31478 15.346 9.2478 15.3363 9.18466 15.3138C9.12152 15.2913 9.06348 15.2565 9.01391 15.2114L5.13976 11.6859C4.73739 11.3171 4.21149 11.1123 3.66565 11.1119Z"
                              fill="#10B981"
                            />
                          </svg>
                        </span>

                      </div>
                      <div className="flex-grow-1 ms-35">
                        <h4>Respecting Tradition</h4>
                        <p>
                          We honor the spirit and soul of Tanzania by incorporating traditional elements in our design.
                          Dare to experience one of our two Bomas, typical Massaï Huts
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

                {/*<div className="destination-content-btn">*/}
                {/*  <Link href="/stay" className="default-btn active">*/}
                {/*    Browse More*/}
                {/*  </Link>*/}
                {/*  <Link*/}
                {/*    href="/subscription"*/}
                {/*    className="default-btn text-dark bg-transparent"*/}
                {/*  >*/}
                {/*    <span>Get A Free Quote</span>*/}
                {/*  </Link>*/}
                {/*</div>*/}
              </div>
            </div>

            <div
              className="col-lg-6"
            >
              <div className="destination-img position-relative z-1">
                <Image src={welcomeImg} alt="destination"/>

                <Image
                  src={mokaup}
                  className="mokup-8 position-absolute top-0 start-0 end-0 w-100 h-100"
                  alt="mokup-8"
                />

                <Image src={shape} className="shape shape-15" alt="shape-15"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
