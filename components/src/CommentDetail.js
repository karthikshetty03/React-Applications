import React from 'react';

const CommentDetail =props=> {                      //props is a js object that is passed in the parent and make use of it in the child component
                                                    //props are key value pairs
    return (
         <div className="comment">
             <a href="/" className="avatar">
              <img alt="avatar"  src={props.avatar}/>
             </a>
             <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeago}</span>
                </div>
                <div className="text">{props.mycomment}</div>
             </div>

         </div>

    );

}

export default CommentDetail;
