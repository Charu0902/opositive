import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    nav:false
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    nav:false

  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
    nav:false

  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    nav:false

  }
};

const ContributeSlider = () =>{
    return(
        <>
<Carousel responsive={responsive} arrows={false} autoPlay={true}  autoPlaySpeed={1000}  infinite={true} 
>
<div className='item'>
                                <div className='blog-card'>
                                                <img src="./assests/iim-logo.png" className ="img-fluid" />

                                    
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    
                                    <img src="./assests/semrush-logo.png" className ="img-fluid"/>

                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                    <img src="./assests/imu-logo.png" className ="img-fluid"/>
                                  
                                  
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img src="./assests/serpzillalogo.png" className ="img-fluid"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                <img src="./assests/te-logo.png" className ="img-fluid"/>

                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img src="./assests/shopify-logo.png" className ="img-fluid"/>
                                 
                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                <img src="./assests/digital-vidya-logo.png" className ="img-fluid"/>

                                </div>
                            </div>
                            <div className='item'>
                                <div className='blog-card'>
                                   
                                    <img src="./assests/iitdelhi.png" className ="img-fluid"/>
                                 
                                </div>
                            </div>
</Carousel>
        </>
    )
}

export default ContributeSlider;