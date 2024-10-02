import React from "react";
import { useSelector } from "react-redux";

function Comments() {
  /*const currentImage = useSelector(state => state.popUp.view);
  console.log(currentImage);
  const imageObjects = useSelector(state => state.images.items);
  const comments = currentImage.comments;
  console.log(comments);

      function getCommentsWithReplies({ comment, replies = [] }, level = 1) {
        return (
            <div style={{marginLeft: `${level * 20}px`}}>
                {level === 1 ? <br/> : null}
                <p className="comment">-{comment}</p>
                {console.log(comment)}

                {replies.length > 0 && replies.map((reply, index) => (
                    <div className="reply" key={index}>
                        {getCommentsWithReplies(reply, level + 1)}
                    </div>
                ))}
            </div>
        )
      }

    return (
        <div className="comments">
            {<h3>Comments</h3>}
            {comments.map(comment => getCommentsWithReplies(comment))}
        </div>
    )*/
}

export default Comments;