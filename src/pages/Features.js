import React, { Component } from 'react';

class Features extends Component {
  render() {

    if(this.props.data){
      var paragraph = this.props.data.paragraph;
    }

    return (
        <div className="special jarallax" id="features">
		<div className="container">
		<h3 className="w3ls_head"><span className="thr">Our </span>Featured Events</h3>
		<p className="w3agile fru">{paragraph}</p>
			<div className="special-grids">
				<div className="col-md-6 w3l-special-grid">
					<div className="col-md-6 w3ls-special-img">
						
					</div>
					<div className="col-md-6 agileits-special-info">
						<h4>Wedding</h4>
						<p>The most important day in a couple's life. Guaranteeing personalized solutions and flawless execution, our venues provide the perfect location for your special day and many more.</p>
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-6 w3l-special-grid">
					<div className="col-md-6 w3ls-special-img wthree-img1">
						
					</div>
					<div className="col-md-6 agileits-special-info">
						<h4>Birthday</h4>
						<p>Whether an all-day or the ultimate extravaganza that lasts well into the wee hours, our team is here to make sure all your birthday party wishes come true so you can kick back and enjoy your special day!</p>
					</div>
					<div className="clearfix"> </div>
				</div>
					<div className="col-md-6 w3l-special-grid">
					<div className="col-md-6 agileits-special-info">
						<h4>Conference</h4>
						<p>From formal, to not-so-formal, our flexible event spaces can cater to your every need for meetings and conferences large or small, and our dedicated event team can assist with all aspects of your event planning</p>
					</div>
					<div className="col-md-6 w3ls-special-img wthree-img2">
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="col-md-6 w3l-special-grid">
					<div className="col-md-6 agileits-special-info">
						<h4>Fashion Galas</h4>
						<p>Fast becoming to go-to location for fashion events, PR gatherings and product launches, The Fly High Group venues provide you with choice and quality in premium locations for all your event needs.</p>
					</div>
					<div className="col-md-6 w3ls-special-img wthree-img3">	
					</div>
					<div className="clearfix"> </div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
    );
  }
}

export default Features;
