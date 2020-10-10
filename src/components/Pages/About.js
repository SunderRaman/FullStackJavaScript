import React,{Component} from 'react';
import Header from "../Common/Header";
import image from "../assets/img/about1.jpg";
import Timeline from "../Common/Timeline";

class About extends Component {
        render() {
        //let imagePath = "../assets/img/about1.jpg";
        console.log("Image value in About is " + image);
        return(
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's really a great Story"
                    buttonText="Tell me more"
                    showButton={false}
                    image = {image}
                />
                <Timeline />            
            </div>

        )
    }

}

export default About