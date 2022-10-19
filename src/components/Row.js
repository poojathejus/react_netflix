/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import instance from '../instance';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl}) {

   const [movies,setmovies] = useState([])

   async function fetchdata(){
    const request = await instance.get(fetchUrl)
    setmovies(request.data.results)
   }

   useEffect(()=>{
    fetchdata()
   },[])

  //console.log(movies)
   
  return (
    <>
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {
          movies.map(movie=>(
            <img src={`${base_url}${movie.backdrop_path}`}  alt={movie.name} className='poster'/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Row
