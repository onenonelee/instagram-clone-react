import React from "react";
import { Button } from "@material-ui/core";
import "../styles/Post.css";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__avatar"
          alt={username}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidigitalcitizen.files.wordpress.com%2F2010%2F04%2Fjake-sully-avatar2.jpg&f=1&nofb=1"
        />
        <div className="post__info">
          <div className="userName">{username}</div>
          <div className="post__region">region</div>
        </div>

        <div className="post__modal">modal</div>
        {/* 사용자이름 */}
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <div className="post__buttons"></div>
      <div className="post__likes"></div>
      <div className="post__captionWrap">
        <div className="userName">{username}</div>
        <div className="post__caption">{caption}</div>
      </div>

      <div className="post__comments"></div>
      <div className="write__comments">
        <input className="post__coInput" />
        <Button>게시</Button>
      </div>
    </div>
  );
}

export default Post;
