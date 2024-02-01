"use client"

import React, { useEffect, useState } from "react"
import { useParams} from "next/navigation";
import Image from "next/image";
import Star from "@/public/assets/star-svgrepo-com (1).svg"


const Page = () => {
    const router = useParams().id;
    const [movie, setMovie] = useState<any>();
    const [contentState, setContentState] = useState<string>("Overview");
    const [content, setContent] = useState<string>("");
    const [img, setImg] = useState<any>();
    const [isLoad, setIsLoad] = useState<boolean>(false)


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
        .then(()=>setIsLoad(true))
        .catch(err => console.error(err));
      },[])

      useEffect(()=>{        
        if(contentState === "Overview")
        {
          setContent(movie?.overview)
        }
        else
        {
          setContent("NO CONTENT YET!!!")
        }
      },[contentState,movie])

      useEffect(()=>{        
        fetch(`https://api.themoviedb.org/3/movie/${router}/images`, options)
        .then(response => response.json())
        .then((response) => {setImg(response); console.log(response)})
        .catch(err => console.error(err));
      },[])

  return (
    <>
    {
      isLoad && (
        <div className="flex flex-col gap-[100px]">
        <div className="w-full flex justify-between">
          <div className="w-1/3 h-full">
            <img src={`http://image.tmdb.org/t/p/original${img?.posters[0].file_path}`} className="w-full h-full" alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <div className="flex gap-10 items-center">
              <p className="text-light-1 text-[30px]">{movie?.original_title}</p>
              <div className="flex gap-1 justify-between items-center">
                <p className="text-light-1 text-[20px] pt-[5px]">{movie?.vote_average}</p>
                <Image 
                    src={Star}
                    width={20}
                    height={20}
                    alt="Heart"
                />
              </div>
            </div>
            
            <p className="text-light-1">{movie?.genres[0].name}</p>
            <p className="text-orange-600">{movie?.tagline}</p>
            <p className="text-light-1 max-w-[500px]">Overview: {movie?.overview}</p>
            <div className="w-full flex justify-between flex-wrap">
              <p className="text-light-1 opacity-50">{movie?.release_date}</p>
              <p className="text-light-1 opacity-50">{movie?.runtime}m</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="w-full grid grid-cols-3 justify-items-center">
              <button onClick={()=>setContentState("Overview")} className="text-light-1 uppercase border-b-4 border-transparent hover:border-orange-600 duration-500 cursor-pointer"><p>Overview</p></button>
              <button onClick={()=>setContentState("Trailer")} className="text-light-1 uppercase border-b-4 border-transparent hover:border-orange-600 duration-500 cursor-pointer"><p>Trailer</p></button>
              <button onClick={()=>setContentState("Casting")} className="text-light-1 uppercase border-b-4 border-transparent hover:border-orange-600 duration-500 cursor-pointer"><p>Casting</p></button>
          </div>

          <div>
            <p className="text-light-1">{content}</p>
          </div>
        </div>
        
      </div>
    )
    }
    
    </>
  )
}

export default Page;