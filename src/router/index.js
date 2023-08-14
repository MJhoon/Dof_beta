import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import AddGoogleMap from "../components/AddGoogleMap.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/login/:userid",
    name: "AddGoogleMap",
    component: 
      AddGoogleMap,
  },
  {

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
