import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { requestPost } from "./../Actions";
import Post from "./page/Post";

class PostFetcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null
    };
  }

  getSlug = pathname => {
    const path = pathname.slice(0, -1);
    const lastIndex = path.lastIndexOf("/");
    return path.slice(lastIndex + 1);
  };

  getPost = props => {
    const slug = this.getSlug(props.location.pathname);
    this.props.onRequestPost(slug).then(id => {
      this.setState({ loading: false, id });
    });
  };

  componentWillMount() {
    this.getPost(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.getPost(newProps);
    }
  }

  render() {
    const { loading, id } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    return (
      <div className="Post">
        <Post postId={id} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRequestPost: slug => dispatch(requestPost(slug))
});

export default connect(null, mapDispatchToProps)(PostFetcher);
