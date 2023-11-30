import { useState } from "react";
import ApartmentsCards from "./ApartmentsCards";
import { useQuery } from "@tanstack/react-query";

import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/usAxiosPublic";
import useAdmin from "../../hooks/useAdmin";


const Appartment = () => {
  const [page, setPage] = useState(0);
  const axiosPublic = useAxiosPublic();
  const {user}= useAuth()
  const [isAdmin] = useAdmin()

  const { data } = useQuery({
    queryKey: ["apartment", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment?page=${page}`);
      return res.data;
    },
  });

  // Use optional chaining to avoid "Cannot read properties of undefined" error
  const result = data?.result;
  const postCount = data?.postCount;

  const totalPages = Math.ceil(postCount / 6);
  const pages = Array.from({ length: totalPages + 1 }, (_, idx) => idx + 1);

  console.log(postCount);
  if(!user)
    {
        toast.error('Please Login to enable Agreement')
    }
    if(isAdmin)
    {
      toast.error("Admin is not allowed to agreement!")
    }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-5 lg:grid-cols-2 xl:grid-cols-3 mx-auto">
        {result?.map((item) => (
          <ApartmentsCards
            key={item._id}
            apartmentData={item}
          ></ApartmentsCards>
        ))}
      </div>
      <div className="my-10 flex gap-10 items-center justify-center">
      {pages.map((item, idx) => (
        <button className={`w-5 h-5 ${page===idx? "bg-black text-white": "text-black"} flex justify-center items-center rounded-full`}onClick={() => setPage(idx)} key={idx}>
          {idx +1}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Appartment;
