import React, {useState, useEffect} from "react";
// import {makeStyles} from "@material-ui/styles";
import DashboardBackground from "../DashboardBackground";
import Info from "../../../components/InfoSction/Info";
import resourcesIconHover from "./../../../assets/images/dashboardIcons/resources/SVG/Resources-hover.svg";
import {RESOURCES_INFO} from "../../../constants/Constants";
// import Modal from "./ModalResources/Modal";
import Accordion from "./ModalResources/Accordion";
import "./Resources.css";
import {connect} from "react-redux";
import {setResourcesOpen, defaultResources} from "Store/resources/actions";
import DashboardBreadcrumb from "../DashboardBreadcrumb";

const Resources = (props) => {
  const [openAcc, setOpenAcc] = useState(null);
  const resources = props.data;
  return (
    <>
      <DashboardBackground></DashboardBackground>
      <DashboardBreadcrumb currentPage={"Resources"}></DashboardBreadcrumb>

      <div className="grid_container">
        <div className="boxtop">
          <Info
            icon={resourcesIconHover}
            heading={RESOURCES_INFO.heading}
            info={RESOURCES_INFO.info}></Info>
        </div>

        <div className="boxbot">
          {resources.map((res, index) => (
            <Accordion
              id={index}
              title={res.title}
              content={"this is a content box"}
              pageFile={res.pageFile}
              setOpenAccordian={(id) => {
                if (id === openAcc) id = null;
                setOpenAcc(id);
              }}
              isActive={index === openAcc}
              content={"hello "}></Accordion>
          ))}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({resourcesReducer}) => {
  return resourcesReducer;
};

const mapDispatchToProps = {
  defaultResources,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
