/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Switch, Redirect, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import Changepassword from "../pages/changepassowrd";
import { Dashboard } from "../../../../_metronic/_partials";
// import Logo from "../../../../_metronic/layout/components/Logos/new.png";
import Logo from "../../../../_metronic/layout/components/Logos/logo.svg"
export function AuthPage() {
  const today = new Date().getFullYear();
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
          id="kt_login"
        >
          <div className="login-aside d-flex flex-row-auto   justify-content-center bgi-size- bgi-no-repeat p-10 p-lg-10">
            <div className="d-flex align-items-center justify-content-center">
            {/* <img src={Logo} ></img>   */}
            <h1 className="display-1">MetaSportz</h1>
            </div>
          </div>

          <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <ContentRoute
                  path="/changepassword"
                  component={Changepassword}
                />

                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
