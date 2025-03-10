import CompanyStatement from "./components/CompanyStatement";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Subjects from "./components/Subjects";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Services/>
      <Subjects/>
      <Steps/>
      <Testimonials/>
      <Teams/>
      <CompanyStatement/>
      <Pricing/>
      <Faq/>
      <Map/>
      <Contact/>
      {/* <Newsletter/> */}
    </div>
  );
}
