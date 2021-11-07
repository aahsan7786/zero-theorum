import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { appBarTypes } from "../constants/commonConstants"
export default [
    {
        type: appBarTypes.LABEL,
        label: 'About',
        props: {}
    },
    {
        type: appBarTypes.LABEL,
        label: 'Forecast',
        props: {}
    },
    {
        type: appBarTypes.LABEL,
        label: 'Performance',
        props: {}
    },
    {
        type: appBarTypes.LABEL,
        label: 'Generation-0',
        props: {}
    },
    {
        type: appBarTypes.LABEL,
        label: 'Login',
        props: {}
    },
    {
        type: appBarTypes.ICON,
        icon: <NotificationsOutlinedIcon />,
        props: {
            color: 'white',
        }
    },
]