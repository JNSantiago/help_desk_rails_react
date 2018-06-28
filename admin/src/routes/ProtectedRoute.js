import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    render() {
      const { component: Component, user, ...props } = this.props
      
      return (
        <Route 
          {...props} 
          render={props => (
            user != null ?
              <Component {...props} /> :
              <Redirect to='/login' />
          )} 
        />
      )
    }
  }

const mapStateToProps = store => ({ user: store.auth.user })

export default connect(mapStateToProps, null)(ProtectedRoute)