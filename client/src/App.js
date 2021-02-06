import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Container, AppBar, Grow, Grid } from "@material-ui/core";

import { getCourses } from "./redux/actions/courses";
import Logo from "./images/Picode white.jpg";
import Courses from "./components/Courses/Courses";
import Form from './components/Form/Form'
import useStyles from './styles'



export default function App() {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCourses())
    }, [currentId, dispatch])
    return (
        <div>
            <Container maxwidth='lg'>
                <AppBar className={ classes.appBar} position='static' color='inherit'>
                    <img className={classes.image} src={Logo} alt='picode' height='60' />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Courses setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

