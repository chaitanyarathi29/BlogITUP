import { connectToDB } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
    await connectToDB();
}

LoadDB();

export async function GET(){
    
    return NextResponse.json({msg: "API Working"});
}

export async function POST(request: NextRequest) {
    
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        console.log(image);

        if (image instanceof File) {
        
            const imageByteData = await image.arrayBuffer();
            const buffer = Buffer.from(imageByteData);
            const path = `./public/${timestamp}_${image.name}`;
            await writeFile(path, buffer);
        
            const blogData = {
                title: `${formData.get('title')}`,
                description: `${formData.get('description')}`,
                category: `${formData.get('category')}`,
                author: `${formData.get('author')}`,
                image: `/${timestamp}_${image.name}`
            }
            console.log(blogData);
            await BlogModel.create(blogData);

            return NextResponse.json({
                success: true,
                msg: "Blog Added"
            });
        
        } else {
            throw new Error("Uploaded image is not a file.");
        }

    } catch (err) {
        return NextResponse.json({ 
            success: false, 
            error: err 
        }, { status: 500 });
    }
     
}
