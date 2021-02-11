import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    instructor: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String], 
        default: [],  
    }, 
    createdAt: {
        type: Date, 
        default: new Date()
    }

})


const courseModel = mongoose.model('courseModel', courseSchema)


export default courseModel