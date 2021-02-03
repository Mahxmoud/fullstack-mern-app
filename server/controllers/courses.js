import courseModel from '../models/courseModel.js'

export const getCourses = async (req, res) => {
    try {
        const courseModels = await courseModel.find()
        res.status(200).json(courseModels)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createCourses = async (req, res) => {
    const course = req.body
    const newCourse = new courseModel(course)
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}
