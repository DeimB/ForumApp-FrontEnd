type Props = {
  onChange: (filter: string) => void;
};

const QuestionsFilter = ({ onChange }: Props) => {
  return (
    <div>
      <button onClick={() => onChange("")}>All</button>
      <button onClick={() => onChange("answered")}>Answered</button>
      <button onClick={() => onChange("unanswered")}>Unanswered</button>
    </div>
  );
};

export default QuestionsFilter;
