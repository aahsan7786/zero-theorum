import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
    }
},{index: 999});

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
