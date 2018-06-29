import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ItemSubMenu extends Component {
    render() {
        return( 
            <li><Link to={this.props.link}>{this.props.name}</Link></li>
        )
    }
}

export default ItemSubMenu