import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class EventsList extends Component{
    static contextType = AppContext;   
    
    state = {
        events:[]
    }
    
    fetchEvents= () => {
        fetch('http://localhost/ictlifetest-db/all-events.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        events:data.events.reverse()
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchEvents();
    }

    handleUpdate = (id) => {
        Axios.post('http://localhost/ictlifetest-db/update-event.php',
        {
            id:id,
            eventDescription:this.eventdescription.value,
            eventOwner:this.eventowner.value,
            ownerEmail:this.owneremail.value,
            eventLocation:this.eventlocation.value,
            eventStartTime:this.eventstarttime.value,
            eventEndTime:this.eventendtime.value
        })
        .then(({data}) => {
            if(data.success === 1){
                let events = this.state.events.map(event => {
                    if(event.id === id){
                        event.eventDescription = this.eventdescription.value;
                        event.eventOwner = this.eventowner.value;
                        event.ownerEmail = this.owneremail.value;
                        event.eventLocation = this.eventlocation.value;
                        event.eventStartTime = this.eventstarttime.value;
                        event.eventEndTime = this.eventendtime.value;
                        event.isEditing = false;
                        return event;
                    }
                    return event; 
                });
                this.setState({
                    events
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    editMode = (id) => {
        let events = this.state.events.map(event => {
            if(event.id === id){
                event.isEditing = true;
                return event;
            }
            event.isEditing = false;
            return event;
            
        });

        this.setState({
            events
        });
       
    }

    cancleEdit = (id) => {
        let events = this.state.events.map(event => {
            if(event.id === id){
                event.isEditing = false;
                return event;
            }
            return event
            
        });
        this.setState({
            events
        });
    }

    handleDelete = (id) => {
        let deleteEvent = this.state.events.filter(event => {
            return event.id !== id;
        });
        
        Axios.post('http://localhost/ictlifetest-db/delete-event.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    events:deleteEvent
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate(){
        let newEvent = this.context.new_event;
        if(newEvent){ 
            this.setState({
                events:[
                    newEvent,
                    ...this.state.events
                    
                ]
            });          
            this.context.new_event = false;
        }        
    }

    render(){

        let allEvents = this.state.events.map(({id,eventDescription,eventOwner,ownerEmail,eventLocation,eventStartTime,eventEndTime,isEditing}, index) => {
            
            return isEditing === true ? (   
            <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.eventdescription = item} defaultValue={eventDescription}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.eventowner = item} defaultValue={eventOwner}/></td>
                <td><input className="form-control" type="email" ref={(item) => this.owneremail = item} defaultValue={ownerEmail}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.eventlocation = item} defaultValue={eventLocation}/></td>
                <td><input className="form-control" type="time" ref={(item) => this.eventstarttime = item} defaultValue={eventStartTime}/></td>
                <td><input className="form-control" type="time" ref={(item) => this.eventendtime = item} defaultValue={eventEndTime}/></td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.cancleEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ):
            ( 
                <tr key={id}>
                    <td>{eventDescription}</td>
                    <td>{eventOwner}</td>
                    <td>{ownerEmail}</td>
                    <td>{eventLocation}</td>
                    <td>{eventStartTime}</td>
                    <td>{eventEndTime}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.editMode(id)}>Edit</button>
                        <button onClick={() => this.handleDelete(id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });

        

        return(
            <>
            {allEvents}
            </>
        );
        
    }
}

export default EventsList;
