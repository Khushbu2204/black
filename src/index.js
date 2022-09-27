import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import EmployeeLayout from "layouts/Employee/Employee";
import SuperAdminLayout from "layouts/SuperAdmin/SuperAdmin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import PrivateRoute from "utils/PrivateRoute";
import Login from "views/Pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          {/* <PrivateRoute
            path="/admin"
            render={(props) => <AdminLayout {...props} />}
          /> */}
          <Route
            render={(props) =>
              localStorage.getItem("user") ? (
                // <AdminLayout {...props} />
                <EmployeeLayout {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          {/* <Redirect from="/" to="/admin" /> */}
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
