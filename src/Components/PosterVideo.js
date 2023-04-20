import { useEffect, useState } from "react";
import { PlayIcon } from '@heroicons/react/24/outline';
import { VideoCameraSlashIcon } from '@heroicons/react/24/outline';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
// import YouTube from "react-youtube";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import "swiper/css";

// import "swiper/css/navigation";




export default function PosterVideo(props) {

    const { movieId } = props;
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false);

  
    useEffect(()=>{
        const fetchData = () => {
            // fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
            fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US")
            .then(res => res.json())
            .then((answer) => {
                let hasTrailer = false;
                    if (Array.isArray(answer.results) && answer.results.length >0){
                        hasTrailer = answer.results.some((video) => {
                            if (video.type === "Trailer" || video.official === true || video.type === "Teaser" || video.type === "Featurette") {
                                setVideo(video);
                                setLoading(false); 
                                return true;
                            }
                                return false;
                        })

                        
                    }
                    if (!hasTrailer) {
                        setVideo(null);
                        setLoading(false);
                    }
                     
                })
        }
        fetchData();
    }, [movieId]) 

    // const opts = {
    //     height: '160',
    //     width: '250',
    //     playerVars: {
    //         autoplay: 1,
    //     },

    

    if (loading) return(<div>Loading...</div>)

    if (video === null) return(
        <div className="mt-4" >
            <div className="flex items-center justify-center bg-yellow-300 w-40 py-1 px-1 rounded-md text-black gap-2">
            <VideoCameraSlashIcon className="h-6 w-6"/>
                <span>No Trailer</span>
            </div>
        </div>)
    return (
        <div className="mt-4" >
            <ModalVideo channel={video.site.toLowerCase()} autoplay isOpen={isOpen} videoId= {video.key} onClose={() => setOpen(false)} />
            <div onClick={()=> setOpen(true)}  className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-20 h-20 rounded-full cursor-pointer'>
                <div className="flex items-center justify-center bg-yellow-300 w-14 h-14 rounded-full">
                <PlayIcon className="h-6 w-6 text-black" />
                </div>
            {/* <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        navigation={true}
                        modules={[Navigation]}
                        pagination={false}
                        className="flex flex-row relative w-full p-6"
                        breakpoints={{
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 12,
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 12,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 16,
                            },
                            1336: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                          }}
                    >
                        {videos.map((video, index) => (
                            <SwiperSlide key={index}>
                                 <YouTube videoId={video.key} opts={opts} />
                            </SwiperSlide> 
                        ))}

                    </Swiper> */}
             
            
            
            
            </div>
          
        </div>
    )
}