import { QuestionType } from "@/types/question";
import styles from "./styles.module.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import Spinner from "../Spinner/Spinner";

type QuestionsWrapperProps = {
  data: QuestionType[] | null;
};

const QuestionsWrapper = ({ data }: QuestionsWrapperProps) => {
  return (
    <div className={styles.cardsWrapper}>
      {data ? (
        data.map((d) => {
          return <QuestionCard key={d.id} data={d} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default QuestionsWrapper;
