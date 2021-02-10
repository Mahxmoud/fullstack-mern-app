import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Courses from '../Courses/Courses'
import Form from '../Form/Form'
import { getCourses } from "../../redux/actions/courses";
import useStyles from './styles'


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, [currentId, dispatch])


    return (
        <div>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Courses setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}


export default Home;