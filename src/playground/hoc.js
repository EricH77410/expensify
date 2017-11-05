import React from 'react'
import reactDOM from 'react-dom'

const Info = (props) => {
    return (<div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>)
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share !</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>You need to sign in first</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

//reactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>,document.getElementById('app'));
reactDOM.render(<AuthInfo isAuth={true} info="There are the details"/>,document.getElementById('app'));