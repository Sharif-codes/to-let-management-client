import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useApartment = () => {
    const axiosSecure= useAxiosSecure()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["apartmentData"],
        queryFn: async () => {
            const res = await axiosSecure.get('/apartmentData');
            return res.data;
        },
    });

    // Check if the data is still loading or if there's an error
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading data</p>;
    }

    // Check if data exists and has the expected structure
    if (!data || !data.total) {
        return <p>Data is missing or has an unexpected structure</p>;
    }
      return data;
};

export default useApartment;