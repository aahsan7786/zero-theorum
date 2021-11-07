import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { appBarTypes } from "../constants/commonConstants"
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
            href:"/underdev"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Research',
        props: {
            href:"/underdev"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Performance',
        props: {
            href:"/underdev"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Contact',
        props: {
            href:"/underdev"
        }
    },
    {
        type: appBarTypes.LABEL,
        label: 'Investor',
        props: {
            href:"/underdev"
        }
    },
    {
        type: appBarTypes.ICON,
        icon: <NotificationsOutlinedIcon />,
        props: {
            color: 'white',
        }
    },
]