import { createContext, useState } from "react";

const CarouselContext = createContext();

const CarouselProvider = ({ children }) => {
  const [idMovie, setIdMovie] = useState(1);

  const value = {
    idMovie,
    setIdMovie,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export { CarouselContext, CarouselProvider };
