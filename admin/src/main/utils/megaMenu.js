import React, { Component } from 'react'
import ItemSubMenu from './itemSubMenu';

class MegaMenu extends Component {
    render() {
        return(
            <ul className="submenu megamenu">
                <li>
                    <ul>
                        <ItemSubMenu link="/ticket" name="Cadastrar" />
                    </ul>
                </li>
                <li>
                    <ul>
                        <ItemSubMenu link="/ticket" name="Pesquisa" />
                    </ul>
                </li>
            </ul>
        )
    }
}

export default MegaMenu