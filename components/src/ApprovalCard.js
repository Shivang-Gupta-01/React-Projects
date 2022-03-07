import React from 'react';

const ApprovalCard = (props)=>{
    
    //console.log(props);   // gives a children object with a single object as children. So the child compnent inside the component used to wrap it, is a children object of  props
    console.log(props.children); // thiss is the react component itself
    return (
    
        <div className="ui card">
            <div className="content">
               {props.children}  
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">
                   Approve
                  </div>
                  <div className="ui basic red button">
                   Reject
                  </div>
                </div>
            </div>
        </div>
    );

}
export default ApprovalCard;