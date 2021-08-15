import Login from "../views/login.vue";
import About from "../views/about.vue";
import Project from "../views/project.vue";
import badRoute from "../components/badRoute.vue";

export default [
  {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/project/:id",
    name: "PROJECT",
    component: Project,
    props: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/*", // should be last, otherwise matches everything
    component: badRoute,
    name: "NOT FOUND",
  },
];
