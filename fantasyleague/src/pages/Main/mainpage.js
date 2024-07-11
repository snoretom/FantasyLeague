import React from "react";
import '../../css/main/Mainpage.css'
import Slider from "react-slick";
import firstSlideimg from "../../css/imageSource/mainCarousel/ff_web_home_banner_24_6.jpeg"

export default function Mainpage(params) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendDots: dots => (
        //   <div
        //     style={{
        //         border : "5px black solid",
                
        //     }}
        //   >
        //     <ul style={{ 
        //         margin: "0px",
        //         display : "flex",
        //         alignItems:"center",
        //         width: "30px",
        //         color: "blue",
        //         border : "1px red solid",

        //         }}> 

        //         {dots} 
        //     </ul>
        //   </div>
        // ),
        // customPaging: i => (
        //   <div
        //     style={{

        //       border: "1px blue solid"
        //     }}
        //   >
            
        //   </div>
        // )
      };
    return(
        <div className="main">
            <div className="mainWrapper">
                <div className="mainCarousel">
                    <div className="carouselSlide">
                        <Slider {...settings}>
                            <div className="firstSlide">
                                    <img src={firstSlideimg} alt="#"></img>
                            </div>
                            <div className="secondSlide">
                                <h2>ㅎㅇㅎㅇ</h2>
                            </div>
                            <div className="thirdSlide">
                                <h2>ㅎㅇㅎㅇ</h2>
                            </div>
                            <div className="forthSlide">
                                <h2>ㅎㅇㅎㅇ</h2>
                            </div>
                            <div className="fivthSlide">
                                <h2>ㅎㅇㅎㅇ</h2>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>     
    )
}