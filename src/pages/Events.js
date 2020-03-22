import React, { Component } from 'react';
import Main from './Main';
import List from '../components/List';
import {Provider} from '../components/Context';

class EventsPage extends Component {
  state = {
    post_found:true,
    new_event:false
}
addNewEvent = (id,eventdescription,eventowner,owneremail,eventlocation,eventstarttime,eventendtime) => {
    if(this.state.post_found){
        this.setState({
            new_event:{id:id,eventDescription:eventdescription,eventOwner:eventowner,ownerEmail:owneremail,eventLocation:eventlocation,eventStartTime:eventstarttime,eventEndTime:eventendtime}
        });
    }
    else{
        this.setState({
            post_found:true
        });
    }
    
}

postShow = (show) => {
    this.setState({
        post_found:show
    })
}

  
  render() {
    const contextValue = {
      new_event:this.state.new_event,
      addNewEvent:this.addNewEvent,
      post_show:this.postShow
  }

  let showEvents;
  if(this.state.post_found){
      showEvents = (
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>Event Description</th>
                      <th>Event Owner</th>
                      <th>Owner Email</th>
                      <th>Event Location</th>
                      <th>Event Start Time</th>
                      <th>Event End Time</th>
                  </tr>
              </thead>
              <tbody>
                  <List/>
              </tbody>
          </table>
      );
  }
  else{
      showEvents = (
          <div className="alert alert-light" role="alert">
              <h4 className="alert-heading">No Event Found!</h4>
              <hr/>
          </div>
      );
  }

    

    return (
    <Main>
    <div className="banner1 jarallax">
		<div className="container">
			<nav className="navbar navbar-default">
				<div className="navbar-header navbar-left">
					<h1><a className="navbar-brand" href="index.html">Fly Events Inc</a></h1>
				</div>
			</nav>
		</div>
	</div>
	<div className="gallery-grids">
		<div className="container">
		<h2 className="w3ls_head"><span>Eve</span>nts</h2>
    <Provider value={contextValue}>
            <div className="container-fluid bg-light">
            <div className="container p-5">
                <div className="card shadow-sm">
                    <h1 className="card-header text-center text-uppercase text-muted">Events</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                {showEvents}
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
        </Provider>
		</div>
	</div>
    
  </Main>
 
    );
  }
}

export default EventsPage;
