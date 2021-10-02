import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component,  ...rest  }) => {
  const isAuth = localStorage.getItem("persist:root");
  const { isAuthenticated } = JSON.parse(JSON.parse(isAuth).auth);

  return (
   
      <Route
        {...rest}
        render={props => 
          
         isAuthenticated ?(
            <Component {...props} />
        ) : ( 
            <Redirect to={{
                            pathname: '/login', 
                            state: {from: props.location}
                          }}
            />
        )
        }
      />
  
  );
};

export default PrivateRoute;
