import "./NewPost.css";
import Comment from "./Comment.js";

import { useState, useEffect } from "react";

export function NewPost({ addComment, first }) {
  // console.log("in new post-----------------------------------------");
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  //const [depth, setDepth] = useState(1); //make state dependent on parent component depth
  const [id, setId] = useState(0);
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setId(id + 1);
    // setDepth(depth + 1);
    const post = { name, body, id };
    // const post = { name, body, id, depth };
    //setDepth(depth + 1);
    addComment(post);
    //posts.push(post);
    setName("");
    setBody("");
    // console.log("post");
    console.log(post);
    if (first) {
      setShowForm(true);
    } else {
      setShowForm(!showForm);
    }
  }
  // if (props.depth === 0) {
  //   return null;
  // }
  return (
    <>
      {showForm && (
        <form method="post" onSubmit={handleSubmit}>
          <input
            className="inputName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
          />
          <input
            className="inputPostText"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write a new post..."
          />
          <button id="submitButton">Submit</button>
        </form>
      )}
    </>
  );
}

export default NewPost;
