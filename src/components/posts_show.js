import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPost,deletePost} from "../actions/index";

class PostsShow extends Component {
  onDeleteClick(){
    console.log(this.props);
    const {deletePost,match,history} = this.props;
    deletePost(
      match.params.id,
      ()=>{
        history.push("/");
      }
    );
  }
  componentDidMount(){
    const {fetchPost,match} = this.props;
    fetchPost(match.params.id);
  }
  render(){
    const {post} = this.props;
    if(!post){
      return(
        <div>Fetching data..</div>
      )
    }
    return(
      <div className="jumbotron">
        <Link to="/">Back to Index</Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
