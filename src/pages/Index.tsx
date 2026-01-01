import { Helmet } from "react-helmet-async";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import CoreServices from "@/components/sections/CoreServices";
import AddOnServices from "@/components/sections/AddOnServices";
import Bundles from "@/components/sections/Bundles";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bubbli Digital Services | One-Stop Digital Solution for Local Businesses</title>
        <meta 
          name="description" 
          content="Everything your local business needs to be found online. Websites, Google Maps, WhatsApp & more — simple, affordable, and done-for-you. Starting at ₹2,000." 
        />
        <meta name="keywords" content="website design, local business website, Google Maps setup, WhatsApp business, affordable website India, small business digital services" />
        <meta property="og:title" content="Bubbli Digital Services | One-Stop Digital Solution" />
        <meta property="og:description" content="Websites, Google Maps, WhatsApp & more — simple, affordable, and done-for-you for local businesses." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bubbli.digital" />
      </Helmet>

      <Header />

      <main className="pt-16 md:pt-20">
        <Hero />
        <Problem />
        <Solution />
        <CoreServices />
        <AddOnServices />
        <Bundles />
        <HowItWorks />
        <WhyChoose />
        <CTA />
        <Footer />
      </main>

      <FloatingWhatsApp />
    </>
  );
};

export default Index;