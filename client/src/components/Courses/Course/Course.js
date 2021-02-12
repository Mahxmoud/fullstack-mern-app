import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeCourse, deleteCourse } from '../../../redux/actions/courses';
import useStyles from './styles';

const Course = ({ course, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(course._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body1">{course.instructor}</Typography>
                <Typography variant="body2" color="textSecondary" component="h2">{course.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{course.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{course.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeCourse(course._id))}><StarIcon fontSize="small" />&nbsp; Like &nbsp;{course.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteCourse(course._id))}>&nbsp;<DeleteIcon fontSize="small" /> &nbsp; Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Course;

