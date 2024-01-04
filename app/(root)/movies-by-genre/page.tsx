"use client"

import Card from "@/app/components/shared/Card"
import React, { useEffect, useState } from "react"

const Page = () => {
    const [movies, setMovies] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
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
        .then((response) => {setMovies(response.results);console.log(response.results)})
        .catch(err => console.error(err));
      },[page])

  return (
    <>
      <h1 className="text-light-1 text-[28px] font-bold uppercase flex justify-center pb-10">Popular</h1>
      <div className="w-full grid gap-4 grid-cols-4">
          {
            movies.map((item)=>(
              <Card key={item.id} title={item.original_title} genre="Movie" duration={Math.floor(Math.random() * 200) + 100} year={item.release_date.substr(0, 4)} poster={`http://image.tmdb.org/t/p/original${item.poster_path}`}/>
            ))
          }
      </div>
      {/* <button onClick={()=>setPage(2)} className="text-light-1">2</button> */}
    </>
  )
}

export default Page;