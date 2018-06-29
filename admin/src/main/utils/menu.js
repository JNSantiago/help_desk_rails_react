import React, { Component } from 'react'
import MegaMenu from './megaMenu';
import SubMenu from './subMenu';
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
                        <Link to="/ticket"><i className="mdi mdi-invert-colors"></i> <span> Tickets </span> </Link>
                        <MegaMenu />
                    </li>

                    <li className="has-submenu">
                        <Link to="/ticket"><i className="mdi mdi-texture"></i><span> Operadores </span> </Link>
                        <SubMenu />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu