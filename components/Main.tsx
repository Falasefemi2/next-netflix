import requests from "@/Request";
import { Movie, MovieResponse } from "@/types";
import Image from "next/image";

const truncateString = (str: string, num: number) => {
  if (str?.length > num) {
      return str.slice(0, num) + "...";
  } else {
      return str;
  }
};

const Main = async () => {
  const data = await fetch(requests.requestPopular);
  const res: MovieResponse = await data.json();

  const movies = res.results[Math.floor(Math.random() * res.results.length)];
  console.log(movies);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <Image src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title}
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} // optional
          objectFit="cover"
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">  
        <h1 className="text-3xl md:text-5xl font-bold">{movies?.title}</h1>  
        <div className="my-4">
          <button className="border bg-gray-300 text-black py-2 px-5 border-gray-300">Play</button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
        </div>
        <p className="text-gray-400 text-sm">Released: {movies?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movies?.overview ?? '', 150)}</p>

        </div>

      </div>
    </div>
  );
};

export default Main;

