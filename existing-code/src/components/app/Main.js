import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Grid from './../components/common/Grid';

import AppBar from './AppBar';
import logo from './../../assets/images/zerOtheorem_logo.png';
import AppBarOptions from './AppBar.config'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import clsx from 'clsx';

import threeDModlingImage from './../../assets/images/icons/3d-modeling.svg';
import orbitImage from './../../assets/images/icons/orbit.svg';
import replaceImage from './../../assets/images/icons/replace.svg';
import graphImage from './../../assets/images/home/incentives-banner.png';
import humanImage from './../../assets/images/home/incentives-banner-2.png';

import useStyles from '../../styles/main.styles';


export default function Main() {
    const classes = useStyles();
    return (
        <Grid container
            className={classes.root}
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item container xs={12} md={10} lg={8} className={classes.innerPage}>
                {/* AppToolBar Top */}
                
                {/* middle content */}
                <Grid item xs={12} container className={clsx(classes.spacingBottom40)}>
                    <Grid item xs={12} container
                        className={clsx(classes.firstRow, classes.gridPaddingLeft40, classes.gridPaddingRight40)}>
                        <Grid item xs={12} md={6} sm={8} className={clsx(classes.column)}>
                            <Typography
                                variant='body2'
                                className={clsx(classes.textWhite, classes.spacingTop20, classes.spacingBottom20)}
                            >
                                welcome
                            </Typography>
                            <Typography
                                variant='h4'
                                className={classes.headingWhite}
                            >

                                The Convergence of AI,
                                Quantitative Finance,
                                and Social Impact

                            </Typography>
                            <Typography
                                variant='body2'
                                className={clsx(classes.textWhite, classes.spacingTop20)}
                            >
                                using bitcoin to empower GENERATION-0!
                            </Typography>
                            <Grid item xs={12} md={12}
                                className={clsx(classes.spacingTop40)}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.forecastButton}
                                >
                                    Forcast
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    className={classes.performanceButton}
                                >
                                    Performance
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sm={8} className={classes.amountContainer}>
                            <Box className={clsx(classes.amountCenter)}>
                                {/* <Box className={clsx(classes.amountText, classes.spacingBottom20)}>
                                    <Typography
                                        variant='h4'
                                        component='span'
                                        style={{ marginRight: 10 }}
                                    >
                                        $ 1.000
                                    </Typography>

                                    <Box className={classes.amountChangeIcons}>
                                        <ArrowDropUpOutlinedIcon style={{ color: 'green' }} />
                                        <ArrowDropDownOutlinedIcon style={{ color: 'red' }} />
                                    </Box>
                                </Box> */}
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.amountDescription)}
                                >
                                    <pre>Z E R O   T H E O R E M   F O R C A S T</pre>
                                </Typography>
                                <Typography
                                    variant='h4'
                                    className={clsx(classes.amountDescription)}
                                >
                                    <pre>F O R   0 8 / 2 5 / 2 0 2 0</pre>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}
                        className={clsx(classes.gridPaddingLeft40, classes.philosophyContainer, classes.spacingBottom40)}
                    >
                        <Box >
                            <Typography
                                variant='h4'
                                className={clsx(classes.incentiveDescription)}
                            >
                                <pre>P A Y   I T   F O R W A R D   L E A R N   M O R E</pre>
                            </Typography>
                            <Typography
                                variant='h4'
                                className={clsx(classes.headingWhite)}
                            >
                                Our Philosophy
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item container xs={12} className={classes.gridPaddingLeft40}>
                        <Grid item xs={12} sm={6} md={4}  >
                            <Box className={classes.stepsCards}>
                                <img src={threeDModlingImage} alt='logo' width={40} />
                                <Typography className={classes.stepCardLabel}>
                                    1. Zero Dependancy
                                </Typography>
                                <Typography className={classes.stepCardDescription}>
                                    ..."game theoretical principles that suggest BTC
                                    dominance to absorb value from weaker
                                    substitutes"
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}  >
                            <Box className={classes.stepsCards}>
                                <img src={orbitImage} alt='logo' width={40} />
                                <Typography className={classes.stepCardLabel}>
                                    1. Zero Entropy
                                </Typography>
                                <Typography className={classes.stepCardDescription}>
                                    ..."trending Strategy focused on risk minimization
                                    by targeting temporary price dislocation and
                                    extracting market inefficiencies"
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}  >
                            <Box className={classes.stepsCards}>
                                <img src={replaceImage} alt='logo' width={40} />
                                <Typography className={classes.stepCardLabel}>
                                    1. Zero Recognition
                                </Typography>
                                <Typography className={classes.stepCardDescription}>
                                    ..."trusting statistical methods and allowing
                                    autonomous trade execution without any
                                    human interference or intervention"
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    {/**responsiveness issues below this  */}
                    <Grid item container xs={12}
                        className={
                            clsx(classes.graphRow,
                                classes.gridPaddingLeft40,
                                classes.gridPaddingRight40,
                                classes.spacingTop40
                            )}>
                        <Grid item xs={12} lg={6}
                            className={classes.graphContainer} >
                            <img src={graphImage} alt='graph' width='100%' />
                        </Grid>
                        <Grid item container xs={12} lg={6}
                            className={classes.incentive} >

                            <Grid item container xs={7} >
                                <Grid item xs={12} className={classes.inCentiveContainer}>
                                    <Typography
                                        variant='h4'
                                        className={clsx(classes.headingWhite)}
                                    >
                                        Explore Our Research,
                                        Market Metrices
                                        And Forecast
                                    </Typography>
                                    <Typography
                                        variant='h4'
                                        className={clsx(classes.incentiveDescription)}
                                    >
                                        who is behind Zero Theorem Quant Lab?
                                    </Typography>
                                    <Button
                                        variant='outlined'
                                        color='primary'
                                        className={classes.checkButton}
                                    >
                                        Check
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} className='human1' >
                                <img src={humanImage} alt='human image' width='200' />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* graph row 2 */}
                    <Grid item container xs={12}
                        className={
                            clsx(classes.graphRow,
                                classes.gridPaddingLeft40,
                                classes.gridPaddingRight40,
                                classes.spacingTop40
                            )}>
                        <Grid item container xs={12} lg={6}
                            className={classes.incentive} >
                            <Grid item xs={3} sm={4} md={5}>
                                <img src={humanImage} alt='human image' width='200' />
                            </Grid>
                            <Grid item xs={9} sm={8} md={7}>
                                <Box className={clsx(classes.inCentiveContainer, classes.alignRightForColumn)}>
                                    <Typography
                                        variant='h4'
                                        className={clsx(classes.headingWhite)}
                                        style={{ width: 'min-content' }}
                                    >
                                        Interogate Our
                                        Fund Performance,
                                        Backtest and
                                        Optimizations
                                    </Typography>
                                    <Typography
                                        variant='h4'
                                        className={clsx(classes.incentiveDescription)}
                                    >
                                        who is behind Zero Theorem Quant Lab?
                                    </Typography>
                                    <Button
                                        variant='outlined'
                                        color='primary'
                                        className={classes.checkButton}
                                    >
                                        Check
                                    </Button>
                                    <Box className>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}
                            className={classes.graphContainer} >
                            <img src={graphImage} alt='graph' width='100%' />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.lastRow}>
                        <Box className={classes.lastRowContainer}>
                            <Typography
                                variant='h4'
                                className={clsx(classes.incentiveDescription)}
                            >
                                <pre>Q U A N T   L A B</pre>
                            </Typography>
                            <Typography
                                variant='h4'
                                className={clsx(classes.headingWhite)}
                            >
                                How for Down
                                the rabbit hole are
                                you willing to go?
                            </Typography>

                            <Button
                                variant='contained'
                                color='primary'
                                className={clsx(classes.generationButton, classes.spacingTop40)}
                            >
                                Generation - 0
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
                {/* AppToolBar bottom */}
                <Grid item xs={12} className={clsx(classes.gridPaddingLeft40)}>
                    <AppBar
                        logo={logo}
                        options={AppBarOptions}
                    />
                </Grid>
                <Grid item xs={12} className={clsx(classes.copyRightContainer, classes.gridPaddingRight40)}>
                    <Typography
                        variant='h4'
                        className={clsx(classes.copyRightDescription)}
                    >
                        copyright &copy; 2020 Zero Theorem All rights reserved Made by Presto
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
