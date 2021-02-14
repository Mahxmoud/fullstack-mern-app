import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { likeCourse, deleteCourse } from '../../../redux/actions/courses';
import useStyles from './styles';


const Course = ({ course, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const history = useHistory();
    const logout = () => {
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);
    const Likes = () => {
        if (course.likes.length > 0) {
            return course.likes.find((like) => like === (user?.result?._id))
                ? (
                    <><ThumbUpAlt fontSize="small" />&nbsp;{course.likes.length > 2 ? `You and ${course.likes.length - 1} others` : `${course.likes.length} like${course.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{course.likes.length} {course.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography>
                <Typography variant="body1">{course.instructor}</Typography>
            </div>
            {user?.result?.isAdmin === true ? (
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(course._id)}><MoreHorizIcon fontSize="default" /></Button></div>) : <></>}
            <div className={classes.details}>

                <Typography variant="body2" color="textSecondary" component="h2">{course.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{course.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{course.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" className={classes.button} disabled={!user?.result} onClick={() => dispatch(likeCourse(course._id))}><Likes /></Button>
                {user?.result?.isAdmin === true ? <Button size="small" className={classes.button} onClick={() => dispatch(deleteCourse(course._id))}>&nbsp;<DeleteIcon fontSize="small" /> &nbsp; Delete</Button> : <></>}
            </CardActions>
        </Card>
    );
};

export default Course;

