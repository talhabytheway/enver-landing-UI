import Header from "./modules/Header/Header";
import Hero from "./modules/Hero/Hero";
import Video from "./modules/Video/Video";
import Services from "./modules/Services/Services";
import Portfolio from "./modules/Portfolio/Portfolio";
import Contact from "./modules/Contact/Contact";
import Footer from "./modules/Footer/Footer";
function App() {
  return (
    <div>
      <Header className="relative" />
      <div className="xl:mx-auto px-[1.5rem] md:px-[3rem] lg:px-[6rem] max-w-[1280px] xl:max-w-[1440px] xxl:max-w-[1600px] !overflow-x-hidden font-nunito">
        <Hero />
        <Video />
        <Services />
        <Portfolio />
      </div>
      <Contact />
      <div className="xl:mx-auto mx-[1.5rem] md:px-[3rem] lg:px-[6rem] xxl:px-auto max-w-[1280px] xl:max-w-[1440px] xxl:max-w-[1600px] font-nunito">
        <Footer />
      </div>
    </div>
  );
}

export default App;
