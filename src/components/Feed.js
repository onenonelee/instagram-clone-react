import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "../styles/Feed.css";
import Post from "./Post";
import { db } from "./Firebase";

function Feed({ key, username, caption, imageUrl }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //this is where the code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added, this code fires...
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app__contents">
      <div className="feed">
        <div className="contents__stories">
          <ul className="stories">
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />

                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
            <li>
              <a className="story" href="/">
                <center>
                  <img
                    className="story__pic"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
                  />
                  <div>username</div>
                </center>
              </a>
            </li>
          </ul>
          {/* 스토리 */}
        </div>
        {/* 포스트 */}
        {posts.map(({ id, post }) => (
          <Post
            //when it has id, only new posts are updated
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
