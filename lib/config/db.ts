import mongoose from "mongoose";

export const connectToDB = async() => {
    await mongoose.connect('mongodb+srv://chaitanya29rathi:2yWnKeOWHiX5nKiU@cluster0.azeoq.mongodb.net/blog-it-up');
    console.log("DB Connected");
}