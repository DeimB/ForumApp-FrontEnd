import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

export const getAnswersByQuestionId = async (id: string) => {
  const { data } = await axios.get(`${API_BASE_URL}/questions/${id}/answers`);
  return data;
};

export const createAnswer = async (
  token: string,
  questionId: string,
  answer_text: string,
) => {
  const { data } = await axios.post(
    `${API_BASE_URL}/questions/${questionId}/answers`,
    { answer_text },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return data;
};

export const deleteAnswer = async (token: string, id: string) => {
  const { data } = await axios.delete(`${API_BASE_URL}/answers/${id}`, {
    headers: { Authorization: token },
  });

  return data;
};

export const likeAnswer = async (token: string, id: string) => {
  const { data } = await axios.post(
    `${API_BASE_URL}/answers/${id}/like`,
    {},
    { headers: { Authorization: token } },
  );

  return data;
};

export const dislikeAnswer = async (token: string, id: string) => {
  const { data } = await axios.post(
    `${API_BASE_URL}/answers/${id}/dislike`,
    {},
    { headers: { Authorization: token } },
  );

  return data;
};
