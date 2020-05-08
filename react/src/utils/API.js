import axios from "axios";

const BASEURL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=";
// const LIMIT = "&limit=100"

// Export an object with a "search" method that searches the Met API for
// the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
