"use client"

import React, {useEffect, useState} from "react"
import Card from "./Card";
import Link from "next/link";

interface CollectionProps{
    title: string;
    list_type:string;
}

const Collection: React.FC<CollectionProps> = ({title, list_type}) => {
    const [movies, setMovies] = useState<any[]>([])
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGY0MmE3ZjQ3MThhMzEzMDM0MmZmMTY5MjllZmVlNSIsInN1YiI6IjY1MDllZjFhZDZjMzAwMDEwZTA1Mzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oQvK2fZD6jVQGqcfL9d1W9ZVjhzQp1AqSLUpHaraaHw'
        }
      };

      useEffect(()=>{
        const startPosition = Math.floor(Math.random() * 16) + 1;
        
        fetch(`https://api.themoviedb.org/3/movie/${list_type}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then((response) => {setMovies(response.results.slice(startPosition, startPosition+4));})
        .then(()=>setIsLoad(true))
        .catch(err => console.error(err));
      },[])
  return (
    <>
    {
      isLoad ? (
        <div className="mt-[60px] flex flex-col gap-2">
          <div className="flex justify-between">
              <p className=" text-light-1 text-[30px] font-bold flex items-center">{title}</p>
              <Link href={`/movies-by-genre/${title}`}><button className="bg-primary-500 rounded-xl p-2 px-10"><p className="text-light-1 font-bold">MORE</p></button></Link>
          </div>
          <div className="w-full grid grid-cols-2 min-[640px]:grid-cols-4 gap-2 min-[640px]:justify-between">
            {
              movies.map((item)=>(
                <Link key={item.id} href={`/detail-movie/${item.id}`}><Card key={item.id} title={item.original_title} genre="Movie" duration={Math.floor(Math.random() * 200) + 100} year={item.release_date.substr(0, 4)} poster={`http://image.tmdb.org/t/p/original${item.poster_path}`}/></Link>
              ))
            }
          </div>
        </div>
      ) : (
        <p className="">...</p>
      )
    }
    
    
    </>
  )
}

export default Collection;