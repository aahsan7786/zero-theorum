import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
    }
},{index: 1});

export default function MyGrid({ className, ...otherProps }) {
    const classes = useStyles();
    return (
        <Grid
            className={clsx({
                [classes.root]: true, // aalways applies
                [className]: className //applies when className is sent via props
            })}
            {...otherProps} />
    )
}
