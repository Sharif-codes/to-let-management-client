
import Section from '../../Shared/Section/Section';

const Location = () => {
    return (
        <div className='my-10'>
            <Section title="Our Building Location"></Section>
            <div className="w-3/4 mx-auto flex gap-10 justify-center">
                <div className="flex flex-col space-y-3" data-aos="fade-right">
                    <p> City: Dhaka</p>
                    <p>Thana: Gulshan, Dhaka-North</p>
                    <p>Road: 10/A</p>
                    <p>House: 6</p>
                </div>
                <div data-aos="fade-left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82614.76342433532!2d90.40458661031752!3d23.779765973034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2z4KaX4KeB4Kay4Ka24Ka-4KaoLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1700832358152!5m2!1sbn!2sbd" className="w-72 h-36" allowfullscreen="" loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;