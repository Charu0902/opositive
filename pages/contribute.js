import Head from 'next/head'
import Link from "next/link";
import ContributeSlider from './contribute-slider';
import Contributeform from './contributeform';
import KnowledgePartner from './knowloedge-partners';

const Contribute = () =>{
    return(
        <>
         <Head>
         <meta charSet="utf-8" />
                <title>Join The O+ Community To Expand Your SEO Knowledge </title>
                <meta name="description" content="Have a questions or want to learn more about SEO? , If so, you've come to the ideal place to expand your knowledge." />
                <link rel="canonical" href="https://opositive.io/contribute" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/contribute"/> 
                <meta property="og:title" content="Join The O+ Community To Expand Your SEO Knowledge"/> 
                <meta property="og:description" content="Have a questions or want to learn more about SEO? , If so, you've come to the ideal place to expand your knowledge."/> 
                <meta property="og:image" content="https://opositive.io/assests/connect-with-community-thumb.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/contribute"/> 
                <meta property="twitter:title" content="Join The O+ Community To Expand Your SEO Knowledge"/> 
                <meta property="twitter:description" content="Have a questions or want to learn more about SEO? , If so, you've come to the ideal place to expand your knowledge."/> 
                <meta property="twitter:image" content=" https://opositive.io/assests/connect-with-community-thumb.webp"/> 
</Head>
<section className="contribute-banner">
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='mobile-video' poster='./assests/connect-with-community-thumb.webp' style={{width:'100%'}}>
               <source src="./assests/connect-with-community.mp4"/>
           </video>
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='desktop-video' poster='./assests/contribute-banner-thumb.png' style={{width:'100%'}}>
               <source src="./assests/contribute-banner.mp4"/>
           </video> 
        </section>
        <section className="contribute-human">
           <div className="container">
             <div className="row">
                <div className="col-md-6 col-12">
                   <h1 className="human-heading">
                    Human+ is inside everyone, we just need to be little more curious.
                   </h1>
                </div>
                <div className="col-md-6 col-12">
                  <p className="human-para">
Human+ is a tribe of human who are curiously focused for purpose, passionate to build a better world and always aspire NLG ( next level greatness) in whatever they do.
<br/>
<br/>
Not limiting it to Enterpreneurs, Digital Experts or people aspiring a social cause.
                  </p>
                </div>
             </div>
           </div>
        </section>
        <section className="contribute-blogs">
          <div className="container">
             <div className="row">
                <div className="col-md-6 col-12">
                   <div className="contribute-blog">
                    <img src="./assests/contri-thumb1.webp" className ="img-fluid" />
                    <div className="contribute-content">
                    <h3>SerpZilla International SEO Challenge | Challenge_2022</h3>
                    <p>Do you effectively promote websites through link building? 
                      Do you maybe use your own unique techniques?</p>
                    <a href='https://www.youtube.com/watch?v=8Kd-uRJYvJE' target='blank'><button className='more-btn'>WATCH NOW<img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </a>
                    </div>
                   </div>
                </div>
                <div className="col-md-6 col-12">
                   <div className="contribute-blog">
                    <img src="./assests/contri-thumb3.webp" className ="img-fluid" />
                    <div className="contribute-content">
                    <h3>How do you build links for your website?</h3>
                    <p>Get the best insights on link building SEO with O+ and SERPzilla.</p>
                    <a href='https://www.youtube.com/watch?v=hbkt2Aph-6A' target='blank'><button className='more-btn'>WATCH NOW<img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </a>
                    </div>
                   </div>
                </div>
                <div className="col-md-6 col-12">
                   <div className="contribute-blog">
                    <img src="./assests/contri-thumb2.webp" className ="img-fluid" />
                    <div className="contribute-content">
                    <h3>How can Digital Entrepreneurs use SEO for their growth and what's the roadmap?</h3>
                    <p>If these are the questions on your mind, then checkout the webinar.
                      Learn how to map SEO techniques according to your stage of business. </p>
                    <a href='https://www.youtube.com/watch?v=PHhLnZX-cug' target = 'blank'><button className='more-btn'>WATCH NOW<img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </a>
                    </div>
                   </div>
                </div>
                
             </div>
          </div>
        </section>
        <section className="knowledge-partners contribute-partners">
             <div className="container">
                <div className="row">
                    <h2>Knowledge Partners</h2>
                    <p>To share Expert lectures & sessions with Future Marketers & Digital Enthusiasts  </p>
                   <KnowledgePartner></KnowledgePartner>
                </div>

             </div>
        </section>
        <section className="cta-share contribute-cta">
            <div className="container cta-share-container">
               <div className="row">
                  <div className="col-md-6 col-12">
                    <h2>
                    What else would you 
like us to share? 
 

                    </h2>
                  </div>
                  <div className="col-md-6 col-12">
                    <Contributeform></Contributeform>
                  </div>
               </div>
            </div>

        </section>
        </>
    )
}

export default Contribute;