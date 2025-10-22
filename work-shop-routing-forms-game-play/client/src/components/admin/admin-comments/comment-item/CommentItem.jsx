import { Component } from "react";

export default class CommentItem extends Component{

    constructor(props){
        super(props)
        this.deleteClickHandler=this.deleteClickHandler.bind(this)
    }

    async deleteClickHandler(){

       await fetch(`http://localhost:3030/data/comments/${this.props._id}`,{
            method:'DELETE',
            headers:{
                'X-Admin':null ,
            }
        })
        
        this.props.onDelete(this.props._id)
    }


    render(){
        return(

        <li style={{ backgroundColor: "white" }}>
            {this.props.comment} <button onClick={this.deleteClickHandler}>X</button>
        </li>
        )
    }
}