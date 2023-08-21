import { createRouter, createWebHistory } from "vue-router";
import Read from "./components/readCountries.vue";
import Show from "./components/showCoutnry.vue";
const routes = [
  {
    path: "/",
    name: "rest-countries",
    component: Read,
    children: [
      {
        path: "/country",
        name: "show-country",
        component: Show,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
