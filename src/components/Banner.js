import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './assets-landing/css/bootstrap.css';
import './assets-landing/css/landing-page.css';
import './assets-landing/css/pe-icon-7-stroke.css';
import './assets-landing/fonts/fontawesome-webfont.eot';
import './assets-landing/fonts/fontawesome-webfont.svg';
import './assets-landing/fonts/fontawesome-webfont.ttf';
import './assets-landing/fonts/fontawesome-webfont.woff';
import './assets-landing/fonts/FontAwesome.otf';
import './assets-landing/fonts/glyphicons-halflings-regular.eot';
import './assets-landing/fonts/glyphicons-halflings-regular.svg';
import './assets-landing/fonts/glyphicons-halflings-regular.ttf';
import './assets-landing/fonts/glyphicons-halflings-regular.woff';
import './assets-landing/fonts/Pe-icon-7-stroke.eot';


class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="./assets-landing/img/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Awesome Landing Page by Creative Tim</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <meta name="viewport" content="width=device-width" />
        <link href="./assets-landing-landing/css/bootstrap.css" rel="stylesheet" />
        <link href="./assets-landing-landing/css/landing-page.css" rel="stylesheet" />
        {/*     Fonts and icons     */}
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400,300" rel="stylesheet" type="text/css" />
        <link href="./assets-landing-landing/css/pe-icon-7-stroke.css" rel="stylesheet" />
        <nav className="navbar navbar-transparent navbar-top" role="navigation">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar bar1" />
                <span className="icon-bar bar2" />
                <span className="icon-bar bar3" />
              </button>
              <a href="http://www.creative-tim.com">
                <div className="logo-container">
                  <div className="logo">
                    <img src="./assets-landing/img/new_logo.png" alt="Creative Tim Logo" />
                  </div>
                  <div className="brand">
                    Creative Tim
                  </div>
                </div>
              </a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="example">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" />
                    Like
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                    Tweet
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                    Pin
                  </a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
        <div className="wrapper">
          <div className="parallax filter-gradient blue" data-color="blue">
            <div className="container">
              <div className="row">
                <div className="col-md-7  hidden-xs">
                  <div className="parallax-image">
                    <img src="./assets-landing/img/showcases/showcase-2/mac1.png" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="description text-center">
                    <h2>Showcase 2 - Your webapp</h2>
                    <br />
                    <h5>This template was built closely to our current layout as of June 2016. You can download a free demo below. Please share the webpage with others. Hope this template makes a good preview of what we are building here!</h5>
                    <div className="buttons">
                      <a href="http://www.creative-tim.com/product/awesome-landing-page" className="btn btn-fill btn-neutral">
                        <i className="fa fa-download" /> Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-gray section-clients">
            <div className="container text-center">
              <h4 className="header-text">Happy Customers</h4>
              <p>
                Designing in Photoshop became a trend. Change, save, redo. Change, save, redo. After searching thoroughly for an alternative to create something great, it was clear that there weren’t any great solutions or intentions by anyone to create a pixel-perfect template for anyone to use. We don't do pixel-perfect, we focus on client-perfect projects.<br />
              </p>
              <div className="logos">
                <ul className="list-unstyled">
                  <li><img src="./assets-landing/img/logos/adobe.png" /></li>
                  <li><img src="./assets-landing/img/logos/zendesk.png" /></li>
                  <li><img src="./assets-landing/img/logos/ebay.png" />
                  </li><li><img src="./assets-landing/img/logos/evernote.png" /></li>
                  <li><img src="./assets-landing/img/logos/airbnb.png" /></li>
                  <li><img src="./assets-landing/img/logos/zappos.png" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section section-presentation">
            <div className="container">
              <div className="row">
                <div className="col-md-5 hidden-xs">
                  <div className="description">
                    <h4 className="header-text">It's beautiful</h4>
                    <p>This pack is a demo of our latest product. You can download it and use it in any project of yours. By downloading the resource with a Personal License you are granted the use of it under the conditions featured in the above table. Ownership stays with Creative Tim, along with the copyright holders and you must abide the following rights and restrictions. </p>
                    <p>Rights:
                    </p><p>
                    </p><ol>
                      <li>You have rights for royalty free use of our resources for your personal project.</li>
                      <li>You may modify the resources according to your requirements and use them royalty free for your personal project. For example, you may include this resource in a website you will be designing for you. </li>
                      <li>You are not required to attribute or link to <a href="http://www.creative-tim.com">Creative Tim</a> in project.</li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <img src="./assets-landing/img/showcases/showcase-2/mac2.png" style={{marginTop: '-50px'}} />
                </div>
              </div>
            </div>
          </div>
          <div className="section section-demo">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="demo-image">
                    <img src="./assets-landing/img/showcases/showcase-2/examples/home_4.jpg" alt />
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <h4 className="header-text">Beautiful colors</h4>
                  <p>
                    Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                  </p>
                  <p>
                    PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                  </p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-5">
                  <h4 className="header-text">Pixel Perfect</h4>
                  <p>
                    Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                  </p>
                  <p>
                    PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                  </p>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <div className="demo-image">
                    <img src="./assets-landing/img/showcases/showcase-2/examples/home_6.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-features">
            <div className="container">
              <h4 className="header-text text-center">Features</h4>
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-blue">
                    <div className="icon">
                      <i className="pe-7s-pen" />
                    </div>
                    <div className="text">
                      <h4>Client-Perfect Draws</h4>
                      <p>All appointments sync with your Google calendar so your availability is always up to date. See your schedule at a glance from any device.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-blue">
                    <div className="icon">
                      <i className="pe-7s-look" />
                    </div>
                    <h4>Retina Ready</h4>
                    <p>Automatic text and email reminders make sure customers always remember their upcoming appointments.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-blue">
                    <div className="icon">
                      <i className="pe-7s-like" />
                    </div>
                    <h4>You'll love it</h4>
                    <p>You'll Love It, you will find dining room sets, couches, chairs and pre-owned furniture of all kinds as well as lamps, rugs and accessories.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-blue">
                    <div className="icon">
                      <i className="pe-7s-piggy" />
                    </div>
                    <h4>Big Discount</h4>
                    <p>Take payments and run your business on the go, in your store and then see how it all adds up with analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-testimonial">
            <div className="container">
              <h4 className="header-text text-center">What people think</h4>
              <div id="carousel-example-generic" className="carousel fade" data-ride="carousel">
                {/* Wrapper for slides */}
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="mask">§
                      <img src="./assets-landing/img/faces/face-4.jpg" />
                    </div>
                    <div className="carousel-testimonial-caption">
                      <p>Jay Z, Producer</p>
                      <h3>"I absolutely love your app! It's truly amazing and looks awesome!"</h3>
                    </div>
                  </div>
                  <div className="item active">
                    <div className="mask">
                      <img src="./assets-landing/img/faces/face-3.jpg" />
                    </div>
                    <div className="carousel-testimonial-caption">
                      <p>Drake, Artist</p>
                      <h3>"This is one of the most awesome apps I've ever seen! Wish you luck Creative Tim!"</h3>
                    </div>
                  </div>
                  <div className="item">
                    <div className="mask">
                      <img src="./assets-landing/img/faces/face-2.jpg" />
                    </div>
                    <div className="carousel-testimonial-caption">
                      <p>Rick Ross, Musician</p>
                      <h3>"Loving this! Just picked it up the other day. Thank you for the work you put into this."</h3>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators carousel-indicators-blue">
                  <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                  <li data-target="#carousel-example-generic" data-slide-to={1} />
                  <li data-target="#carousel-example-generic" data-slide-to={2} />
                </ol>
              </div>
            </div>
          </div>
          <div className="section section-no-padding">
            <div className="parallax filter-gradient blue" data-color="blue">
              <div className="parallax-background">
                <img className="parallax-background-image" src="./assets-landing/img/showcases/showcase-2/bg2.jpg" />
              </div>
              <div className="info">
                <h1>Download this landing page for free!</h1>
                <p>Beautiful multipurpose bootstrap landing page.</p>
                <a href="http://www.creative-tim.com/product/awesome-landing-page" className="btn btn-neutral btn-lg btn-fill">DOWNLOAD</a>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <nav className="pull-left">
                <ul>
                  <li>
                    <a href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="social-area pull-right">
                <a className="btn btn-social btn-facebook btn-simple">
                  <i className="fa fa-facebook-square" />
                </a>
                <a className="btn btn-social btn-twitter btn-simple">
                  <i className="fa fa-twitter" />
                </a>
                <a className="btn btn-social btn-pinterest btn-simple">
                  <i className="fa fa-pinterest" />
                </a>
              </div>
              <div className="copyright">
                © 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love
              </div>
            </div>
          </footer>
        </div>
        <div className="fixed-plugin">
          <div className="dropdown open">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <ul className="dropdown-menu">
              <li className="header-title">Adjustments</li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger">
                  <p className="pull-right">Filter</p>
                  <div className="pull-left">
                    <span className="badge selector badge-blue active" data-color="blue" data-button="info" />
                    <span className="badge selector badge-green" data-color="green" data-button="success" />
                    <span className="badge selector badge-orange" data-color="orange" data-button="warning" />
                    <span className="badge selector badge-red" data-color="red" data-button="danger" />
                    <span className="badge selector badge-black" data-color="gray" data-button="default" />
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="header-title">Template</li>
              <li className>
                <a href="index.html" className="switch">
                  <img alt="..." src="./assets-landing/img/blue.jpg" />
                  <p className="pull-left">Awesome Landing Page</p>
                </a>
              </li>
              <li className="header-title">Showcases</li>
              <li className>
                <a href="phone_app.html" className="switch">
                  <img alt="..." src="./assets-landing/img/phone_app.jpg" />
                  <p className="pull-left">Showcase 1</p>
                </a>
              </li>
              <li className="active">
                <a href="web_app.html" className="switch">
                  <img alt="..." src="./assets-landing/img/web_app.jpg" />
                  <p className="pull-left">Showcase 2</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
		);
	}
}

export default Banner;
