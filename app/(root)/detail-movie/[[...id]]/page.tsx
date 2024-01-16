"use client"

import React, { useEffect, useState } from "react"
import { useParams} from "next/navigation";

const Page = () => {
    const router = useParams().id;
    const [movie, setMovie] = useState<any>();
    const [img, setImg] = useState<any>();

    // const [movies, setMovies] = useState<any[]>([])
    // const [page, setPage] = useState<number>(1)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY0MmE3ZjQ3MThhMzEzMDM0MmZmMTY5MjllZmVlNSIsInN1YiI6IjY1MDllZjFhZDZjMzAwMDEwZTA1Mzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oQvK2fZD6jVQGqcfL9d1W9ZVjhzQp1AqSLUpHaraaHw'
        }
      };

      useEffect(()=>{        
        fetch(`https://api.themoviedb.org/3/movie/${router}?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {setMovie(response); console.log(response)})
        .catch(err => console.error(err));
      },[])

      useEffect(()=>{        
        fetch(`https://api.themoviedb.org/3/movie/${router}/images`, options)
        .then(response => response.json())
        .then((response) => {setImg(response); console.log(response)})
        .catch(err => console.error(err));
      },[])

  return (
    // <p className="text-light-1">
    //     {movie?.id}
    // </p>
    <div className="relative  w-full">
      <img src={`http://image.tmdb.org/t/p/original${img?.backdrops[1].file_path}`} className="z-[1] object-cover" alt="" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b z-[1] from-transparent to-black"></div>
      {/* <button className="bg-primary-500 absolute z-[22] left-5 bottom-1 rounded-xl p-2 px-10"><p className="text-light-1 font-bold">WATCH</p></button> */}
    </div>
  )
}

export default Page;