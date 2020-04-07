import axios from "axios";
import Product from "components/Product";

axios.defaults.baseURL = "http://api.pandoratoolbox.com:2228";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    throw new Error(
      error.response && error.response.data ? error.response.data : error
    );
  }
);

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
  Vue.component('Product', Product);
};
