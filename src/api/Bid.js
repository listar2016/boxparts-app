import axios from "../boot/axios";

export const namespaced = true

const endpoints = {
  base: "",
  list: "",
  create: ""
}

export const actions = {
  List(pid) {
    return axios
      .post(endpoints.base+endpoints.list, { Product: pid })
      .then(response => {
        return response
      })
      .catch(e => {
        return e
      })
  },
  Create(pid) {
    return axios
      .post(endpoints.base+endpoints.create, { Product: pid })
      .then(response => {
        return response
      })
      .catch(e => {
        return e
      })
  }
};