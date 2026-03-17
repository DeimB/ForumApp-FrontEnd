import cookie from "js-cookie";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import QuestionsWrapper from "@/components/QuestionsWrapper/QuestionsWrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userTokenKey } from "@/constants/user";
import { getAllQuestions } from "@/api/questions";
import QuestionsFilter from "@/components/QuestionsFilter/QuestionsFilter";

const Index = () => {
  // const router = useRouter();

  const [questions, setQuestions] = useState(null);

  const fetchQuestions = async () => {
    try {
      // const token = cookie.get(userTokenKey) as string;

      const response = await getAllQuestions();

      setQuestions(response?.data.questions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchQuestions();
  }, []);

  return (
    <PageTemplate>
      <QuestionsFilter onChange={fetchQuestions} />
      <QuestionsWrapper data={questions} />
    </PageTemplate>
  );
};

export default Index;
