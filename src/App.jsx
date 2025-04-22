import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ListMovie from "./components/ListMovie";
import { CarouselProvider } from "./context/CarouselProvider";
import "./index.css";

function App() {
  return (
    <CarouselProvider>
      <div className="py-[15px] px-[83px]">
        <Navbar />
        <div className="text-white text-[32px] font-[600] leading-[24px] tracking-[0] my-[48px]">
          Explore
        </div>
        <div className="text-[#868686] text-[22px] font-[400] leading-[24px] tracking-[0] mb-[32px]">
          What are you gonna watch today ?
        </div>
        <Carousel />
        <div className="text-white text-[36px] font-[600] leading-[32px] tracking-[0] my-[32px]">
          New Release
        </div>
        <ListMovie />
      </div>
    </CarouselProvider>
  );
}

export default App;
