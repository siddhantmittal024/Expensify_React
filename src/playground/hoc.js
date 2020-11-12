// Higher Order Component(HOC) - A component (hoc) that renders another component
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract State
import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return(props) =>(
        <div>
          { props.isAdmin && <p>This info is private. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
 return(props) => (
     <div>
         {props.isAuthenticated ? (
             <WrappedComponent {...props}/>
         ): (
             <p>Please Login to view Info!</p>
         )}
     </div>
 );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={false} info="This is the info!!"/>,document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="info!"/>,document.getElementById('app'));
 