import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
import Tables from "views/ClubHistory";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import UserRegisterations from "views/Pages/Reg.js";
import Eventhistory from "views/EventHistory";
import Resetpass from "views/Pages/Resetpass";
import ClubList from "views/ClubList";
import EventList from "views/EventList";
import ClubRegistration from "views/ClubRegister";
import EventRegistration from "views/EventRegister";
import EmployeeList from "views/EmployeeList";
import AddEmployee from "views/AddEmployees";
import UpdateEmployee from "views/UpdateEmployee";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/club-history",
    name: "Club History",
    icon: "tim-icons icon-puzzle-10",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/event-history",
    name: "Event History",
    icon: "tim-icons icon-align-center",
    component: Eventhistory,
    layout: "/admin"
  },
  {
    path: "/register",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: UserRegisterations,
    // layout: "/admin"
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    icon: "tim-icons icon-align-center",
    component: Resetpass,
    layout: "/admin"
  },
  {
    path: "/club-list",
    name: "Club List",
    icon: "tim-icons icon-align-center",
    component: ClubList,
    layout: "/admin"
  },
  {
    path: "/event-list",
    name: "event List",
    icon: "tim-icons icon-align-center",
    component: EventList,
    layout: "/admin"
  },
  {
    path: "/club-register",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: ClubRegistration,
    layout: "/admin"
  },
  {
    path: "/event-register",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: EventRegistration,
    layout: "/admin"
  },
  {
    path: "/employees-list",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: EmployeeList,
    layout: "/admin"
  },
  {
    path: "/employees-add",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: AddEmployee,
    layout: "/admin"
  },
  {
    path: "/employees-update",
    // name: "Registration",
    // rtlName: "Registration",
    // icon: "tim-icons icon-badge",
    component: UpdateEmployee,
    layout: "/admin"
  },
];
export default routes;
