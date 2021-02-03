import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createCourse, updateCourse } from '../../redux/actions/courses';

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();

        const [courseData, setCourseData] = useState({ instructor: '', title: '', message: '', tags: '', selectedFile: '' });
        const course = useSelector((state) => (currentId ? state.courses.find((message) => message._id === currentId) : null));
        const dispatch = useDispatch();

        useEffect(() => {
            if (course) setCourseData(course);
        }, [course]);

        const clear = () => {
            setCurrentId(0);
            setCourseData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (currentId === 0) {
                dispatch(createCourse(courseData));
                clear();
            } else {
                dispatch(updateCourse(currentId, courseData));
                clear();
            }
        };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${course.title}"` : 'Creating a Memory'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={courseData.creator} onChange={(e) => setCourseData({ ...courseData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={courseData.message} onChange={(e) => setCourseData({ ...courseData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={courseData.tags} onChange={(e) => setCourseData({ ...courseData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setCourseData({ ...courseData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;