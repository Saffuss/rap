import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../store/store";

function Comments() {
  const dispatch = useDispatch();
  const currentImage = useSelector(state => state.popUp.view);
  const commentsStatus = useSelector(state => state.popUp.commentsStatus)
  console.log(currentImage);
  useEffect(() => {
    if (!currentImage.comments) {
      dispatch(fetchComments());
    }
  }, [dispatch, currentImage]);
  
  const comments = currentImage.comments;

      function getCommentsWithReplies(comment, level = 1) {
        const replies = comment.data.replies;

        return (
            <div style={{marginLeft: `${10 * level}px`}}>
                {level === 1 ? <br/> : null}
                <p className="comment">-{comment.data.body}</p>

                {typeof replies === 'object' && replies.data.children.map((reply, index) => (
                    <div className="reply" key={reply.data.id}>
                        {getCommentsWithReplies(reply, level + 1)}
                    </div>
                ))}
            </div>
        )
      }

    if (commentsStatus === 'idle') {
      return <h3>Please refresh the page to load comments.</h3>
    } else if (commentsStatus === 'pending') {
      return <h3>Comments are loading. Please wait...</h3>
    } else if (commentsStatus === 'succeeded') {
        return (
          <div className="comments">
              <h3>Comments</h3>
              {comments && comments.length > 0 ? comments.map(comment => getCommentsWithReplies(comment)) : <p>No comments to display.</p>}
          </div>
      )
    } else {
      return <h3>There was an error while loading. Please refresh the page and try again.</h3>
    }
    
}

export default Comments;