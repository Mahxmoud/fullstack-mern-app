import axios from 'axios'; 

const url = 'http://lcoalhost:5000/courses'

export const fetchCourses = () => axios.get(url)