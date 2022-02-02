import dashboardIcon from "./../../assets/images/dashboardIcons/dashboard/SVG/Dashboard-simple.svg";
import dashboardIconHover from "./../../assets/images/dashboardIcons/dashboard/SVG/Dashboard-hover.svg";

import forwardIcon from "./../../assets/images/dashboardIcons/forward/SVG/Forward-simple.svg";
import forwardIconHover from "./../../assets/images/dashboardIcons/forward/SVG/Forward-hover.svg";

import dynamicsIcon from "./../../assets/images/dashboardIcons/governingdynamic/SVG/Governing-simple.svg";
import dynamicsIconHover from "./../../assets/images/dashboardIcons/governingdynamic/SVG/Governing-hover.svg";

import resourcesIcon from "./../../assets/images/dashboardIcons/resources/SVG/Resources-simple.svg";
import resourcesIconHover from "./../../assets/images/dashboardIcons/resources/SVG/Resources-hover.svg";

import substitutionIcon from "./../../assets/images/dashboardIcons/substitution/SVG/substitution-simple.svg";
import substitutionHover from "./../../assets/images/dashboardIcons/substitution/SVG/substitution-hover.svg";

import contactIcon from "./../../assets/images/dashboardIcons/contact/SVG/contact-simple.svg";
import contactIconHover from "./../../assets/images/dashboardIcons/contact/SVG/contact-hover.svg";

import backtestIcon from "./../../assets/images/dashboardIcons/backtest/SVG/BackTest-simple.svg";
import backtestIconHover from "./../../assets/images/dashboardIcons/backtest/SVG/BackTest-hover.svg";

export const menuConfig = [
  {
    name: "Dashboard",
    icon: dashboardIcon,
    hoverIcon: dashboardIconHover,
    route: "/dashboard",
    onClick: () => {},
    className: "",
  },
  {
    name: "Forward Valuation",
    icon: forwardIcon,
    hoverIcon: forwardIconHover,
    route: "dashboard2",
    onClick: () => {},
    className: "",
  },
  {
    name: "Back Test",
    icon: backtestIcon,
    hoverIcon: backtestIconHover,
    route: "",
    onClick: () => {},
    className: "",
  },
  {
    name: "Governing Dyamics",
    icon: dynamicsIcon,
    hoverIcon: dynamicsIconHover,
    route: "",
    onClick: () => {},
    className: "",
  },
  {
    name: "Substitution Rates",
    icon: substitutionIcon,
    hoverIcon: substitutionHover,
    route: "",
    onClick: () => {},
    className: "",
  },
  {
    name: "Resources",
    icon: resourcesIcon,
    hoverIcon: resourcesIconHover,
    route: "",
    onClick: () => {},
    className: "",
  },
  {
    name: "Contact",
    icon: contactIcon,
    hoverIcon: contactIconHover,
    route: "",
    onClick: () => {},
    className: "",
  },
];
