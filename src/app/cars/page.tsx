import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import Footer from "@/components/Layout/Footer"; 
import NewsletterForm from "@/components/Common/NewsletterForm"; 
import PageBanner from "@/components/Cars/PageBanner";
import BookingSearchFrom from "@/components/Cars/BookingSearchFrom";
import CarsCardContent from "@/components/Cars/CarsCardContent";
import OurHottestNearbyCities from "@/components/Common/OurHottestNearbyCities";
import TopAuthor from "@/components/Common/TopAuthor";
  
export default function CarsPage() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBanner />

      <BookingSearchFrom />
      
      <CarsCardContent />
 
      <TopAuthor />

      <OurHottestNearbyCities />
      
      <NewsletterForm />

      <Footer />
    </>
  )
}
