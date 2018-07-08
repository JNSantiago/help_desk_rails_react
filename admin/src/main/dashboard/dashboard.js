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
                    <Item title="Abertos" number="256" today="56" />
                    <Item title="Fechados" number="1425" today="52" />
                    <Item title="Agentes" number="23" today="0" />
                    <Item title="Clientes" number="62" today="1" />
                </div>
            </div>
        )
    }
}

export default Dashboard