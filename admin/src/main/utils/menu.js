import React, { Component } from 'react'
import MegaMenu from './megaMenu';
import SubMenu from './subMenu';
import { Link } from 'react-router-dom'
import ItemSubMenu from './itemSubMenu'

class Menu extends Component {
    render() {
        return(
            <div id="navigation">
                <ul className="navigation-menu">
                    <li className="has-submenu">
                        <Link to="/"><i className="mdi mdi-view-dashboard"></i> <span> Dashboard </span> </Link>
                    </li>
                    <li className="has-submenu">
                        <Link to="/ticket"><i className="mdi mdi-invert-colors"></i> <span> Tickets </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/services"><i className="mdi mdi-texture"></i><span> Serviços </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/organizations"><i className="mdi mdi-texture"></i><span> Organizações </span> </Link>
                    </li>

                    <li className="has-submenu">
                        <Link to="/ticket"><i className="mdi mdi-texture"></i><span> Operadores </span> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu