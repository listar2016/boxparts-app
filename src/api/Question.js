import axios from "../boot/axios";
export const namespaced = true

const endpoints = {
  base: "",
  create: "",
  delete: "",
  answer: ""
}

export const actions = {
  Create(pid, question) {
    return axios
      .post(endpoints.base+endpoints.create, { Product: pid, Question: question })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e
      });
  },
  Delete(qid) {
    return axios
      .post(endpoints.base+endpoints.delete, { Product: qid })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e
      });
  },
  Answer(qid, answer) {
    return axios
      .post(endpoints.base+endpoints.answer, { Product: qid, Answer: answer })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e
      });
  },
};