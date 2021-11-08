import React, {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "./tabButtons.scss";

import ProfileData from "./ProfileData";
import Password from "./Password";
import Subscription from "./Subscription";
import Invoices from "./Invoices";
import Billing from "./Billing";
import Feedback from "./Feedback";
// import Payment from "./Payment";

// import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const ProfileTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs
            className="tabs"
            selectedTabClassName="active"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
        >
            <TabList className="tabList">
                <Tab className="tabItem">PROFILE</Tab>
                <Tab className="tabItem">PASSWORD</Tab>
                <Tab className="tabItem">SUBSCRIPTION</Tab>
                <Tab className="tabItem">INVOICES</Tab>
                <Tab className="tabItem">BILLING</Tab>
                <Tab className="tabItem">FEEDBACK</Tab>
                {/* <Tab className="tabItem">Payment</Tab> */}
            </TabList>
            <TabPanel className="tabPanel">
                <ProfileData/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <Password/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <Subscription/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <Invoices/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <Billing/>
            </TabPanel>
            <TabPanel className="tabPanel">
                <Feedback/>
            </TabPanel>
            {/* <TabPanel className="tabPanel">
                <Elements stripe={stripePromise}>
                    <Payment/>
                </Elements>
            </TabPanel> */}
        </Tabs>
    );
};

export default ProfileTabs;
