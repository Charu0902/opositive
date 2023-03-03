import Link from "next/link";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Head from 'next/head'
import Testslider from "./testslider";
import Featuredslider from "./featured-slider";
import BtwoBslider from "./b2b-slider";
import D2Cslider from "./d2c-slider";
import Homeforms from "./homeform";

export default function HomePage() {
    return (
        <>
     <Head>
        <title>O positive Blog</title>
        <meta charSet="utf-8" />
                <title>#1 SEO Company You Can Trust, Boost Your Digital Presence | Opositive</title>
                <meta name="description" content="Looking for a reliable SEO Company? Look no further than Opositive. Our team of experts will help boost your online presence and drive traffic to your website." />
                <link rel="canonical" href="https://opositive.io/" />

                <meta property="og:type" content="website"/> 
                <meta property="og:url" content=" https://opositive.io/"/> 
                <meta property="og:title" content="OPositive: AI Based SEO Research Lab in India | White Label SEO Marketing Agency"/> 
                <meta property="og:description" content="We are Top SEO Service provider Company in India and our Agency is located in Udaipur Rajasthan, with a Quality and objective driven approach"/> 
                <meta property="og:image" content="https://opositive.io/Assets/thumbnailmobilesize.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content=" https://opositive.io/"/> 
                <meta property="twitter:title" content="OPositive: AI Based SEO Research Lab in India | White Label SEO Marketing Agency"/> 
                <meta property="twitter:description" content="We are Top SEO Service provider Company in India and our Agency is located in Udaipur Rajasthan, with a Quality and objective driven approach"/> 
                <meta property="twitter:image" content=" https://opositive.io/Assets/thumbnailmobilesize.webp"/> 
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>
    <div className="Home">
    <div className='header-video'>  
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='mobile-video' poster='./assests/thumbnailmobilesize.webp'>
               <source src="./assests/MobileRatio-1.m4v"  />
           </video>
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='desktop-video' poster='./assests/thambnail1440x680.webp'>
               <source src="./assests/1440X680-1.m4v"  />
           </video> 
           <a href='#rethinking'><button className='video-btn'>EXPLORE NOW <img src='./assests/Arrow-white.png' alt='' className='img-fluid video-arrow'/></button>
            </a> 
        </div>
        <section id='rethinking' className='rethinking-section' data-aos="fade-up" 
     data-aos-duration="1700">
            <div className='container'>
               <div className='row'>
                <div className='col-12 col-md-6'>
                    <video
                      muted
                      autoPlay={"autoplay"}
                      preLoad={"metadata"}
        playsinline ={"true"}
                      loop className='rethinking-video' poster='./Assets/SEOVideoThumbnail.webp'>
                          <source src="./assests/Seo400X400px-1.m4v"  />
                      </video> 
                  </div>
                  <div className='col-12 col-md-6'>
                      <h1 className='rethinking-heading'>Rethinking SEO</h1>
                      <p className='rethinking-para'>O+ reverse engineers algorithm updates by observing the whole digital ecosystem and conducting frequent experiments with its own assets.</p>
                      <p className='rethinking-para'>We deliver focused strategy to propel your brand forward, data to understand its possibilities, and technology to take action at scale with speed and precision. </p>
                      <Link href='deliver'><button className='more-btn'>FIND OUT HOW <img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </Link>
                  </div>
               </div>
            </div>
        </section>
        <section className='blog-listing' data-aos="fade-up" data-aos-duration="2000">
            <div className='container'>
              <h2 className='dive-heading'>Dive into the Future of SEO </h2>
              <p className='dive-para'>Explore the exclusively curated content by industry experts.</p>
              <Link href='master-class'>
              <button className='apply-btn'>Apply for Master class <img src='./Assets/Arrow (2).png' alt='' className='apply-arrow img-fluid '/></button>
              </Link>
              
             <div className="row">
             <Testslider></Testslider>
             </div>
                      
              <div className='row blogs-row desktop-blogs' data-aos="fade-up">
                <div className='col-12 col-md-4'>
                        <div className='blog-card'>
                            <a href='https://opositive.io/blog/ecommerce-seo-guide/'><img src='./assests/Group2237.webp' alt=' ' className=' img-fluid ' />
                            <div className='blog-more-box'>
                            <h3 className='blog-heading'>ECommerce SEO A Definitive Guide for 2021</h3>
                                <img src='./assests/CTA.webp' alt=' ' className='blog-img img-fluid ' />
                            </div>
                            </a>
                        </div>
                </div>
                <div className='col-12 col-md-4'>
                        <div className='blog-card'>
                            <a href='https://opositive.io/blog/core-web-vitals-for-ecommerce-stores/'>
                            <img src='./assests/Group2238.webp' alt=' ' className=' img-fluid ' />
                            <div className='blog-more-box'>
                                <h3 className='blog-heading'>Conquering Core Web Vitals for eCommerce Stores</h3>
                                <img src='./assests/CTA.webp' alt=' ' className='blog-img img-fluid ' />
                            </div>
                            </a>
                        </div>
                </div>
                <div className='col-12 col-md-4'>
                        <div className='blog-card'>
                            <a href='https://opositive.io/blog/the-basics-of-search-engine/'>
                            <img src='./assests/MicrosoftTeams-image11.webp' alt=' ' className=' img-fluid ' />
                            <div className='blog-more-box'>
                            <h3 className='blog-heading'>The Basics of Search Engine Algorithm On Your Tips</h3>
                                <img src='./assests/CTA.webp' alt=' ' className='blog-img img-fluid ' />
                                  
                            </div>
                            </a>
                        </div>
                </div>
              </div>
            </div>
        </section>
      

        <section className='bg-grey partner-section' data-aos="fade-up" data-aos-duration="2200">
            <div className='container'>
                <h2 className='partners-heading'>Our Partners in Curiosity </h2>
                <p className='partners-para'>It’s one thing to have clients, but at O+, we have been fortunate to work with 300+ companies that share our zeal for inspiring curiosities. It has allowed us to stay true to our ways and help them acquire customers while innovating their businesses for better search engine response.  </p>
                <Tabs defaultActiveKey="first" className='partners-tab'>
                    <Tab eventKey="first" title="Featured" id="first-nav">
                        <div className='container'>
                        <Featuredslider></Featuredslider>
                            <div className='desktop-clients'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F1.webp' alt='SEO Client The World Bank Logo' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F2.webp' alt='SEO Client Amazon Logo' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F3.webp' alt='E-commerce SEO Client Mamaearth Logo' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F4.webp' alt='SEO Client Perfios Logo' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F5.webp' alt='SEO Client Udan Logo' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F6.webp' alt='E-commerce SEO Client Glamly' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F7.webp' alt='SEO Client Doubtnut Logo ' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'>
                                            <img src='./assests/clients/F8.webp' alt='E-commerce SEO Client Twinnings' className='img-fluid desktop-client-img ' />
                                        </div>
                                    <div className='col-md-4'> 
                                            <img src='./assests/clients/F9.webp' alt='SEO Client IIFL Logo ' className='img-fluid desktop-client-img ' />
                                        </div>
                                        <div className='col-md-4'>
                                            <img src='./assests/clients/F10.png' alt='SEO Client IIM Logo ' className='img-fluid desktop-client-img ' />
                                        </div>
                                        <div className='col-md-4'>
                                            <img src='./assests/clients/F11.png' alt='SEO Client Niyo Logo ' className='img-fluid desktop-client-img ' />
                                        </div>
                                        <div className='col-md-4'>
                                            <img src='./assests/clients/F12.png' alt='SEO Client Swiggy Logo ' className='img-fluid desktop-client-img ' />
                                        </div>
                                </div>
                            </div>
                        </div>

                    </Tab>
                    <Tab eventKey="second" title="B2B" id="second-nav">
                    <div className='container'>
                        <BtwoBslider></BtwoBslider>
                            <div className='desktop-clients'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B1.webp' alt='B2B SEO CLIENT KHATIBUDDY Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B2.webp' alt='B2B SEO CLIENT BeatRoute Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B3.webp' alt='B2B SEO CLIENT Zooper Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B4.webp' alt='B2B SEO CLIENT Contify Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B5.webp' alt='SEO Client HAIQUE Logo ' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B6.webp' alt='SEO Client SECURE Logo ' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B7.webp' alt='SEO Client IDC Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B8.webp' alt='B2B SEO CLIENT Newristics Logo' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B9.webp' alt='SEO Client XOXODAY Logo ' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/B10.png' alt='SEO Client Wonder wall putty Logo ' className='img-fluid desktop-client-img lazy' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="third" title="D2C" id="third-nav">
                    <div className='container'>
                        <D2Cslider></D2Cslider>
                            <div className='desktop-clients'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D1.webp' alt='E-commerce SEO Client NOVO' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D2.webp' alt='SEO Client DAILYOBJECTS Logo ' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D3.webp' alt='SEO Client Trainmain Logo' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D4.webp' alt='SEO Client TESCO Logo ' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D5.webp' alt='SEO Client Jaipur Rugs Logo' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D6.webp' alt='SEO Client DA MILANO Logo' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D7.webp' alt='SEO Client LiMEROAD Logo ' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D8.webp' alt='SEO Client Hair Originals' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D9.webp' alt='SEO Client BMC Switzerland' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D10.png' alt='SEO Client Chaios' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D11.png' alt='SEO Client Madame' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D12.png' alt='SEO Client Satviko' className='img-fluid desktop-client-img ' />
                                    </div>
                                    <div className='col-md-4'>
                                        <img src='./assests/clients/D13.png' alt='SEO Client Baby Atelier' className='img-fluid desktop-client-img ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
        <section className='inovate-curiosity' data-aos="fade-up" data-aos-duration="2400" >
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5'>
                            <h2 className='inovate-curiosity-heading'>How we Innovated <br/><span className='grey'>through Curiosity</span></h2>
                            <a href='#our-team'>
                            <button className='more-btn'>EXPLORE MORE <img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid lazy'/></button>
                            </a>
                        </div>
                        <div className='col-12 col-md-7 case-study-row'>
                            <div className='row'>
                                <div className='col-7 col-md-7'>
                                        <div className='case-study-box'>
                                            <div className='case-studyimg-box'>
                                                <img src='./assests/Frame79.webp' alt='' className='case-study-img img-fluid lazy'  />
                                            </div>
                                            <p className='casestudy-1-text'>Achieving 25% Organic Traffic Growth for a B2C fashion brand Within 17 months </p>
                                        </div>
                                </div>
                                <div className='col-5 col-md-5 pd-0 pdrm'>
                                        <div className='case-study-box'>
                                        <div className='case-studyimg-box mtm'>
                                         <img src='./assests/Frame80.webp' alt='' className='case-study-img img-fluid lazy' />
                                         </div>
                                         <p className='casestudy-2-text'>Captured potential worth 10 millions</p>
                                        </div>
                                        <div className='case-study-box'>
                                            
                                            <div className='case-studyimg-box bx-3'>
                                                <img src='./assests/Frame81.webp' alt='' className='case-study-img img-fluid casestudy-3-img lazy '/>
                                            </div>
                                            <p className='casestudy-3-text'>Achieved 8.6x growth in organic traffic in 9 months</p>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section id='our-team' data-aos="fade-up" data-aos-duration="2600">
            <div className='container-pd bg-grey'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                    <video
                    className='peoplevideo'
                      muted
                      autoPlay={"autoplay"}
                      preLoad={"metadata"}
        playsinline ={"true"}
                      loop  poster='./assests/peopleobbimg.webp'>
                          <source src="./assests/obbpeople.mp4"  />
                      </video> 
                    {/* <img className='team-img img-fluid' src='./Assets/peopleobbimg.png' alt=''/> */}
                    
                    </div>
                    <div className='col-12 col-md-6 team-text-box'>
                <h2 className='team-heading'>We are on a journey of discovery</h2>
                        <p className='team-para'>At O+, we aim to inspire curiosity through constant experimentation and ownership. We are focused on finding inspiration across categories and know more about the world around us. It is our firm belief that inspiration is driven by a thirst for knowledge.</p>
                    <a href='#curiosity'>
                        <button className='more-btn'>Think Outside the Box with O+<img className='btn-arrow img-fluid lazy' src='./assests/Arrow.png' alt=''/></button>
                    </a>
                    </div>
                </div>
                
            </div>
        </section>
        <section id='curiosity' data-aos="fade-up" data-aos-duration="2800">
        <div className='container-pd bg-red'>
            <img className='curiosity-img img-fluid lazy' src='./assests/logo-white.webp' alt=''/>
            <h2 className='curiosity-heading'>Curiosity is the seed to a new tomorrow.</h2>
            <p className='curiosity-para'>
            Staying curious is what makes us leaders in the way we think. O+ does not believe in the conformity of method. Rather, we put our focus on developing something new with our constant pursuit of knowledge.
            </p>
            <div className='curiosity-line'></div>
        </div>
        </section>
        <div className='bottomform'>
      <Homeforms></Homeforms>
      </div>
    </div>
    </>
    )
  }