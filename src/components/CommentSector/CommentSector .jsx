import CommentList from "./Comment";
import styles from "./Сomment.module.css";
import arrowLeft from "./Image/arrowLeft.svg";
import arrowRight from "./Image/arrowRight.svg";
import { useState } from "react";
// import quotes from "./Image/quotes.svg";
const CommentSector = () => {
  const [commentId, setCommentId] = useState(0);
  const [comment, setComment] = useState(CommentList.slice(0, 2));

  const handleCommentNext = () => {
    if (commentId !== CommentList.length - 1) {
      setCommentId(() => commentId + 1);
      setComment(CommentList.slice(commentId, commentId + 2));
    }
  };
  const handleCommentPrev = () => {
    if (commentId !== 0) {
      setCommentId(() => commentId - 1);
      if (commentId > 2) {
        setComment(() => CommentList.slice(commentId, commentId - 2));
      }
    }
  };
  return (
    <div className={styles.div_container}>
      <p>Отзывы</p>
      <div className={styles.div_container_comment}>
        <button onClick={handleCommentPrev} disabled={commentId === 0}>
          <img src={arrowLeft} />
        </button>

        <div className={styles.div_comment}>
          {comment.map((comment) => (
            <div className={styles.div_comment_block} key={comment.name}>
              <p>{comment.text}</p>

              <p>{comment.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleCommentNext}>
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
};
export default CommentSector;
