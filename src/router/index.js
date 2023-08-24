import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login.vue";
import AddGoogleMap from "../components/AddGoogleMap.vue";
import MonthlyReport from "../components/MonthlyReport.vue";
import MonthlyReportWrite from "../components/MonthlyReportWrite.vue";
import MonthlyReportEdit from "../components/MonthlyReportEdit.vue";
import ViewMonthlyReport from "../components/ViewMonthlyReport.vue";
import WorkList from "../components/WorkList.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/login/:userid",
    name: "AddGoogleMap",
    component: AddGoogleMap,
  },
  {
    path: `/login/:userid/worklist`,
    name: "worklist",
    component: WorkList,
  },
  {
    path: `/login/:userid/report`,
    name: "MonthlyReport",
    component: MonthlyReport,
  },
  {
    path: "/login/:userid/report/-1",
    name: "MonthlyReportWrite",
    component: MonthlyReportWrite,
  },
  {
    path: "/login/:userid/report/view/:id",
    name: "ViewMonthlyReport",
    component: ViewMonthlyReport,
  },
  {
    path: "/login/:userid/report/view/:id/edit:id",
    name: "MonthlyReportEdit",
    component: MonthlyReportEdit,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
