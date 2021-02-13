import mongoose from 'mongoose'
import courseModel from '../models/courseModel.js'

export const getCourses = async (req, res) => {
    try {
        const courseModels = await courseModel.find()
        res.status(200).json(courseModels)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createCourse = async (req, res) => {
    const course = req.body
    const newCourse = new courseModel({ ...course, instructor: req.userId, createdAt: new Date().toISOString()})
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No course with that id')

    const updatedCourse = await courseModel.findByIdAndUpdate(id, { ...course, id }, { new: true })

    res.json(updatedCourse)
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No course with that id')
    await courseModel.findByIdAndRemove(id);
    res.json({ message: "Course deleted" })
}

export const likeCourse = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: 'Unauthenticated' })
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No course with that id')
    const course = await courseModel.findById(id);

    const index = course.likes.findIndex((id) => id === String(req.userId))
    if (index === -1) {
        course.likes.push(req.userId)
    } else {
        course.likes = course.likes.filter((id) => id !== String(req.userId))
    }
    const updatedCourse = await courseModel.findByIdAndUpdate(id, course, { new: true })
    res.json(updatedCourse)
}