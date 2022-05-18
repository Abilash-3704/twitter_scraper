import React from 'react'
import {FaLink,FaRegCheckCircle} from 'react-icons/fa'

export default function Tweets({tweets}) {
  return (
    <>
    {tweets.map(tweet=>(
                        <div className="flex-col  border-2 border-sky-500 rounded-lg p-2 min-h-[14rem]" key={tweet.tweet.id}>
                            <div className="flex gap-2">
                            <img src={tweet.user.profile_image_url} alt="" className='rounded-full' />
                            <div className="flex-col text-sky-500">
                                <h4 className='flex items-center gap-1.5'>{tweet.user.name}{tweet.user.verified?<FaRegCheckCircle/>:null}</h4>
                                <h6 className='text-white'>@{tweet.user.screen_name}</h6>
                            
                            </div>
                            </div>
                            <p className='text-white py-2'>{tweet.tweet.full_text}</p>
                            <div className="mt-2">
                            <a href={tweet.tweet.url} className='flex  items-center gap-1.5 text-white hover:text-sky-500' target='_blank'><FaLink/>Link</a>
                            </div>
                        </div>
    ))}
    </>
  )
}
