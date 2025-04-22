import data from "../constant";
import Movie from "./Movie";

function ListMovie() {
  return (
    <div className="flex flex-wrap gap-2 justify-between">
      {data.map((movie) => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
}

export default ListMovie;
