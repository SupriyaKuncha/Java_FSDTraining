import React from 'react';
 
function Welcome({loggedIn}){
    if(loggedIn){
        return(
            <>
            <div>
                <p>You are logged in</p>
                <h1>Welcome, </h1>
                <p>Happy to see you gain!</p>
               
            </div>
            </>
        );

    }else{
        return(
            <>
            <div>

                <p>You are logged of</p>
            </div>
            </>
        );

    }
   
}
 
export default Welcome;