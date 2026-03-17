import cookies from "js-cookie";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { QuestionType } from "@/types/question";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { userTokenKey } from "@/constants/user";
import { deleteQuestionById, getQuestionById } from "@/api/questions";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner/Spinner";
import {
  getAnswersByQuestionId,
  likeAnswer,
  dislikeAnswer,
  deleteAnswer,
} from "@/api/answers";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import AnswerForm from "@/components/AnswerForm/AnswerForm";
import { AnswerType } from "@/types/answer";

const Question = () => {
  const router = useRouter();

  const [question, setQuestion] = useState<QuestionType | null>(null);

  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const fetchQuestion = async (id: string) => {
    try {
      //   const token = cookies.get(userTokenKey);

      const response = await getQuestionById(id);

      console.log("response", response);

      setQuestion(response?.data.question);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAnswers = async (id: string) => {
    const data = await getAnswersByQuestionId(id);
    setAnswers(data);
  };

  const like = async (id: string) => {
    try {
      const token = cookies.get(userTokenKey);

      await likeAnswer(token!, id);
      fetchAnswers(router.query.id as string);
    } catch (err) {
      console.log(err);
    }
  };

  const dislike = async (id: string) => {
    try {
      const token = cookies.get(userTokenKey);

      await dislikeAnswer(token!, id);
      fetchAnswers(router.query.id as string);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAnswerHandler = async (id: string) => {
    try {
      const token = cookies.get(userTokenKey);

      await deleteAnswer(token!, id);
      fetchAnswers(router.query.id as string);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchQuestion(router.query.id as string);
      fetchAnswers(router.query.id as string);
    }
  }, [router.query.id]);

  const deleteQuestion = async (id: string) => {
    try {
      const token = cookies.get(userTokenKey);

      const response = await deleteQuestionById(token!, id);

      if (response?.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const backToPreviousPage = () => {
    router.back();

    // router.push("/");
  };

  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        {question ? (
          <div className={styles.content}>
            <QuestionCard data={question} />
            <div className={styles.buttonsWrapper}>
              <button
                className={styles.backButton}
                type="button"
                onClick={() => backToPreviousPage()}
              >
                {" "}
                ← Back
              </button>

              <div className={styles.deleteButtonWrapper}>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteQuestion(question?.id || "")}
                >
                  Delete
                </button>
              </div>
            </div>

            <div>
              <h3>Answers</h3>
              {answers.map((a) => (
                <AnswerCard
                  key={a.id}
                  data={a}
                  onLike={like}
                  onDislike={dislike}
                  onDelete={deleteAnswerHandler}
                />
              ))}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </PageTemplate>
  );
};

export default Question;
