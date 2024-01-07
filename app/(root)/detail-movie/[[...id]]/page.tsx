"use client"

import React, { useEffect, useState } from "react"
import { useParams} from "next/navigation";

const Page = () => {
    const router = useParams().id;
    

    // const [movies, setMovies] = useState<any[]>([])
    // const [page, setPage] = useState<number>(1)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY0MmE3ZjQ3MThhMzEzMDM0MmZmMTY5MjllZmVlNSIsInN1YiI6IjY1MDllZjFhZDZjMzAwMDEwZTA1Mzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oQvK2fZD6jVQGqcfL9d1W9ZVjhzQp1AqSLUpHaraaHw'
        }
      };

    //   useEffect(()=>{        
    //     fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    //     .then(response => response.json())
    //     .then((response) => {setMovies(response.results);console.log(response.results)})
    //     .catch(err => console.error(err));
    //   },[page])

  return (
    <p className="text-light-1">
        {router}
    </p>
  )
}

export default Page;