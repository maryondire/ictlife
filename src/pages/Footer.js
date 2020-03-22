import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var leftcolumn= this.props.data.left.map(function(column){
      return <li><i class={column.className} aria-hidden="true"></i>{column.text}<span>{column.span}</span></li>
      });
      var centercolumn= this.props.data.center.map(function(column){
      return <li><i class={column.className} aria-hidden="true"></i><a href={column.url}>{column.name}</a></li>
      });
      var rightcolumn= this.props.data.right.map(function(column){
      return <div class="w3_agileits_footer_grid_left"><a href="#"><img src={column.image} alt=" " class="img-responsive" /></a></div>
      });
      var paragraph = this.props.data.paragraph;
      var url = this.props.data.url;
    }

    return (
      <div className="footer">
		<div className="container">
			<div className="w3_agile_footer_grids">
				<div className="col-md-4 w3_agile_footer_grid">
					<h3>Latest Tweets</h3>
					<ul className="agile_footer_grid_list">
						{leftcolumn}
					</ul>
				</div>
				<div className="col-md-4 w3_agile_footer_grid">
					<h3>Navigation</h3>
					<ul className="agileits_w3layouts_footer_grid_list">
                  {centercolumn}
					</ul>
				</div>
				<div className="col-md-4 w3_agile_footer_grid">
					<h3>Latest Works</h3>
					   {rightcolumn}
					<div className="clearfix"> </div>
				</div>
				<div className="clearfix"> </div>
			</div>
			<div className="w3_newsletter_footer_grids">
				<div className="w3_newsletter_footer_grid_left">
					<form action="#" method="post">
						<input type="email" name="Email" placeholder="Email" required=""/>
						<input type="submit" value="Send"/>
					</form>
				</div>
			</div>
		
			<div className="agileinfo_copyright">
				<p>{paragraph}<a href={url}></a></p>
			</div>
		</div>
	</div>
    );
  }
}

export default Footer;
