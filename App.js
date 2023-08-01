import "./App.css";

import NewPost from "./NewPost";
import Comment from "./Comment";

import { useState, useEffect } from "react";

function App() {
  //calls new post and renders initial comments
  //new post allows parent comment aka post
  //comment objects have name, body, array of replies as props
  //array of replies holds every comment that replies to the parent comment this is where recursion comes in

  const [comments, setComments] = useState([]); //only holds parent comments

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const addReplies = (reply) => {}; //supposed to do nothing on first run

  return (
    <div className="App">
      <header className="App-header">
        <div className="newPostHeader">New Post</div>
        <NewPost addComment={addComment} first={true}></NewPost>
        <div className="commentContainer">
          {comments.map((comment) => (
            <Comment
              addComment={addReplies}
              comment={comment}
              depth={1}
            ></Comment>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
