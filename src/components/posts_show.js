import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPost,deletePost} from "../actions/index";

class PostsShow extends Component {
  onButtonClick(){
    console.log(this.props);
    const {deletePost,match,history} = this.props;
    deletePost(
      match.params.id,
      ()=>{
        history.push("/");
      }
    );
  }
  componentWillMount(){
    const {fetchPost,match} = this.props;
    this.props.fetchPost(match.params.id);
  }
  render(){
    const id = this.props.match.params.id;
    let {title,categories,content} = this.props.post[id] || {};
    return(
      <div className="jumbotron">
        <h1>{title}</h1>
        <h6>{categories}</h6>
        <p>{content}</p>
        <p>
          <Link className="btn btn-primary btn-lg" to="/">Back</Link>
        </p>
        <p>
          <button
            onClick={this.onButtonClick.bind(this)}
            className="btn btn-danger btn-lg">Delete</button>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    post: state.posts
  }
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
