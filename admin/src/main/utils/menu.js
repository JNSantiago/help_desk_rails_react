import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return(
            <div id="navigation">
                <ul className="navigation-menu">
                    <li className="has-submenu">
                        <Link to="/"><i className="mdi mdi-view-dashboard"></i> <span> Dashboard </span> </Link>
                    </li>
                    <li className="has-submenu">
                        <Link to="/tickets"><i className="mdi mdi-av-timer"></i> <span> Tickets </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/services"><i className="mdi mdi-screwdriver"></i><span> Serviços </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/sub_services"><i className="mdi mdi-wrench"></i><span> Sub Serviços </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/organizations"><i className="mdi mdi-home-assistant"></i><span> Organizações </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/agents"><i className="mdi mdi-worker"></i><span> Operadores </span> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu