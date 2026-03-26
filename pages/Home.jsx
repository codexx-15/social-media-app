import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Social Feed</h1>
      {posts.map(p => (
        <div key={p._id}>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
