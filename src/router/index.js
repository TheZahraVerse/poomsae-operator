import { createRouter, createWebHistory } from "vue-router"
import rtdsRoutes from "./rtdsRoutes"
// import operatorRoutes from "./operator.routes"

const routes = [
  rtdsRoutes,
  // operatorRoutes,
  {
    path: "/",
    redirect: "/rtds/standby",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router