import CommentList from "./Comment";
import styles from "./Сomment.module.css";
import arrowLeft from "./Image/arrowLeft.svg";
import arrowRight from "./Image/arrowRight.svg";
import { useEffect, useState } from "react";
const CommentSector = () => {
  const [commentId, setCommentId] = useState(0);
  const [comment, setComment] = useState(CommentList.slice(0, 2));
  useEffect(() => {
    setComment(CommentList.slice(commentId, commentId + 2));
  }, [commentId]);
  const handleCommentNext = () => {
    if (commentId + 2 < CommentList.length) {
      setCommentId((prev) => prev + 1);
    }
  };
  const handleCommentPrev = () => {
    if (commentId - 1 >= 0) {
      setCommentId((prev) => prev - 1);
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
            <div className={styles.div_comment_block} key={comment.id}>
              <p>{comment.text}</p>
              <p>{comment.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleCommentNext}
          disabled={commentId + 2 >= CommentList.length}
        >
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
};
export default CommentSector;
