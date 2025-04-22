import { CarouselContext } from "../context/CarouselProvider";
import { useContext } from "react";

function Movie({ data }) {
  const { setIdMovie } = useContext(CarouselContext);
  const handleClickMovie = (id) => {
    setIdMovie(id);
  };
  const { movieName, image, episode } = data;
  return (
    <div
      className="cursor-pointer w-[170px] rounded-[12px] 
    flex flex-col gap-[16px] items-center"
      onClick={() => handleClickMovie(data.id)}
    >
      <div
        className="w-full h-[254px] rounded-[12px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-[24px] left-0 right-0 text-white text-[16px] font-[400] leading-[24px] tracking-[0] text-center z-1 opacity-80">
          {`Episode ${episode}`}
        </div>
        <div className="absolute top-[48px] bottom-[0] left-[0] right-[0] bg-gradient-to-b from-[#1D1D1D00] to-[#0F1E29]"></div>
      </div>
      <div className="text-white text-[16px] font-[600] leading-[24px] tracking-[0] text-center">
        {movieName}
      </div>
    </div>
  );
}

export default Movie;
