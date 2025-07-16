const mongoose=require('mongoose')


const blogSchema=mongoose.Schema({
    title:{
      type:String,
      required:[true, 'Blog title is required'],
      minLength:[3, 'Blog title must at least be 3 characters long.']
    },
    author:{
      type:String,
      required:[true,'Auther name is required.'],
      minLength:[3,'Auher name must be at least 3 characters long.']
    },
    url:{
       
    },
    likes:Number
})
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})



module.exports=mongoose.model('Blog', blogSchema)
