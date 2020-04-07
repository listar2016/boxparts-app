export const namespaced = true;

export const state = {
  user: {
    id: "0",
    username: "owner",
    firstName: "The",
    secondName: "Owner"
  },
  isAuthenticated: !!localStorage.token,
  token: ""
};

export const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  user(state) {
    return state.user;
  }
};

export const mutations = {
  UPDATE_TOKEN(state, payload) {
    state.token = payload.token;
    state.isAuthenticated = true;
  },
  UPDATE_USER(state, payload) {
    state.user = payload.user;
  },
  RESET_STATE(state) {
    state.token = null;
    state.isAuthenticated = false;
  }
};

export const actions = {
  TestLogin({ commit }) {
    localStorage.setItem("token", "fake_token");
    commit("UPDATE_TOKEN", { token: "fake_token" });
    commit("UPDATE_USER", {
      user: {
        id: "0",
        username: "owner",
        firstName: "The",
        secondName: "Owner"
      }
    });
    //window.location.reload();
  },
  Login({ commit }, user) {
    this.$axios
      .post("/api/login", { username: user.username, password: user.password })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        commit("UPDATE_TOKEN", response.data.token);
        commit("UPDATE_USER", response.data.user);
        this.$axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      });
  },
  Logout({ commit }) {
    localStorage.removeItem("token");
    commit("RESET_STATE");
  }
};
