import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { getCourses } from "./redux/actions/courses";
import Logo from "./images/Picode white.png";
import Courses from "./components/Courses/Courses";
import Form from './components/Form/Form'
import useStyles from './styles'



export default function App() {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])
    return (
        <div>
            <Container maxwidth='lg'>
                <AppBar className={ classes.appBar} position='static' color='inherit'>
                    <Typography className={classes.heading} variant="h2" align='center'>
                        Picode
                    </Typography>
                    <img className={classes.image} src={Logo} alt='picode' height='60' />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Courses/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

