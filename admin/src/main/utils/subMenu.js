import React, { Component } from 'react'
import ItemSubMenu from './itemSubMenu'

class SubMenu extends Component {
    render() {
        return(
            <ul className="submenu">
                <ItemSubMenu link="/ticket" name="Pesquisar" />
            </ul>
        )
    }
}

export default SubMenu