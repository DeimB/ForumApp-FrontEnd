import styles from "./styles.module.css";
import { AnswerType } from "@/types/answer";

type Props = {
  data: AnswerType;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onDelete?: (id: string) => void;
};

const AnswerCard = ({ data, onLike, onDislike, onDelete }: Props) => {
  return (
    <div className={styles.card}>
      <p>{data.answer_text}</p>

      <div className={styles.actions}>
        <button onClick={() => onLike(data.id)}>👍 {data.likes.length}</button>

        <button onClick={() => onDislike(data.id)}>
          👎 {data.dislikes.length}
        </button>

        {onDelete && <button onClick={() => onDelete(data.id)}>Delete</button>}
      </div>
    </div>
  );
};

export default AnswerCard;
