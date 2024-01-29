"use client"

import Card from "@/app/components/shared/Card"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useParams} from "next/navigation";


const Page = () => {
    const [movies, setMovies] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)

    const {title} = useParams();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY0MmE3ZjQ3MThhMzEzMDM0MmZmMTY5MjllZmVlNSIsInN1YiI6IjY1MDllZjFhZDZjMzAwMDEwZTA1Mzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oQvK2fZD6jVQGqcfL9d1W9ZVjhzQp1AqSLUpHaraaHw'
        }
      };

      useEffect(()=>{        
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then((response) => {setMovies(response.results)})
        .catch(err => console.error(err));

        window.scrollTo(0,0);
      },[page])

  return (
    <>
      <h1 className="text-light-1 text-[28px] font-bold uppercase flex justify-center pb-10">{title}</h1>
      <div className="w-full grid grid-cols-2 min-[640px]:grid-cols-4 gap-2 min-[640px]:justify-between">
          {
            movies.map((item)=>(
              <Link key={item.id} href={`/detail-movie/${item.id}`}><Card key={item.id} title={item.original_title} genre="Movie" duration={Math.floor(Math.random() * 200) + 100} year={item.release_date.substr(0, 4)} poster={`http://image.tmdb.org/t/p/original${item.poster_path}`}/></Link>
            ))
          }
      </div>
      <div className="flex w-full justify-between mt-[50px]">
        <button onClick={()=>setPage(page === 2 ? page - 1 : page)} className="text-light-1 bg-primary-500 font-bold rounded-md px-5 text-[22px] duration-500 hover:shadow-[0px_0px_11px_1px_#9f7aea]">{"<--"}</button>
        <p className="text-light-1 text-[22px] font-bold bg-primary-500 rounded-md px-5">{page}</p>
        <button onClick={()=>setPage(page + 1)} className="text-light-1 bg-primary-500 font-bold rounded-md px-5 text-[22px] duration-500 hover:shadow-[0px_0px_11px_1px_#9f7aea]">{"-->"}</button>
      </div>
    </>
  )
}

export default Page;