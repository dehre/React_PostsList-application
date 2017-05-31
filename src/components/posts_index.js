import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPosts} from "../actions";
import _ from "lodash";

class PostsIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts,function(post){
      return (
        <li
          key={post.id}
          className="list-group-item">
          {post.title}
        </li>
      )
    });
  }
  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostsIndex);
