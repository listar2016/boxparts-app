import axios from "axios";
export const namespaced = true;

const data = {
  mapKey: "AIzaSyAUpQORzlbxV0E_1_yRfa7wZDY3AHBIONA",
  mapEndpoint: "https://maps.googleapis.com/maps/api"
};

export const state = {
  location: JSON.parse(localStorage.getItem("location")) || null,
  address: localStorage.getItem("address") || null
};

export const mutations = {
  UPDATE_LOCATION(state, payload) {
    state.location = { lat: payload.lat, lon: payload.lon };
  },
  UPDATE_ADDRESS(state, payload) {
    state.address = payload.address;
  }
};

export const getters = {
  address(state) {
    return state.address;
  },
  location(state) {
    return state.location;
  }
};

export const actions = {
  checkGeo({ commit, state }) {
    if (!state.location) {
      if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(function success(position) {
          // for when getting location is a success
          commit("UPDATE_LOCATION", {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          localStorage.setItem(
            "location",
            JSON.stringify({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            })
          );
          fetch(
            data.mapEndpoint +
              "/geocode/json?latlng=" +
              position.coords.latitude +
              "," +
              position.coords.longitude +
              "&key=" +
              data.mapKey
          )
            .then(response => {
              response
                .json()
                .then(data => {
                  commit("UPDATE_ADDRESS", {
                    address: data.results[0].formatted_address
                  });
                  localStorage.setItem(
                    "address",
                    data.results[0].formatted_address
                  );
                })
                .catch(e => {
                  throw e;
                });
            })
            .catch(e => {
              throw e;
            });
        });
      }
    }
  },
  apiGeocode(lat, lon) {
    return (
      data.mapEndpoint +
      "/geocode/json?latlng=%s" +
      lat +
      "," +
      lon +
      "&key=" +
      data.mapKey
    );
  },
  apiReverseGeocode(geo) {
    return (
      data.mapEndpoint +
      "/geocode/json?address=%s" +
      encodeURI(geo) +
      "&key=" +
      data.mapKey
    );
  },
  ReverseGeocode(lat, lon) {
    axios
      .get(
        data.mapEndpoint +
          "/geocode/json?latlng=" +
          lat +
          "," +
          lon +
          "&key=" +
          data.mapKey
      )
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e;
      });
  },
  Geocode(geo) {
    axios
      .get(this.apiReverseGeocode(geo))
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e;
      });
  },
  GetLocation() {
    let loc = { lon: "", lat: "" };
    localStorage.location = loc;
  }
};
