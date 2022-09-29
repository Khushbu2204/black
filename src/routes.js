import Dashboard from "views/admin/Dashboard.js";

import Map from "views/admin/Map.js";
import Notifications from "views/admin/Notifications.js";
// import Rtl from "views/Rtl.js";
import Tables from "views/admin/ClubHistory";

import UserProfile from "views/Pages/UserProfile.js";
import UserRegisterations from "views/Pages/Reg.js";
import Eventhistory from "views/admin/EventHistory";
import Resetpass from "views/Pages/Resetpass";
import ClubList from "views/ClubList";
import EventList from "views/EventList";
import ClubRegistration from "views/ClubRegister";
import EventRegistration from "views/EventRegister";
import EmployeeList from "views/EmployeeList";
import AddEmployee from "views/AddEmployees";
import UpdateEmployee from "views/UpdateEmployee";

//Empolyee Module Definition
import EmpDashboard from "views/employee/Dashboard.js";
import EmpEventhistory from "views/employee/EventHistory";
import EmpClubhistory from "views/employee/ClubHistory";
import EmpEvent from "views/employee/EventList";
import EmpClubList from "views/employee/ClubList";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
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
    path: "/club-history",
    name: "Club History",
    icon: "tim-icons icon-align-cent",
    component: Tables,
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
    layout: "/admin"
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    icon: "tim-icons icon-align-center",
    component: Resetpass,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: EmpDashboard,
    layout: "/employee"
  },
  {
    path: "/event-history",
    name: "Event History",
    icon: "tim-icons icon-align-center",
    component: EmpEventhistory,
    layout: "/employee"
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
