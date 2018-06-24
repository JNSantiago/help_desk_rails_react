import React, {Component} from 'react'

export default class Title extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">{this.props.title}</h4>
                </div>
            </div>
        )
    }
}