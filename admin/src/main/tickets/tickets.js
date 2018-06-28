import React, { Component } from 'react'

import Title from './../utils/title'

class Ticket extends Component {
    render() {
        return(
            <div className="ticket">
                <div>
                    <Title title="Todos os Tickets" />
                </div>
            </div>
        )
    }
}

export default Ticket