import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  onSubmit: (text: string) => void;
};

const AskQuestionForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        placeholder="Ask your question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={submit} className={styles.submitButton}>
        Ask Question
      </button>
    </div>
  );
};

export default AskQuestionForm;
