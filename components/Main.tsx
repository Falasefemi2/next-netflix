import requests from "@/Request"
import { MovieProps } from "@/types";

const Main = async () => {
    const data = await fetch(requests.requestPopular)
    const res = await data.json()
    console.log(res);
    
  return (
    <div>
        <div>
            {res.results.map((movie: any) => (
                <p className="text-white" key={movie.id}>{movie.title}</p>
            ))}
        </div>
    </div>
  )
}

export default Main