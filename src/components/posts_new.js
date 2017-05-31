import React, {Component} from "react";

export default class PostsNew extends Component {
  render(){
    return(
      <div>

        <form className="pt-5">
          <div className="form-group">
            <label>Title</label>
            <input type="email" className="form-control"aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Categories</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="ml-4 btn btn-primary">Cancel</button>
        </form>
      </div>
    );
  }
}
