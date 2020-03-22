import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

export default class AddEvent extends Component{
    static contextType = AppContext;   
    
    insertEvent = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/ictlifetest-db/add-event.php',{
            eventDescription:this.eventdescription.value,
            eventOwner:this.eventowner.value,
            ownerEmail:this.owneremail.value,
            eventLocation:this.eventlocation.value,
            eventStartTime:this.eventstarttime.value,
            eventEndTime:this.eventendtime.value
        })
        .then(function ({data}) {
            if(data.success === 1){
                
                this.context.addNewEvent(data.id,this.eventdescription.value,this.eventowner.value,this.owneremail.value,this.eventlocation.value,this.eventstarttime.value,this.eventendtime.value);
                event.target.reset();
                // alert(data.msg);
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){

        return(
            <form onSubmit={this.insertEvent}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Event Description</label>
                    <input type="text" name="eventdescription" ref={(val) => this.eventdescription = val} className="form-control" placeholder="Event Description"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Event Owner</label>
                    <input type="text" name="eventowner" ref={(val) => this.eventowner = val} className="form-control" placeholder="Event Owner"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Event Owner Email</label>
                    <input type="email" name="owneremail" ref={(val) => this.owneremail = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Event Location</label>
                    <input type="text" name="eventlocation" ref={(val) => this.eventlocation = val} className="form-control" placeholder="Event Location"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Start Time</label>
                    <input type="time" name="eventstarttime" ref={(val) => this.eventstarttime = val} className="form-control" placeholder="Start Time"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">End Time</label>
                    <input type="time" name="eventendtime" ref={(val) => this.eventendtime = val} className="form-control" placeholder="End Time"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add event</button>
                </div>
            </div>
        </form>        
        );
    }
}