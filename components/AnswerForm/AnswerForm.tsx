import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  onSubmit: (text: string) => void;
};

const AnswerForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;

    onSubmit(text);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        placeholder="Write your answer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={submit}>Submit Answer</button>
    </div>
  );
};

export default AnswerForm;
