import axios from "axios";
//import env from '../../config/helpers/env'
import { LocalStorage, SessionStorage } from "quasar";

export default ({ app, Vue }) => {
  Vue.prototype.$axios = axios;

  //let url = env('API_URL')
  axios.defaults.baseURL = "https://dadosabertos.camara.leg.br/api/v2/";
  axios.defaults.timeout = 15000;

  axios.interceptors.response.use(undefined, err => {
    let res = err.response;
    if (res.status === 401) {
      app.router.replace({ name: "login" });
      LocalStorage.remove("access_token");
    }
  });
};
