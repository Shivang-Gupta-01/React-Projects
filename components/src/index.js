import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail' // now this file is connected to this index file
import ApprovalCard from './ApprovalCard'
const App = ()=>{

    /*return(
        <div className="ui contianer comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                    </a>
            <div className="content">
            <a href="/" className="author">
            Sam
            </a>
            <div className="metadata">
             <span className="date">Today at 6:00 pm</span>
            </div>
             <div className="text">Nice Blog Post!</div>
            </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                    </a>
            <div className="content">
            <a href="/" className="author">
            Sam
            </a>
            <div className="metadata">
             <span className="date">Today at 6:00 pm</span>
            </div>
             <div className="text">Nice Blog Post!</div>
            </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                    </a>
            <div className="content">
            <a href="/" className="author">
            Sam
            </a>
            <div className="metadata">
             <span className="date">Today at 6:00 pm</span>
            </div>
             <div className="text">Nice Blog Post!</div>
            </div>
            </div>

        </div>
    )*/

    // this shows how we can use component reuability
    return(
        <div className="ui contianer comments">
       <ApprovalCard>
           <div>
               <h4>Warning!</h4>
           Are You sure you want to do this?
           </div>
       </ApprovalCard>  


        <ApprovalCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        text="Nice Blog Post!" 
        image ={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
        author ="Alex" 
        timeAgo="Today at 2:00Am" 
        text="Awesome" 
        image ={faker.image.avatar()}/>
        </ApprovalCard> 
        <ApprovalCard>
        <CommentDetail 
        author ="Jane" 
        timeAgo="Yesterday at 5:00PM" 
        text="Good  Stuff Brother!"
         image ={faker.image.avatar()}/>
        </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>,document.querySelector('#root'))

