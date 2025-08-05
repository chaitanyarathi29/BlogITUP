import mongoose from "mongoose";

interface blogType{
    title: string;
    description: string;
    category: string;
    author: string;
    image: string;
    authorImg: string;
    date?: Date;
}


const BlogSchema = new mongoose.Schema<blogType>({
    title:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now()
    },
    image:{
        type:String
    },
    authorImg:{
        type: String
    }
});

const BlogModel = mongoose.models["blog-model"] || mongoose.model("blog-model", BlogSchema);

export default BlogModel;