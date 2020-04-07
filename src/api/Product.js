import axios from "../boot/axios";

const endpoints = {
  base: "",
  search: "",
  get: "",
  delete: "",
  create: ""
}

export const namespaced = true;

export const actions = {
  Search(payload) {
    return axios
      .post(endpoints.base+endpoints.search, { Query: payload.query, Limit: payload.limit, Featured: payload.featured })
      .then(response => {
        return response.data
      })
      .catch(e => {
        throw e
      })
  },
  Get(pid) {
    return axios
      .post(endpoints.base+endpoints.get, { Post: pid })
      .then(response => {
        return response
      })
      .catch(e => {
        return e
      })
  },
  Create(post) {
    return axios
      .post(endpoints.base+endpoints.create, { Post: post })
      .then(response => {
        return response
      })
      .catch(e => {
        return e
      })
  },
  Delete(pid) {
    return axios
      .post(endpoints.base+endpoints.delete, { Post: pid })
      .then(response => {
        return response
      })
      .catch(e => {
        return e
      })
  }
};
