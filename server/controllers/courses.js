import  mongoose from 'mongoose'
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
    const newCourse = new courseModel(course)
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const updateCourse = async (req, res) => {
    const { id: _id } = req.params;
    const course = req.body
    if (!mongoose.Types.ObjectID.isValid(_id)) return res.status(404).send('No course with that id')
    
    const updatedCourse = await courseModel.findByIdAndUpdate(_id, course, { new: true })
    
    res.json(updateCourse)
}