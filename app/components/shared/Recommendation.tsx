"use client"

import React, {useState} from "react"
import Collection from "./Collection";

const Recommendation = () => {

  return (
    <>
        <Collection title="Now Playing" list_type="now_playing"/>
        <Collection title="Popular" list_type="popular"/>
        <Collection title="Top Rated" list_type="top_rated"/>
        <Collection title="Upcoming" list_type="upcoming"/>
    </>
  )
}

export default Recommendation;