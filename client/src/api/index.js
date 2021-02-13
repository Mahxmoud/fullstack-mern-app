import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


export const fetchCourses = () => API.get("/courses")
export const createCourse = (newCourse) => API.post("/courses", newCourse)
export const likeCourse = (id) => API.patch(`${"/courses"}/${id}/likeCourse`);
export const updateCourse = (id, updatedCourse) => API.patch(`${"/courses"}/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`${"/courses"}/${id}`);
export const likePost = (id) => API.patch(`{"/courses"}/${id}/likeCourse`); 


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
