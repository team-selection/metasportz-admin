/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { getUserInfo } from "../../../../../utils/user.util";
export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  let userInfo = getUserInfo();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${
          !hasSubmenu && "menu-item-active"
        } menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <> 

      {userInfo?.role === "admin" && (
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          <li
            className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
              <span className="svg-icon menu-icon">
                <img src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/companies", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/companies">
              <span className="svg-icon menu-icon">
                <img src="media/allIconsForTable/user.svg" />
              </span>
              <span className="menu-text">Companies</span>
            </NavLink>
          </li>
          
          <li
            className={`menu-item ${getMenuItemActive("/creators", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/creators">
              <span className="svg-icon menu-icon">
                <img src="media/allIconsForTable/info.svg" />
              </span>
              <span className="menu-text">Creators</span>
            </NavLink>
          </li>

          <li
            className={`menu-item ${getMenuItemActive("/newsletter", false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/newsletter">
              <span className="svg-icon menu-icon">
                <img src="media/allIconsForTable/feedback.svg" />
              </span>
              <span className="menu-text">Newsletter</span>
            </NavLink>
          </li>
           
        </ul>
      )}
    </>
  );
}
