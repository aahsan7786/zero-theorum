
import { makeStyles } from '@mui/styles';
import circleBack from './../assets/mainPage/circleBack.png';
import circleBackTop from './../assets/mainPage/circleBackTop.png';
import pageBackground from './../assets/mainPage/bg.jpg';
import chart1 from './../assets/mainPage/chart-1.png';
import colors from './../constants/colors'
import fonts from './../constants/fonts'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
    },
    innerPage: {
        backgroundImage: `url(${pageBackground})`,
        backgroundSize: 'cover',
    },
    spacingBottom40: {
        marginBottom: '40px'
    },
    spacingTop40: {
        marginTop: '40px'
    },
    spacingBottom20: {
        marginBottom: '20px'
    },
    spacingTop20: {
        marginTop: '20px'
    },
    gridPaddingLeft40: {
        paddingLeft: 40
    },
    gridPaddingRight40: {
        paddingRight: 40
    },
    headingWhite: {
        color: colors.textDefault,
        fontFamily: 'Raleway-Bold',
        alignItems: 'center'
    },
    textWhite: {
        color: colors.textDefault,
        fontSize: 12,
    },
    button: {
        width: 150,
    },
    firstRow: {
        minHeight: '660px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${circleBackTop})`,
        backgroundSize: 'cover'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    amountContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountText: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: fonts.ralewayRegular,
        color: colors.textDefault,
    },
    amountChangeIcons: {
        display: 'flex',
        flexDirection: 'column',
    },
    amountDescription: {
        color: colors.textDefault,
        fontSize: 10,
        fontFamily: fonts.ralewayLight
    },
    forecastButton: {
        margin: '15px',

    },
    performanceButton: {
        margin: '15px',
    },
    checkButton: {
        width: 150,
    },
    generationButton: {
        width: 150,
    },
    philosophyContainer: {
        minHeight: '313px',
        paddingTop: 30,
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${chart1})`,
        backgroundSize: 'cover',
    },
    philosophyHeading: {

    },
    philosophyDescription: {
        color: colors.textDefault,
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: 10,
        fontFamily: fonts.ralewayLight,
    },
    stepsCards: {
        height: '200px',
        flex: 1,
        flexDirection: 'column'
    },
    stepCardLabel: {
        color: colors.textDefault,
        marginTop: '10px',
        fontSize: 12,
        fontFamily: fonts.ralewayRegular
    },
    stepCardDescription: {
        color: colors.textDefault,
        marginTop: '10px',
        marginRight: '50px',
        fontSize: 10,
        fontFamily: fonts.ralewayLight,
    },
    graphRow: {
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
    },
    graphContainer: {
        padding: '20px',
    },
    inCentiveContainer: {
        display: 'flex',
        flexDirection: 'column',

    },
    incentiveHeading: {
    },
    incentiveDescription: {
        color: colors.textDefault,
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: 10,
        fontFamily: fonts.ralewayLight,
    },
    alignRightForColumn: {
        alignItems: 'flex-end'
    },
    lastRow: {
        minHeight: '650px',
        height: '850px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${circleBack})`,
        backgroundSize: 'cover'
    },
    lastRowContainer: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyRightContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    copyRightDescription: {
        color: colors.textDefault,
        fontSize: 10,
        fontFamily: fonts.ralewayLight,
    },
    fontRalewayBold: {
        fontFamily: fonts.ralewayBold,
    },
    fontRalewayRegular: {
        fontFamily: fonts.ralewayRegular,

    },
    fontRalewayLight: {
        fontFamily: fonts.ralewayLight,

    }
});

export default useStyles;