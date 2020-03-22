import React, { Component } from 'react';
import Main from './Main';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link} from 'react-router-dom';


class ProfilePage extends Component{
  render() {
        return (
          <Main>
            <div>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>

                            <div className="row">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-comments"></i>
                                            </div>
                                            <div className="mr-5">26 New Messages!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to={'#'}>
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-list"></i>
                                            </div>
                                            <div className="mr-5">11 New Events!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-shopping-cart"></i>
                                            </div>
                                            <div className="mr-5">123 New Attendees!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">13 New Comments!</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Fly Events Inc 2020</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            
            </Main>
            

        );
    }

}

export default ProfilePage;
