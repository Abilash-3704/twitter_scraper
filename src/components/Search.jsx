import React,{useState} from 'react';
import { FaSistrix }  from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

import Tweets from './Tweets';
import Spinner from './Spinner';


export default function Search() {
    const [state,setState]=useState('')
    const [isLoading,setisLoading]=useState(false)
    const [tweets,setTweets]=useState([])
    const handleClick=async()=>{
        const options = {
                    method: 'GET',
                    url: 'https://twitter-scraper2.p.rapidapi.com/api/v1/search',
                    params: {searchTerms:`${state}`, maxTweets: '100'},
                    headers: {
                        'X-RapidAPI-Host': 'twitter-scraper2.p.rapidapi.com',
                        'X-RapidAPI-Key': '8ae8ab8326msh165c315602469e9p17454djsnc3b3ae6594f4'
                    }
};
        setisLoading(true)
        const res=await axios.request(options)
        // setisLoading(true)
        const info=await res.data
        const ans=await info.data
        if(ans){
        console.log(ans[0].user.name)
        setisLoading(false)
        setTweets(ans)
        
        }
        else{
            console.log('nothing');
        }
       

    }
  return (
    <div className='pt-8 min-h-screen' id='search'>
        <form action="" className='flex  justify-center  '>
            <input type="text" value={state} placeholder='Search' onChange={(e)=>setState(e.target.value)} className='flex justify-center w-6/12  h-10 border-2 border-blue-700 rounded-lg text-black p-2 placeholder:text-blue-700'/>
            <div className="flex items-center text-4xl px-2  selection:border-cyan-400"><FaSistrix className='cursor-pointer' onClick={()=>handleClick()}/></div>
            
        </form>
        <div className="py-4 min-h-full ">
            {
             !isLoading ? (
               
                <div className=" grid grid-cols-1 place-content-center gap-4 md:grid-cols-2 px-4 ">
                    
                    <Tweets tweets={tweets}/>

                </div>
             )
                 
             :(
               
                <Spinner/>
             )
                
                
            }
            
        </div>
    </div>
  )
}
