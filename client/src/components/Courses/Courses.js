import React from 'react'
import { useSelector } from "react-redux"; 

import Course from './Course/Course'
import useStyles from './styles'

export default function Courses() {
    const classes = useStyles()
    const courses = useSelector((state) => state.courses) 

    console.log(courses)
    
    return (
        <div>
            <h1>courses</h1>
            <Course/>
        </div>
    )
}
