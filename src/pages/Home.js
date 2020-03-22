import React, { Component } from 'react';
import Main from './Main';
import $ from 'jquery';
import Us from './Us';
import Features from './Features';
import Testimonials from './Testimonials';
import Stats from './Stats';
import Team from './Team';
import Footer from './Footer';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      events: {}
    };

  }

  getEvents(){
    $.ajax({
      url:'/events.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({events: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }


  componentDidMount(){
    this.getEvents();
    let scripts = [
      { src: "./public/js/jquery.flexslider.js" },
      { src: "./public/js/flex.js" }
  ]
  //Append the script element on each iteration
  scripts.map(item => { 
      const script = document.createElement("script")
      script.src = item.src
      script.async = true
      document.body.appendChild(script)
  });    
  }
  render() {
    var data=this.state.events.main;

    if(this.props.data){
      var name = this.props.data.name;
      var headers= this.props.data.header.map(function(list){
      return <li><a href={list.url}>{list.name}</a></li>
	    });
	    var sliders= this.props.data.slides.map(function(titles){
	    return <li><div className="agileits_w3layouts_banner_info"><p>{titles.paragraph}</p><h3>{titles.heading}</h3></div></li>
      })
    }

    return (
    <Main>
    <div className="banner jarallax" id="index">
	  <div className="agile_dot_info one">
		<div className="container">
      
			<div className="w3_agile_banner_info">
				<section className="slider">
						<div className="flexslider">
							<ul className="slides">
								{sliders}
							</ul>
						</div>
				</section>
				
				
			</div>
			<div className="agile_banner_social">
				<ul className="agileits_social_list">
					<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
					<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
					<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
	</div>
  <Us data={this.state.events.about}/>
  <Features data={this.state.events.features}/>
  <Testimonials data={this.state.events.testimonials}/>
  <Stats data={this.state.events.stats}/>
  <Team data={this.state.events.team}/>
  <Footer data={this.state.events.footer}/>
  </Main>
 
    );
  }
}


export default HomePage;
