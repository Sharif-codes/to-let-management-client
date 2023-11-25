
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../../assets/banner/building.jpg'
import img2 from '../../assets/banner/apart-2.jpg'
import img3 from '../../assets/banner/apart-1.jpg'

const Banner = () => {
    return (
       
        <Carousel autoPlay>
            <div>
                <img src={img1} />
             
            </div>
            <div>
                <img src={img2} />
              
            </div>
            <div>
                <img src={img3} />
            </div>
            
        </Carousel>
       
    );
};

export default Banner;