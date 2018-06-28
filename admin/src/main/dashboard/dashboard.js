import React, {Component} from 'react'
import Title from './../utils/title'
import Item from './../utils/item'

class Dashboard extends Component {
    render() {
        return(
            <div className="ticket">
                <div>
                    <Title title="Dashboard" />
                </div>
                <div className="row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}

export default Dashboard