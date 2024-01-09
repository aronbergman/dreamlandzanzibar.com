import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HeroBanner from "@/components/HomeThree/HeroBanner";
import Benefits from "@/components/HomeThree/Benefits";
import Welcome from "@/components/HomeThree/Welcome";
import FunFactsTwo from "@/components/Common/FunFactsTwo";
import MostPopularPlaces from "@/components/HomeThree/MostPopularPlaces";
import Faq from "@/components/HomeThree/Faq";
import HowItWorks from "@/components/HomeThree/HowItWorks";
import PopularDestinationWeOffer from "@/components/HomeThree/PopularDestinationWeOffer";
import TestimonialSliderThree from "@/components/Common/TestimonialSliderThree";
import Partner from "@/components/Common/Partner";
import LatestBlogPost from "@/components/Common/LatestBlogPost";

// TODO: Bring order to sections that were missing
import DiscoverGreatPlaces from "@/components/Common/DiscoverGreatPlaces";
import NewsletterForm from "@/components/Common/NewsletterForm";
import TestimonialSlider from "@/components/Common/TestimonialSlider";
import TopAuthor from "@/components/Common/TopAuthor";
import DiscountOfferTrip from "@/components/HomeOne/DiscountOfferTrip";
import OurHottestVideos from "@/components/HomeOne/OurHottestVideos";
import PopularDestination from "@/components/HomeOne/PopularDestination";
import WhyChooseUs from "@/components/HomeOne/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      {/*<Benefits />*/}

      <Welcome />

      {/*<FunFactsTwo />*/}

      <PopularDestinationWeOffer />

      <MostPopularPlaces />

      <Faq />

      {/*<HowItWorks/>*/}

      <TestimonialSliderThree />

      <div className="ptb-175">
      {/*  <Partner />*/}
      </div>

      <LatestBlogPost />

      {/*<PopularDestination />*/}

      <DiscountOfferTrip />

      <WhyChooseUs />

      {/*<TopAuthor />*/}

      <TestimonialSlider />

      {/*<DiscoverGreatPlaces />*/}

      <OurHottestVideos />

      <NewsletterForm />

      <Footer />
    </>
  )
}
