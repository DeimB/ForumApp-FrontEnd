import PageTemplate from "@/components/PageTemplate/PageTemplate";
import AskQuestionForm from "@/components/AskQuestionForm/AskQuestionForm";
import { createQuestion } from "@/api/questions";
import cookies from "js-cookie";
import { userTokenKey } from "@/constants/user";
import { useRouter } from "next/router";

const AskQuestion = () => {
  const router = useRouter();

  const handleSubmit = async (text: string) => {
    try {
      const token = cookies.get(userTokenKey);

      if (!token) {
        router.push("/login");
        return;
      }

      await createQuestion(token, text);

      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PageTemplate>
      <AskQuestionForm onSubmit={handleSubmit} />
    </PageTemplate>
  );
};

export default AskQuestion;
