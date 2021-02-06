import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux"; 

import Course from './Course/Course'
import useStyles from './styles'

const Courses =({ setCurrentId }) => {
    const classes = useStyles()
    const courses = useSelector((state) => state.courses) 

    return (
        !courses.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {courses.map((course) => (
                    <Grid key={course._id} item xs={12} sm={6} md={6}>
                        <Course course={course} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}


export default Courses;