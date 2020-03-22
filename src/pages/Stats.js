import React, { Component } from 'react';

class Stats extends Component {
  render() {

    if(this.props.data){
      var heading = this.props.data.heading;
      var stats= this.props.data.numbers.map(function(grid){
      return <div className={grid.divclassname}><span className={grid.spanclassname} aria-hidden="true"></span><h3>{grid.text}</h3><p className="counter">{grid.image}</p></div>
      });
    }

    return (
        <div className="stats jarallax">
		<div className="container">
		<h3 className="w3ls_head"><span className="thr">Why </span>Us?</h3>
		<p className="w3agile fru">{heading}</p>
			<div className="stat_top">
                {stats}<div className="clearfix"> </div>
			</div>
		</div>
	</div>
    );
  }
}

export default Stats;
