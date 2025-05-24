import FirstSection from "@/components/first_section";
import HowItWorks from "@/components/how_it_works";
import NavBar from "@/components/navbar";
import Rules from "@/components/rules";
import Motto from "@/components/motto";
import AboutUs from "@/components/about_us";
import Form from "@/components/form"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative">
        <FirstSection/>
        <HowItWorks/>
        <Rules/>
        <Motto/>
        <AboutUs/>
        <Form/>
        <Footer/>
      </main>
    </>
  );
}
