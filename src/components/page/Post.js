import React, { Component } from "react";

class Post extends Component {
  render() {
    console.log(this.props);
    const post = this.props.post;
    console.log(post);

    return (
      <div className="Post">
        <h1>
          {JSON.stringify(post.title)}
        </h1>
      </div>
    );
  }
}

export default Post;
