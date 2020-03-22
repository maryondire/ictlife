import React, { Component } from 'react';

class Us extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.message;
      var heading = this.props.data.heading;
      var subheading = this.props.data.subheading;
      var paragraph = this.props.data.paragraph;
      var work= this.props.data.us.map(function(list){
      return <div className={list.divclassname}><i className={list.iclassname} aria-hidden="true"></i><h4>{list.heading}</h4><div className="h4-underline"></div><p>{list.paragraph}</p></div>
	  });
    }

    return (
    <div className="jarallax agile-about w3ls-section" id="about">
		<div className="container">
			<h2 className="w3ls_head"><span>About </span>Us</h2>
            <p className="w3agile">{message}</p>
			<div className="agile-about-grids">
					
				<div className="col-md-6 col-sm-6 agile-about-grid agile-about-grid1 ">
					<h5>{heading}</h5>
					<h4>{subheading}</h4>
                    <p>{paragraph}</p>
				</div>

				<div className="col-md-6 col-sm-6 agile-about-grid agile-about-grid2 ">
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="about-info-grids">
                {work}
                <div className="clearfix"></div>
			</div>
			
		</div>
	</div>
    );
  }
}

export default Us;
