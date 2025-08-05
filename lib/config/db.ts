import mongoose from "mongoose";

export const connectToDB = async() => {

    const dbUrl = process.env.DB_URL ?? "";

        await mongoose.connect(dbUrl);

    console.log("DB Connected");
}