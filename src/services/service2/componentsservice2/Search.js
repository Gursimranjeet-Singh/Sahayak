import React,{Component} from "react";
export default class Search extends Component{
    render(){
        return(
            <>
            <div
          className="search"
          style={{ display: "flex", alignItems: "center", width: "90%" }}
        >
          <i className="fa fa-search" />
          <input type="text" placeholder="Search Here" />
          <button type="submit">Search</button>
        </div>
          </>
        );
    }
}