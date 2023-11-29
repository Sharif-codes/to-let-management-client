
import Marquee from "react-fast-marquee";
import useAnouncement from "../../../hooks/useAnouncement";


const Anouncement = () => {
   const data= useAnouncement()
    console.log(data);
    return (
        <div>
            <div className="p-5 md:p-10 bg-green-200 w-3/4 mx-auto rounded-xl">
                <p className="text-center text-lg md:text-3xl text-rose-500 font-semibold animate-bounce mb-5">Anouncements </p>
                <div>
                    {
                        data?.map((item,index)=> <div key={index} className="space-y-5">
                            <h2 className="text-md md:text-2xl font-semibold underline text-center">{index+1}. {item.title}</h2>
                        <Marquee>
                           <p className="text-red-500 animate-pulse">***{item.description}</p>
                        </Marquee>
                        </div> )
                    }
                   
                    
                </div>

            </div>

        </div>
    );
};

export default Anouncement;