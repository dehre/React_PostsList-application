import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
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
    this.props.history.push("/");
  }

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
      </div>
    )
  }

  render(){
    return(
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}/>
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}/>
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}/>
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  
  return errors;
}

export default reduxForm({
  validate: validate
  form: "PostsNewForm"
})(PostsNew);
