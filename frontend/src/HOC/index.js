import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const WrapperComponent = (WrappedComponent) => {
    const AuthComponent = (props) => {
        useEffect(() => {
            redirect()
        }, [props.authenticated])
        const redirect = () => {
            if(!localStorage.getItem('token') && !props.authenticated  ) {
                props.history.push('/')
            } //else {
            //     props.history.push('/feed')
            // }
        }
        return <WrappedComponent { ...props }/>
    }
    const mapStateToProps = ({ loginReducer: { authenticated } }) => ({
        authenticated
    });
    return connect(mapStateToProps)(AuthComponent) 
}
export default WrapperComponent