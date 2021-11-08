import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Grid from './../components/common/Grid';

import AppBar from '../components/AppBar';
import logo from './../assets/logo/zerOtheorem_logo.png';
import AppBarOptions from '../config/AppBar.config'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import clsx from 'clsx';

import threeDModlingImage from './../assets/mainPage/3d-modeling.svg';
import orbitImage from './../assets/mainPage/orbit.svg';
import replaceImage from './../assets/mainPage/replace.svg';
import graphImage from './../assets/mainPage/incentives-banner.png';
import humanImage from './../assets/mainPage/incentives-banner-2.png';

import useStyles from '../styles/main.styles';
import underDev from './../assets/mainPage/incentives-banner-2.png'


export default function About() {
    return <div>
    <div className="underdevelopment">
      <img style={{display:'inline-block'}} src={underDev} alt="Under process" />
    </div>
    <div className="underdevelopment">
      <h1>Research Page</h1>
    </div>
  </div>
}
