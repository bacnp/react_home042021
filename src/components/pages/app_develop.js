import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';
import { HashLink as Link } from 'react-router-hash-link';

export class App_Develop extends Component {
    render() {
        // var slick_slider = {
        //   dots: false,
        //   arrow: false,
        //   autoplay: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 4,
        //   slidesToScroll: 1,

        //   responsive: [{

        //     breakpoint: 1199,
        //     settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //     }
        // },
        // {
      
        //     breakpoint: 1024,
        //     settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //     }
        // },
        // {
      
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }]
        // };
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">Application Development</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <Link title="Homepage" to="/" ><i className="ti ti-home" />&nbsp;&nbsp;Home</Link>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services : : Application Development</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* Company section */}

                    <div className="container-xl mt-5">
                  <div className="col-md-12">

                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>React Plus HOLDINGS has experience in developing and operating iOS and Android applications in a wide range of industries. Entrust us from planning to design, development and operation by one stop service.</h5>
                    </div>
                    </div>
                    </div>


                {/* Companysection end*/}
                
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Why Choose Us</h2>
                        
                      </div>
                    </div>{/* section title end */}
   
                    </div>
                    </div>
                    {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/App_1.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">Over 12 Years of Experience</h2>
                            </div>
                            <div className="title-desc">
                                <p>With over 12 years of experience, React Plus HOLDINGS constantly strives for excellence in customer satisfaction by delivering high-quality software products that leverage cutting-edge technologies together with reliable and cost-effective solutions.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>

                 {/* aboutus-section end */}
                 
                {/* Companysection end*/}
                <section className="ttm-row.zero-padding-section clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">High Technical Level</h2>
                            </div>
                            <div className="title-desc">
                                <p>With a team of engineers of high professional and technical qualifications, we are confident to support from consulting to product development with modern techniques and still ensuring to fulfill the specific needs of each client.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/App_2.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                                    <section className="ttm-row clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/App_3.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">Keeping Up with Trends</h2>
                            </div>
                            <div className="title-desc">
                                <p>React Plus HOLDINGS is a globally competitive software engineering company with a wide range of expertise in all areas needed for reliable software development.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>

                        </div>
                    </div>
                    </section>
                    
                 {/* aboutus-section end */}
                 <section className="ttm-row.zero-padding-section aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Our works</h2>
                        
                      </div>
                    </div>{/* section title end */}
                    <div className="content-inner active">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/pos.jfif" alt="pos app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sales</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-1'>POS Application For Tablet</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/english_learning.jpg" alt="english_learning_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Education</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-2'>English Study App for Japanese</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/busses_track.jpg" alt="busses_track_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-3'>Bus Track Application</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/game_voice.jpg" alt="in_game_voice_chat" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Media</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-4'>In-game Voice Chat Application</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/matching_app.jpg" alt="matching_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-5'>Matching App</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/message.jpg" alt="message_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Services</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-6'>Medical Messaging App</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div> 
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                    </div>
                    </div>
                    </section>               
                    <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
 
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title">Technical Stack</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>

                  <div className="title-desc">
                    <div className="client">
                    <img className="img-fluid" src="./images/temp/tech.jpg" alt="technical_stack"></img>


                    </div>
                </div>




                    </div>
                </section>
            </div>
            )
    }
}


export default App_Develop;