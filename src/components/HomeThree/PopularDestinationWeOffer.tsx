"use client";

import Link from 'next/link';

const PopularDestinationWeOffer = () => {
  return (
    <>
      <div className="offer-area position-relative z-1">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="background-video"
        >
          <source src="/images/offer-bg.mp4" type="video/mp4"/>
        </video>

        <div className="container">
          <div
            className="offer-content"
          >
            <h2>Our activities we offer</h2>
            <p>If you are interested in any trips, tours or excursions during your stay on the Island we welcome you to
              reach out to us via email - idreamland.zanzibar@gmail.com so we can assist in making the booking process
              seamless and ensure you receive accurate information and competitive prices on your activities of
              interest.</p>

            <div className="offer-content-btn">
              <Link href="/" className="default-btn rounded-10">
                Booking
              </Link>
              <Link href="/" className="bg-transparent default-btn">
                Show Me More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDestinationWeOffer;
