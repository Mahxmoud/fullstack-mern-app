import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    selectedFile: String

})


const courseModel = mongoose.model('courseModel', courseSchema)


export default courseModel