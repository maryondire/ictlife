import React, { Component } from 'react';

class Team extends Component {
  render() {

    if(this.props.data){
      var heading = this.props.data.heading;
      var members= this.props.data.members.map(function(grid){
      return <div class="col-md-5 agileits_team_grid"><div class="agileits_team_grid_figure"><img src={grid.image} alt=" " class="img-responsive" /></div><h4>{grid.name}</h4><p>{grid.post}</p><p>{grid.phone}</p>
      <div class="social-icon">
          <a href={grid.facebookurl} class="social-button facebook"><i class={grid.facebookclassName}></i></a> 
          <a href={grid.twitterurl} class="social-button twitter"><i class={grid.twitterclassName}></i></a>
          <a href={grid.googleurl} class="social-button google"><i class={grid.googleclassName}></i></a> 
          <a href={grid.dribbleurl} class="social-button dribbble"><i class={grid.dribbleclassName}></i></a> 
      </div></div>
      });
    }

    return (
    <div className="team" id="team">
		<div className="container">
			<h3 className="w3ls_head"><span>Our </span>Team</h3>
			<p className="w3agile">{heading}</p>
			<div className="agileits_team_grids">
                <div className="clearfix"> </div>
			</div>
		</div>
</div>
    );
  }
}

export default Team;
