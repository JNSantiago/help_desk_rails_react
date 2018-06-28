import React, { Component } from 'react'
import DropdownProfile from './../main/utils/dropdownProfile'

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
                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li className="has-submenu">
                                <a href="index.html"><i className="mdi mdi-view-dashboard"></i> <span> Dashboard </span> </a>
                            </li>
                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-invert-colors"></i> <span> User Interface </span> </a>
                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li><a href="ui-buttons.html">Buttons</a></li>
                                            <li><a href="ui-cards.html">Cards</a></li>
                                            <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
                                            <li><a href="ui-typography.html">Typography </a></li>
                                            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                                            <li><a href="ui-material-icons.html">Material Design Icons</a></li>
                                            <li><a href="ui-font-awesome-icons.html">Font Awesome</a></li>
                                            <li><a href="ui-themify-icons.html">Themify Icons</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li><a href="ui-dripicons.html">Dripicons</a></li>
                                            <li><a href="ui-modals.html">Modals</a></li>
                                            <li><a href="ui-notification.html">Notification</a></li>
                                            <li><a href="ui-range-slider.html">Range Slider</a></li>
                                            <li><a href="ui-components.html">Components</a></li>
                                            <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                                            <li><a href="ui-treeview.html">Tree view</a></li>
                                            <li><a href="ui-widgets.html">Widgets</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-texture"></i><span> Forms </span> </a>
                                <ul className="submenu">
                                    <li><a href="form-elements.html">General Elements</a></li>
                                    <li><a href="form-advanced.html">Advanced Form</a></li>
                                    <li><a href="form-validation.html">Form Validation</a></li>
                                    <li><a href="form-wizard.html">Form Wizard</a></li>
                                    <li><a href="form-fileupload.html">Form Uploads</a></li>
                                    <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
                                    <li><a href="form-xeditable.html">X-editable</a></li>
                                </ul>
                            </li>

                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-view-list"></i> <span> Tables </span> </a>
                                <ul className="submenu">
                                    <li><a href="tables-basic.html">Basic Tables</a></li>
                                    <li><a href="tables-datatable.html">Data Table</a></li>
                                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                                    <li><a href="tables-editable.html">Editable Table</a></li>
                                    <li><a href="tables-tablesaw.html">Tablesaw Table</a></li>
                                </ul>
                            </li>

                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-chart-donut-variant"></i><span> Charts </span> </a>
                                <ul className="submenu">
                                    <li><a href="chart-flot.html">Flot Chart</a></li>
                                    <li><a href="chart-morris.html">Morris Chart</a></li>
                                    <li><a href="chart-chartist.html">Chartist Charts</a></li>
                                    <li><a href="chart-chartjs.html">Chartjs Chart</a></li>
                                    <li><a href="chart-other.html">Other Chart</a></li>
                                </ul>
                            </li>

                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-google-pages"></i><span> Pages </span> </a>
                                <ul className="submenu">
                                    <li><a href="page-starter.html">Starter Page</a></li>
                                    <li><a href="page-login.html">Login</a></li>
                                    <li><a href="page-register.html">Register</a></li>
                                    <li><a href="page-recoverpw.html">Recover Password</a></li>
                                    <li><a href="page-lock-screen.html">Lock Screen</a></li>
                                    <li><a href="page-confirm-mail.html">Confirm Mail</a></li>
                                    <li><a href="page-404.html">Error 404</a></li>
                                    <li><a href="page-500.html">Error 500</a></li>
                                </ul>
                            </li>

                            <li className="has-submenu">
                                <a href="#"><i className="mdi mdi-layers"></i><span>Extra Pages </span> </a>
                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li><a href="extras-projects.html">Projects</a></li>
                                            <li><a href="extras-tour.html">Tour</a></li>
                                            <li><a href="extras-taskboard.html">Taskboard</a></li>
                                            <li><a href="extras-inbox.html">Mail</a></li>
                                            <li><a href="extras-taskdetail.html">Task Detail</a></li>
                                            <li><a href="extras-maps.html">Maps</a></li>
                                            <li><a href="extras-calendar.html" >Calendar</a></li>
                                            <li><a href="extras-contact.html">Contact list</a></li>
                                            <li><a href="extras-pricing.html">Pricing</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li><a href="extras-timeline.html">Timeline</a></li>
                                            <li><a href="extras-invoice.html">Invoice</a></li>
                                            <li><a href="extras-profile.html">Profile</a></li>
                                            <li><a href="extras-faq.html">FAQ</a></li>
                                            <li><a href="extras-gallery.html">Gallery</a></li>
                                            <li><a href="extras-email-template.html">Email template</a></li>
                                            <li><a href="extras-maintenance.html">Maintenance</a></li>
                                            <li><a href="extras-comingsoon.html">Coming soon</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </header>
        )
    }
}

export default Header