import { QuestionType } from "@/types/question";
import styles from "./styles.module.css";
import Link from "next/link";

type QuestionCardProps = {
  data: QuestionType;
  onDelete?: (id: string) => void;
  canDelete?: boolean;
};

const QuestionCard = ({ data, onDelete, canDelete }: QuestionCardProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link href={`/question/${data.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.author}>
            {data.author?.name || "Unknown author"}
          </div>
          <div>{formatDate(data.date)}</div>
        </div>

        <h3>{data.question_text}</h3>

        <div>
          {canDelete ? (
            <button
              className={styles.deleteButton}
              onClick={() => onDelete?.(data.id)}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
