import { createRouter, createWebHistory } from "vue-router";
import ReadParent from "./components/readCountries.vue";
import Read from "./components/readApiCountries.vue";
import Show from "./components/showCoutnry.vue";
const routes = [
  {
    path: "/",
    name: "rest-countries",
    component: ReadParent,
    children: [
        {
            path:"",
            name: "read-api",
            component: Read,
        },
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
