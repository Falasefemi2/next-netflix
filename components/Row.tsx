import { MovieResponse, rowsProps } from "@/types"
import Image from "next/image";

const Row = async ({title, fetchURL}: rowsProps) => {
    const data = await fetch(fetchURL, {
        next: {
            revalidate: 60,
        }
    })
    const res: MovieResponse = await data.json();
    const movies = res.results
    console.log(res.results);
    
  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center">
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                >
            {movies.map((item: any, id: number) => (
                <Image src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} width={0} height={0} 
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                layout="fill"
                

                />
            ))}
        </div>
    </div>
    </>
  )
}

export default Row