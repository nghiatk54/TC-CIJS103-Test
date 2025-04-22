import { CarouselContext } from "../context/CarouselProvider";
import data from "../constant";
import { useContext } from "react";

function Carousel() {
  const { idMovie } = useContext(CarouselContext);
  const { movieName, description, image } = data[idMovie - 1];
  return (
    <div
      className="h-[400px] rounded-[12px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D00] to-[#1D1D1DCC]"></div>
      <div
        className="absolute top-[211px] left-[130px] w-[586px] h-[164px]
      rounded-[12px] pr-[15px] flex flex-col gap-[16px] overflow-hidden"
      >
        <span className="text-white text-[32px] font-[600] leading-[64px] tracking-[0]">
          {movieName}
        </span>
        <span className="text-white text-[16px] font-[400] leading-[27px] tracking-[0] overflow-hidden text-ellipsis">
          {description}
        </span>
      </div>
    </div>
  );
}

export default Carousel;
