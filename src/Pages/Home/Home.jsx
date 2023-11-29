import Footer from "../../Shared/Footer/Footer";
import Section from "../../Shared/Section/Section";
import Coupons from "../../component/Coupons/Coupons";
import Banner from "../../component/banner/Banner";
import Location from "./Location";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";

const Home = () => {
    const data = useAvailableCoupon()
    console.log(data);
    return (
        <div>
            <section data-aos="zoom-out-down"><Banner></Banner></section>
            <section>
                <Section title="About Our Building"></Section>
                <p className="text-justify w-3/4 mx-auto">Nestled in the heart of the bustling city of Dhaka, our building stands tall and proud in the prestigious neighborhood of Gulshan.Our building is not just a structure; it's a community hub. The communal spaces are thoughtfully designed to foster interaction among residents, providing opportunities for socializing and creating a sense of belonging. Whether it's the rooftop garden with panoramic views of the city or the well-equipped fitness center, every corner is crafted to enhance the quality of life for those who call our building home. <br />
                    Our building is not just a structure; it's a community hub. The communal spaces are thoughtfully designed to foster interaction among residents, providing opportunities for socializing and creating a sense of belonging. Whether it's the rooftop garden with panoramic views of the city or the well-equipped fitness center, every corner is crafted to enhance the quality of life for those who call our building home. <br />

                </p>
            </section>

            <section className="my-10">
                <Section title="Coupons"></Section>
                <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data?.map(item => <Coupons key={item._id} coupon={item}></Coupons>)
                    }
                </div>
            </section>

            <Location></Location>


            <Footer></Footer>
        </div>
    );
};

export default Home;