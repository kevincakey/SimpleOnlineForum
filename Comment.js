import Score from "./Score";
import NewPost from "./NewPost";
import "./Comment.css";
import { useState, useEffect } from "react";

export function Comment({ addComment, comment, depth }) {
  const [replies, setReplies] = useState([]);
  const [showForm, setShowForm] = useState(false); //use depth to manipulate which forms disappear

  const addReplies = (reply) => {
    console.log("reply.depth");
    console.log(reply.body);
    let preReply = "@ " + comment.name + " ";
    reply.body = preReply.concat(reply.body);
    // reply.depth += 1;
    // console.log("reply.depth after increment");
    //console.log(reply);
    setReplies([...replies, reply]);
  };

  function handleClick() {
    setShowForm(!showForm);
    // setReplies(addReplies);
    //addReplies();//fill with comment object but a reply
    console.log("in reply");
  }
  if (depth === 0 || depth > 3) {
    return null;
  }
  return (
    <div className="post" key={comment.id}>
      <div className="postHeader">{comment.name}</div>
      <div className="postBody">{comment.body}</div>
      <Score />
      <div className="commentContainer">
        {replies.map((reply) => (
          <Comment
            addComment={addReplies}
            comment={reply}
            depth={depth + 1}
          ></Comment>
        ))}
      </div>
      {showForm && <NewPost addComment={addReplies} first={false}></NewPost>}
      <button className="reply" onClick={handleClick}>
        Reply
      </button>
    </div>
  ); //display comment then map all replies to this comment comments.replies.map same map as app.js with recursion
  //uses newpost in this js file
  //actual replies will be added in this function
  //when rendering replies as comment components within comment, the function we are passing them dont matter as long as we can handle
  //within comment.js the helper function is useful within newpost
  //comment a, reply, in code for comment a new post shows up, type in new name: comment b, submit on comment b starts using new post , calls sending new comment from within comment a
}

export default Comment;
