//protected routes
import React, { PropTypes } from 'react';  
import { connect } from 'react-redux';  
import { toggleShow, authenticated } from "../redux/actions/actions"

export default function (ComposedComponent) {  
  class WithAuth extends React.Component {
 
    componentDidUpdate(prevProps) {
      if(prevProps.isAuthenticated !== this.props.isAuthenticated){
        if (!this.props.isAuthenticated) {
          this.props.history.push('/')
        }
      }
    }

   
    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
      isAuthenticated: state.user.isAuthenticated
    })
  
  const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch(toggleShow()),
  })
  
 
return connect(
    mapStateToProps, 
    mapDispatchToProps
  )(WithAuth);
}
