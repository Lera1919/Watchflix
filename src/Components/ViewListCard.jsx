import { StarIcon , EyeIcon} from "@heroicons/react/24/outline";
export default function ViewListCard(prop) {

    const {title, image, genres, voteAverage, voteCount} = prop

    // console.log(data);

    return (
        <div className=" w-[300px] h-[400px]  bg-center bg-cover"  style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${image}")`}}>
            <div className="flex flex-col justify-between bg-gradient-to-b from-transparent from-60% to-black to-90% w-[300px] h-[400px] p-6">
                    <div className="flex flex-wrap gap-1">
                            {genres.map((genre, index)=>{
                            return(
                                <span  key={index} className="rounded-md bg-yellow-300 text-black text-sm px-1">
                        {genre.name}
                                </span>
                            )
                        })}

                    </div>

                    <div className="">
                        <div className="flex gap-4 bg-yellow-300 px-2 py-1 rounded-md">
                            <span className="flex gap-1 text-black">
                                <StarIcon className="h-6 w-6 text-black"/>{voteAverage}
                            </span>
                            <span className="flex gap-1 text-black">
                            <EyeIcon className="h-6 w-6 text-black" />{voteCount}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl">{title}</h3>
                        </div>
                    </div>
            </div>
           

           

        </div>
    )
}