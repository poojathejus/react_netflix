/* eslint-disable no-unused-vars */
import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';
import instance from '../instance';
import './Banner.css';

function Banner({fetchUrl}) {

    const [movies,setmovies] = useState([])

    async function fetchdata(){
     const request = await instance.get(fetchUrl)
     setmovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1 )])
    

    }
 
    useEffect(()=>{
     fetchdata()
    },[])
 
    function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+'...':str
    }

  // console.log(movies);

  return (
    <header className='bannerhead'
    style={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}
    >
    <div className='banner_content'>
      <h1 className='banner_title'>{movies.name}</h1>

      <h3 className='banner_desc'>{truncate(movies.overview,100)}</h3>
    </div>
    
      </header>
  )
}

export default Banner