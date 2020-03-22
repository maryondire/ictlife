import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var heading = this.props.data.heading;
      var clients= this.props.data.testimonials.map(function(grid){
      return <div className="agileits_testimonial_grid"><div className="w3l_testimonial_grid"><p>{grid.message}</p><h4>{grid.name}</h4><h5>{grid.text}</h5><div className="w3l_testimonial_grid_pos"><img src={grid.image} alt=" " className="img-responsive" /></div></div></div>
      });
    }

    return (
    <div className="testimonials jarallax">
		<div className="container">
			<h3 className="w3ls_head"><span>Our </span>Client Say</h3>
			<p className="w3agile">{heading}
			</p>
			<div className="w3ls_testimonials_grids">
				 <section className="center slider">
                     {clients}
				</section>
			</div>
		</div>
	    </div>
    );
  }
}

export default Testimonials;
