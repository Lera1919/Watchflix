import { PlayIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";

export default function EpisodeCard(props) {

    const {id, season, episode} = props

    const [isOpen, setOpen] = useState(false)
// console.log(season);
let episode1 = 1
const url = `https://api.themoviedb.org/3/tv/${id}/season/{season}/episode/${episode1}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

useEffect(
    () => {
        fetch(url)
            .then(response => response.json())
            .then(answer => {
                
                console.log(answer)
               
            })
    }, [season])


    return (
        <div className="flex">
            <div className="w-48 h-48 flex items-center justify-center" >
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-16 h-16 rounded-full cursor-pointer'>

                    <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full">
                        <PlayIcon className="h-6 w-6 text-black" />
                    </div>
                </div>
            </div>
            <div >
                    <p>Episode 1</p>
                    <h2>First Meet</h2>
                    <p>description</p>
                    <div className='flex gap-2'>
                        <span>12</span>
                        <span>2005</span>

                    </div>
            </div>
        </div>
    )
}