import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../_metronic/layout"; 
import DashboardPage from "./pages/DashboardPage";  
import { getUserInfo } from "../../src/utils/user.util";  
import Companies from "../_metronic/components/Companies/Companies"; 
import Creators from "../_metronic/components/Creators/Creators";
import News from "../_metronic/components/News/News";
export default function BasePage() {
  let userInfo = getUserInfo();

  return (
    <>
      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <ContentRoute exact path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/companies" component={Companies} />
          <ContentRoute exact path="/newsletter" component={News} />
          <ContentRoute exact path="/creators" component={Creators} /> 
          <Redirect to="error/error-v6" />
        </Switch>
      </Suspense>
    </>
  );
}
