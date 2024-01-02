"use client"

import React, {useState} from "react"
import Card from "./Card";

interface CollectionProps{
    title: string;

}

const Collection: React.FC<CollectionProps> = ({title}) => {

  return (
    <>
    <div className="mt-[60px] flex flex-col gap-2">
        <div className="hidden sm:flex sm:justify-between">
            <p className=" text-light-1 text-[30px] font-bold flex items-center">{title}</p>
            <button className="bg-primary-500 rounded-xl p-2 px-10"><p className="text-light-1 font-bold">MORE</p></button>
        </div>
        <div className="w-full flex flex-1 gap-2 min-[640px]:justify-between">
            <Card title="Ferrari" genre="Movie" duration={103} year={2023} poster=""/>
            <Card title="Ferrari" genre="Movie" duration={103} year={2023} poster=""/>
            <Card title="Ferrari" genre="Movie" duration={103} year={2023} poster=""/>
            <Card title="Ferrari" genre="Movie" duration={103} year={2023} poster=""/>
            <div className="flex w-full bg-white h-[150px] items-center justify-center min-[640px]:hidden">
                <p className="text-sm/[44px]">
                    {title.toUpperCase()}
                </p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Collection;