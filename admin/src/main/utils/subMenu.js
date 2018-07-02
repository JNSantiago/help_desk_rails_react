import React, { Component } from 'react'
import ItemSubMenu from './itemSubMenu'

class SubMenu extends Component {
    render() {
        return(
            <ul className="submenu">
                {this.props.children}
            </ul>
        )
    }
}

export default SubMenu