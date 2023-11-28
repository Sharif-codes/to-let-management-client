import Footer from "../../Shared/Footer/Footer";
import Section from "../../Shared/Section/Section";
import Coupons from "../../component/Coupons/Coupons";
import Banner from "../../component/banner/Banner";
import Location from "./Location";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";

const Home = () => {
    const data= useAvailableCoupon()
    console.log(data);
    return (
        <div>
            <section data-aos="zoom-out-down"><Banner></Banner></section>
            <section>
                <Section title="About Our Building"></Section>
                <p className="text-justify w-3/4 mx-auto">Nestled in the heart of the bustling city of Dhaka, our building stands tall and proud in the prestigious neighborhood of Gulshan.Our building is not just a structure; it's a community hub. The communal spaces are thoughtfully designed to foster interaction among residents, providing opportunities for socializing and creating a sense of belonging. Whether it's the rooftop garden with panoramic views of the city or the well-equipped fitness center, every corner is crafted to enhance the quality of life for those who call our building home. <br />
                    Step inside, and you'll find a world of sophistication and functionality. The lobby welcomes residents and visitors with an air of elegance, featuring carefully curated artwork that celebrates local talent. The interior design echoes a sense of modern luxury, with plush furnishings and thoughtful touches that create a warm and inviting atmosphere. <br />

                    Our building is not just a structure; it's a community hub. The communal spaces are thoughtfully designed to foster interaction among residents, providing opportunities for socializing and creating a sense of belonging. Whether it's the rooftop garden with panoramic views of the city or the well-equipped fitness center, every corner is crafted to enhance the quality of life for those who call our building home. <br />

                    In Gulshan, where the pace of life is fast, our building stands as an oasis of tranquility. The residential units are designed to be havens of comfort, with large windows allowing natural light to flood in and providing breathtaking views of the surrounding cityscape. Modern amenities and smart home features add a touch of convenience, ensuring that residents experience a seamless blend of luxury and practicality. <br />
                    Our building in Gulshan is not just a residence; it's a lifestyle. It embodies the spirit of Dhaka, a city that embraces its rich past while reaching towards an exciting future. As residents, we take pride in being part of a community that values excellence, innovation, and the vibrant energy of urban living.
                </p>
            </section>

            <section className="my-10">
                <Section title="Coupons"></Section>
                <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3">
                    {
                        data?.map(item=><Coupons key={item._id} coupon={item}></Coupons>)
                    }
                </div>
            </section>
          
                <Location></Location>
           
           
           <Footer></Footer>
        </div>
    );
};

export default Home;