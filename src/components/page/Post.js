import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const post = this.props.post;
    console.log("Inside post and got", post);

    return (
      <div className="Post">
        <h1>
          {post.title.rendered}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.posts[props.postId]
});

export default connect(mapStateToProps)(Post);
