import Navbar from "@/components/Layout/Navbar";
import DiscoverGreatPlaces from "@/components/Common/DiscoverGreatPlaces";
import NewsletterForm from "@/components/Common/NewsletterForm";
import TestimonialSlider from "@/components/Common/TestimonialSlider";
import TopAuthor from "@/components/Common/TopAuthor";
import Benefits from "@/components/HomeOne/Benefits";
import DiscountOfferTrip from "@/components/HomeOne/DiscountOfferTrip";
import HeroBanner from "@/components/HomeOne/HeroBanner";
import HowItWorks from "@/components/HomeOne/HowItWorks";
import MostPopularPlaces from "@/components/HomeOne/MostPopularPlaces";
import OurHottestVideos from "@/components/HomeOne/OurHottestVideos";
import Partner from "@/components/HomeOne/Partner";
import PopularDestination from "@/components/HomeOne/PopularDestination";
import Welcome from "@/components/HomeOne/Welcome";
import WhyChooseUs from "@/components/HomeOne/WhyChooseUs";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <Partner />

      <Benefits />

      <PopularDestination />

      <Welcome />

      <MostPopularPlaces />

      <HowItWorks />

      <DiscountOfferTrip />

      <WhyChooseUs />

      <TopAuthor />

      <TestimonialSlider />

      <DiscoverGreatPlaces />

      <OurHottestVideos />

      <NewsletterForm />

      <Footer />
    </>
  )
}
