import React, { Component } from 'react'

let divStyle = {
    display: 'inline', 
    width: '80px', 
    height:'80px'
}

let inputSyle = {
    width: '44px', 
    height: '26px',
    position: 'absolute',
    verticalAlign: 'middle',
    marginTop: '26px',
    marginLeft: '-62px',
    border: '0px',
    background: 'none',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontSize: '16px',
    lineHeight: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center', 
    color: 'rgb(240, 80, 80)',
    padding: '0px'
}

class Item extends Component {
    render() {
        return(
            <div className="col-xl-3 col-md-6">
                <div className="card-box">
                    <div className="dropdown pull-right">
                        <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-dots-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
                            <a href="javascript:void(0);" className="dropdown-item">Another action</a>
                            <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                            <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
                        </div>
                    </div>

                    <h4 className="header-title mt-0 m-b-30">{this.props.title}</h4>

                    <div className="widget-chart-1">
                        <div className="widget-chart-box-1">
                            <div style={divStyle}>
                                <canvas width="80" height="80"></canvas>
                                <input 
                                    data-plugin="knob" 
                                    data-width="80" 
                                    data-height="80" 
                                    data-fgcolor="#f05050 " 
                                    data-bgcolor="#F9B9B9" 
                                    value={this.props.number} 
                                    data-skin="tron" 
                                    data-angleoffset="180" 
                                    data-readonly="true" 
                                    data-thickness=".15" 
                                    readonly="readonly" 
                                    style={inputSyle} />
                            </div>
                        </div>

                        <div className="widget-detail-1">
                            <h2 className="p-t-10 mb-0">{this.props.today}</h2>
                            <p className="text-muted m-b-10">Adicionados Hoje</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item