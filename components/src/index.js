import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from'./CommentDetail'; //automatically interprets  for js and so no need to put .js
// with this opening and closing tag of a component and inserting another component,the inserted component is included in props and can be accessed as props.children

const App = () => 
{
  return (
    <div className="ui container comments">
    <ApprovalCard> 
        <CommentDetail 
            author="Karthik" 
            timeago="Today at 1:33 pm" 
            mycomment="Hi ! peeps"
            avatar={faker.image.avatar()}
            />
    </ApprovalCard>


    <ApprovalCard> 
        <CommentDetail 
            author="Ritik" 
            timeago="Today at 2:13 pm" 
            mycomment="Hello ! fraannds"
            avatar={faker.image.avatar()}
            />
    </ApprovalCard>


    <ApprovalCard> 
        <CommentDetail 
            author="Manas" 
            timeago="Today at 5:53 pm" 
            mycomment="Hola ! guys"
            avatar={faker.image.avatar()}
            />
    </ApprovalCard>


    <ApprovalCard>
        <div>
            <h4>Warning! Explicit content</h4>
        </div>
    </ApprovalCard>

    </div>

  );
}

ReactDOM.render(<App/>,document.querySelector('#root'));
