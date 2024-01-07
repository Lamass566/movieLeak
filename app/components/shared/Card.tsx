"use client"

import React from "react";
import Heart from "@/public/assets/heart.svg"
import Image from "next/image";

interface CardProps{
    title:string;
    year:number;
    genre:string;
    poster:string;
    duration:number;
}

const Card:React.FC<CardProps> = ({
    title,
    year,
    genre,
    duration,
    poster
}) => {

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
      };
      
    return(
        <div className="w-full z-[1] cursor-pointer gap-2 sm:flex sm:flex-col h-full relative">
            <Image 
                src={Heart}
                width={24}
                height={24}
                alt="Heart"
                className="absolute z-[111] top-2 left-2"
                onClick={handleClick}
            />
            <img src={poster} className="rounded-2xl object-cover w-full" alt="" />
            <span className="absolute top-2 right-2 bg-white rounded-lg shadow-[0px_0px_29px_10px_#1A202C]"><p className="text-black p-1 font-bold">HD</p></span>  
            <div className="h-[100px] flex flex-col justify-between">
                <p className="line-clamp-2 text-light-1 px-2 font-bold">{title}</p>
                <div className="flex justify-between px-2 opacity-[0.6] rounded-lg ">
                    <p className="text-light-1 flex pt-[3px] max-[920px]:text-[14px]">{year} <span className="max-[639px]:block max-[840px]:hidden">- {duration}m</span></p>
                    <p className="text-light-1 border p-[2px] rounded-md max-[920px]:text-[14px]">{genre}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;