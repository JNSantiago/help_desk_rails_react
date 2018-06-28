import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from './../../auth/authAction'

import userImage from './../../assets/images/users/avatar-1.jpg'

class DropdownProfile extends Component {
    constructor(props) {
        super(props)
        
        this.state = { open: false }
        this.dropDown = this.dropDown.bind(this)
    }

    dropDown(){
        if (this.state.open) {
          this.setState({...this.state, open: false})
        }else{
          this.setState({...this.state, open: true})
        }
    }

    render() {
        return(
            <li className="dropdown notification-list" onClick={this.dropDown} >
                <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="false" aria-expanded="false">
                    <img src={userImage} alt="user" className="rounded-circle" />
                </a>
                {
                this.state.open ? (
                <div className="dropdown-menu dropdown-menu-right profile-dropdown show">
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="ti-user m-r-5"></i> Profile
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="ti-settings m-r-5"></i> Settings
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="ti-lock m-r-5"></i> Lock screen
                    </a>
                    <a href="javascript:void(0);" onClick={this.props.logout} className="dropdown-item notify-item">
                        <i className="ti-power-off m-r-5"></i> Logout
                    </a>

                </div>) : ""
                }
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(null, mapDispatchToProps)(DropdownProfile);