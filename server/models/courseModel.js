import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    instructor: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number, 
        default: 0,  
    }, 
    createdAt: {
        type: Date, 
        default: new Date()
    }

})


const courseModel = mongoose.model('courseModel', courseSchema)


export default courseModel