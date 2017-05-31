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
    const postsList = _.mapValues(this.props.posts,function(item){
      console.log("Item to loop in is",item);
      return(
        <li>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <a href="/">{item.content}</a>
        </li>
      )
    });
    console.log(postsList);
  }
  render(){
    return(
      <div>
        POsts Index
        <ul>
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
