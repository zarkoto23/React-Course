import { Component } from "react";
import request from "../../../utils/request";
import CommentItem from "./comment-item/CommentItem";

const commentsUrl = "http://localhost:3030/data/comments";

export default class AdminComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  async componentDidMount() {
    const comments = await request.get(commentsUrl);
    this.setState({ comments });
  }
  
  deleteCommentsHandler(commentId){
    console.log('delete', commentId);

    this.setState({
        comments:this.state.comments.filter(coment=>coment._id!==commentId)
    })
    

  }

  render() {
    return (
      <ul style={{ backgroundColor: "white" }}>
        {this.state.comments.map((com) => (
          <CommentItem key={com._id} 
          comment={com.comment} 
          _id={com._id}
          onDelete={this.deleteCommentsHandler.bind(this)}
          
          />
        ))}
      </ul>
    );
  }
}
