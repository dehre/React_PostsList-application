import React, {Component} from "react";
import {connect} from "react-redux";
import {addPost} from "../actions/index";

class PostsNew extends Component {

  onFormSubmit = (event)=>{
    event.preventDefault();
    const newPost = {
      title: this.refs.title.value,
      categories: this.refs.categories.value,
      content: this.refs.contents.value
    };
    this.props.addPost(newPost);
  }

  render(){
    return(
      <div>

        <form
          onSubmit={this.onFormSubmit}
          className="pt-5">
          <div className="form-group">
            <label>Title</label>
            <input
              ref="title"
              type="text"
              className="form-control"
              aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input
              ref="categories"
              type="text"
              className="form-control"/>
          </div>
          <div className="form-group">
            <label>Contents</label>
            <textarea
              ref="contents"
              className="form-control"
              rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="ml-4 btn btn-primary">Cancel</button>
        </form>
      </div>
    );
  }
}

export default connect(null,{addPost:addPost})(PostsNew);
