export type AuthorType = {
  id: string;
  name: string;
  email: string;
};

export type QuestionType = {
  id: string;
  question_text: string;
  date?: string;
  userId: string;
  author?: AuthorType | null;
};
