import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import BackdropFilter from 'react-backdrop-filter'

import Courses from '../Courses/Courses'
import Form from '../Form/Form'
import { getCourses } from "../../redux/actions/courses";
import useStyles from './styles'
import Paperimg from '../../images/paperimg.jpg'
import Mahmoud from '../../images/Mahmoud.png'

const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const user = (JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses())
    }, [currentId, dispatch, user])


    return (
        <div className={classes.home}>
            {user?.result?.isAdmin ? (<Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-around' alignItems='stretch' spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Courses setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>)
                :
                <>
                    <div className={classes.whoWeAre}>
                        <h1 className={classes.secTitle}><span className={classes.coloredTitle}>Who</span> we are</h1>
                        <BackdropFilter
                            className="classes.section"
                            filter={"blur(10px) sepia(30%)"}
                            canvasFallback={true}
                            html2canvasOpts={{
                                allowTaint: true
                            }}

                        >
                            <div className={classes.secContent}>
                                <p className={classes.para}>
                                    Picode Club is a creative envirment for kids to learn social and technical skills that triditional education can't provide, with a highly trained team of experts in these fields. 
                                </p>
                                <img src={Paperimg} alt='Picode' className={classes.cardImg}></img>
                            </div>
                        </BackdropFilter>
                    </div >

                    <h1 className={classes.secTitle}><span className={classes.coloredTitle}>Our</span> Courses</h1>
                    <Container>
                        <Grid className={classes.mainContainer} container justify='space-around' alignItems='flex-end' spacing={3}>
                            <Grid item xs={12}>
                                <Courses setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container >
                </>
            }
        </div >
    )
}


export default Home;