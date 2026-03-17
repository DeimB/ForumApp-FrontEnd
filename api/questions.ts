import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

// export const getAllQuestions = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/questions`);
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getAllQuestions = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/questions`);
  return data;
};

export const getQuestionById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions/${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestionById = async (token: string, id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/questions/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return response;
};

export const createQuestion = async (token: string, question_text: string) => {
  const { data } = await axios.post(
    `${API_BASE_URL}/questions`,
    { question_text },
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return data;
};
