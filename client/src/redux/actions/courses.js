import * as api from '../../api'

export const getCourses = () => async (dispatch) => {
    try {
        const { data } = api.fetchCourses;
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const createCourse = (course) => async (dispatch) => {
    try {
        const { data } = await api.createCourse(course);

        dispatch({ type: "CREATE", payload: data });
    } catch (err) {
        console.log(err.message);
    }
}

export const updateCourse = (id, course) => async (dispatch) => {
    try {
        const { data } = await api.updateCourse(id, course);

        dispatch({ type: "UPDATE", payload: data });
    } catch (err) {
        console.log(err.message);
    }
};

export const likeCourse = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeCourse(id);

        dispatch({ type: "LIKE", payload: data });
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteCourse = (id) => async (dispatch) => {
    try {
        await api.deleteCourse(id);

        dispatch({ type: "DELETE", payload: id });
    } catch (err) {
        console.log(err.message);
    }
};
