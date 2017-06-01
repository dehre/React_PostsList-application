import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions/index";

class PostsShow extends Component {
  componentWillMount(){
    const {fetchPost,match} = this.props;
    this.props.fetchPost(match.params.id);
  }
  render(){
    const id = this.props.match.params.id;
    let {title,categories,content} = this.props.post[id] || {};
    return(
      <div>
        <h1>{title}</h1>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    post: state.posts
  }
}

export default connect(mapStateToProps,{fetchPost})(PostsShow);
