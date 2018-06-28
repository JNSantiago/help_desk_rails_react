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
            <div class="col-xl-3 col-md-6">
                <div class="card-box">
                    <div class="dropdown pull-right">
                        <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                            <i class="mdi mdi-dots-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" class="dropdown-item">Action</a>
                            <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                            <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                            <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                        </div>
                    </div>

                    <h4 class="header-title mt-0 m-b-30">Total Revenue</h4>

                    <div class="widget-chart-1">
                        <div class="widget-chart-box-1">
                            <div style={divStyle}>
                            <canvas width="80" height="80"></canvas>
                            <input data-plugin="knob" data-width="80" data-height="80" data-fgcolor="#f05050 " data-bgcolor="#F9B9B9" value="58" data-skin="tron" data-angleoffset="180" data-readonly="true" data-thickness=".15" readonly="readonly" style={inputSyle} /></div>
                        </div>

                        <div class="widget-detail-1">
                            <h2 class="p-t-10 mb-0"> 256 </h2>
                            <p class="text-muted m-b-10">Revenue today</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item