import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Courses from '../Courses/Courses'
import Form from '../Form/Form'
import { getCourses } from "../../redux/actions/courses";
import useStyles from './styles'


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const user = (JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, [currentId, dispatch, user])


    return (
        <div>
            {user?.result?.isAdmin ? (<Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-around' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Courses setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>)
                : <Container>
                    <Courses setCurrentId={setCurrentId} />
                </Container >}
        </div>
    )
}


export default Home;