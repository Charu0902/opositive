import Head from 'next/head'
import Link from "next/link";
import Automateform from './automateform';
import KnowledgePartner from './knowloedge-partners';


export default function Automate() {
    return (
        <>
        <Head>
        <meta charSet="utf-8" />
            <title>Automate Your Workflow with O+ | Opositive</title>
            <meta name="description" content="With Opositive's automation solutions, you can streamline your operations and boost productivity." />
            <link rel="canonical" href="https://opositive.io/automate" />

                 <meta property="og:type" content="website"/> 
                <meta property="og:url" content="https://opositive.io/automate"/> 
                <meta property="og:title" content="Automate Your Workflow with O+ | Opositive"/> 
                <meta property="og:description" content="With Opositive's automation solutions, you can streamline your operations and boost productivity."/> 
                <meta property="og:image" content="https://opositive.io/assests/Automated Page Banner Video thumbnail.webp"/> 

                <meta property="twitter:card" content="summary_large_image"/> 
                <meta property="twitter:url" content="https://opositive.io/automate"/> 
                <meta property="twitter:title" content="Automate Your Workflow with O+ | Opositive"/> 
                <meta property="twitter:description" content="With Opositive's automation solutions, you can streamline your operations and boost productivity."/> 
                <meta property="twitter:image" content="https://opositive.io/assests/Automated Page Banner Video thumbnail.webp"/> 
        </Head>
        <section className="banner-automate">
      <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='mobile-video' poster='./assests/Automated Page Banner Video thumbnail.webp'  style={{width:'100%'}}>
               <source src="./assests/Automated Page Banner Video - Compresed.mp4"  />
           </video>
        <video
          muted
          autoPlay={"autoplay"}
          preLoad={"metadata"}
        playsinline ={"true"}
          loop id='desktop-video' poster='./assests/automate-banner.webp' style={{width:'100%'}}>
               <source src="./assests/Automated Page Banner Video Desktop compressed.mp4"  />
           </video> 
           <a href="#trackgrowth"><button class="centered-video-button">EXPLORE NOW <img src="./assests/Arrow-white.png" alt="" class="img-fluid video-arrow"/></button></a>
      </section>
      <section id='trackgrowth' className='growth-section'>
            <div className='container'>
               <div className='row growth-section-row'>
                
                  <div className='col-12 col-md-6'>
                      <h1 className='growth-heading desktop'>Track Your Growth with Studio + </h1>
                      <p className='growth-para'>With our Studio+ customized dashboard, you can keep an eye on all the relevant data & competitive analysis for your website from Google Analytics, Facebook Ads, Google Adwords, Google Search Console, and other APIs of global platforms.</p>
                      <p className='growth-para'>Forget getting lost in pages of data and embrace a simplified & real-time experience, where you see what matters to you. </p>
                      <Link href='/studio-plus-sign-up'><button className='more-btn'>SIGN UP FOR FREE<img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </Link>
                  </div>
                  <div className='col-12 col-md-6'>
                  <h1 className='growth-heading mobile'>Track Your Growth with Studio + </h1>
                  <img src="./assests/Studio-New.gif" className ="img-fluid studio-img"/>  
                  </div>
               </div>
            </div>
        </section>
        <section className='tribe-section'>
            <div className='container'>
               <div className='row'>
                <div className='col-12 col-md-6'>
                <h2 className='tribe-heading mobile'>Revolutionize backlinking with Tribe+ </h2>
                <img src="./assests/Tribe-new.gif" className ="img-fluid tribe-img"/>  

                  </div>
                  <div className='col-12 col-md-6'>
                      <h2 className='tribe-heading desktop'>Revolutionize backlinking with Tribe+ </h2>
                      <p className='tribe-para'>Take your website’s DA to the next level with our Tribe+ platform that allows you to accelerate high-quality backlink generation with special focus on DR 70+ sites.<br/>
                      Our network gives you access to:
                      </p>
                      <ul className="tribe-list">
                        <li>
                        7000+ bloggers that are partnered with us at exclusive pricing.
                        </li>
                        <li>
                        Intelligent classification
                        </li>
                        <li>
                        One-click connect.
                        </li>
                      </ul>
                      <p className="tribe-para">
                      Tribe+ allows you to build credible backlinks at scale through our structured database that is filtered by domain rating, website category, spam score, etc.
                      </p>
                      <Link href='/tribe-plus-sign-up'><button className='more-btn'>SIGN UP FOR FREE<img src='./assests/Arrow (2).png' alt='' className='red-arrow img-fluid '/></button>
                      </Link>
                  </div>
               </div>
            </div>
        </section>
        <section className="tools-suite">
        <div className="container">
          <h2>O+ Tools Suite </h2>
          <h4>Featured tools developed for better performance</h4>
          <div className="row tools-suite-row">
             <div className="col-md-3 col-sm-12 tools-col">
             <img src="./assests/Extract-Red BG-01 1.png" className ="img-fluid"/>  
             <h3>
             EXTRACT +
             </h3>
             <p>
             Our internal tool that leverages its access to Google Search Console APIs to gather deeper insights for website pages.  
             </p>
             </div>
             <div className="col-md-3 col-sm-12 tools-col">
             <img src="./assests/Crawl-Red BG-01 1.png" className ="img-fluid"/>  
               <h3>
               CRAWL +
               </h3>
               <p>
               Accelerate effective crawling by URL verification at scale (up to 1.8 L/hr) with CRAWL+.  
               </p>
             </div>
             <div className="col-md-3 col-sm-12 tools-col">
             <img src="./assests/Live-Red BG-01-01 1.png" className ="img-fluid"/>  
              <h3>
              LIVE+
              </h3>
              <p>
              Keep an hourly check on your digital PRs live status & linkage to brand sites and competitors with LIVE+. 
              </p>
             </div>
             <div className="col-md-3 col-sm-12 tools-col">
             <img src="./assests/Caffeine-RED BG-01 1.png" className ="img-fluid"/>  
               <h3>
               CAFFEINE +
               </h3>
               <p>
               Verify your indexing of backlinks or brand URLs in one single window with CAFFEINE+. 
               </p>
             </div>
          </div>
        </div>
      </section>
      <section className="knowledge-partners armour">
        <div className="container">
                <div className="row">
                    <h2>O+ Armour</h2>
                    <p>Our arsenal of the best paid license tools in the market. </p>
                  <KnowledgePartner></KnowledgePartner>
                </div>

             </div>
        </section>
      <section className="cta-share contribute-cta">
            <div className="container cta-share-container">
               <div className="row">
                  <div className="col-md-6 col-12">
                    <h2 className="seo-automation">
What's your SEO automation dream? 
                    </h2>
                    <p className="seo-automation-para">
                    Let’s <strong>make </strong>it a <strong>reality</strong>. <br/>
<strong>Chances are</strong> we <strong>already have</strong>.
                    </p>
                  </div>
                  <div className="col-md-6 col-12">
                    <Automateform></Automateform>
                  </div>
               </div>
            </div>

        </section>
        </>
    )
  }