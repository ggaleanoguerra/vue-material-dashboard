import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Actividades from "@/pages/actividades.vue"
import creditos from "@/pages/creditos.vue"
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Notifications from "@/pages/Notifications.vue";



const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "Actividades",
        component: Actividades,
      },
      {
        path: "icons",
        name: "Creditos",
        component: creditos
      },
      {
        path: "table",
        name: "Evaluación",
        component: TableList,
      },
      {
        path: "typography",
        name: "Material extra",
        component: Typography,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },

    ],
  },
];

export default routes;
