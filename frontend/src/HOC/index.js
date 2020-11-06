import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const WrapperComponent = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const { authenticated, history, location } = props;
        
        useEffect(() => {
            const redirect = () => {
                const path = location.pathname;
                if (localStorage.getItem('token') && authenticated) history.push(path);
                else history.push('/');
            };
            redirect()
        }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps

        return <WrappedComponent { ...props }/>
    }
    const mapStateToProps = ({ loginReducer: { authenticated } }) => ({
        authenticated
    });
    return connect(mapStateToProps)(AuthComponent) 
}
export default WrapperComponent