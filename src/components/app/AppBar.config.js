import React from 'react';

import { appBarTypes } from "../../constants/commonConstants"
//import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
export default [
    {
        type: appBarTypes.LABEL,
        label: 'Home',
        props: {
            href:"/home"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'About',
        props: {
            href:"/about"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Research',
        props: {
            href:"/research"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Performance',
        props: {
            href:"/performance"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Contact',
        props: {
            href:"/contact"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Investor',
        props: {
            href:"/investor"
        }
    },
    /*{
        type: appBarTypes.ICON,
        icon: <NotificationsOutlinedIcon />,
        props: {
            color: 'white',
        }
    },*/
]