import React, { Component } from 'react'
import DropdownProfile from './../main/utils/dropdownProfile'
import Menu from './../main/utils/menu'

class Header extends Component {
    render() {
        return(
            <header id="topnav">
                <div className="topbar-main">
                <div className="container-fluid">
                <div className="logo">
                    <a href="index.html" className="logo">
                        <span className="logo-small"><i className="mdi mdi-radar"></i></span>
                        <span className="logo-large"><i className="mdi mdi-radar"></i>Adminto</span>
                    </a>
                    <a href="index.html" className="logo">
                        <img src="assets/images/logo-sm.png" alt="" height="26" className="logo-small" />
                        <img src="assets/images/logo.png" alt="" height="24" className="logo-large" />
                    </a>

                </div>


                <div className="menu-extras topbar-custom">

                    <ul className="list-unstyled topbar-right-menu float-right mb-0">

                        <li className="menu-item">
                            <a className="navbar-toggle nav-link">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                        <li className="hide-phone">
                            <form className="app-search">
                                <input type="text" placeholder="Search..."
                                    className="form-control" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </li>
                        <li>
                            <div className="notification-box">
                                <ul className="list-inline mb-0">
                                    <li>
                                        <a href="javascript:void(0);" className="right-bar-toggle">
                                            <i className="mdi mdi-bell-outline noti-icon"></i>
                                        </a>
                                        <div className="noti-dot">
                                            <span className="dot"></span>
                                            <span className="pulse"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <DropdownProfile />

                    </ul>
                </div>

                <div className="clearfix"></div>

                </div>
                </div>
                <div className="navbar-custom">
                <div className="container-fluid">
                    <Menu />
                </div>
            </div>
            </header>
        )
    }
}

export default Header