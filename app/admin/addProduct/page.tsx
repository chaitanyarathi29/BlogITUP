'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify';

interface dataType{
    title: string;
    description: string;
    category: string;
    author: string;
    authorImg: string;
    image: File | null;
}

const Page = () => {

    const [image, setImage] = useState<File | null>(null);
    const [ data, setData ] = useState<dataType>({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png",
        image: image
    })

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data,[name]:value}));
        console.log(data);
    }

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImg);
        if (data.image) {
            formData.append('image', data.image);
        }
        const response = await axios.post('/api/blog', formData);
        if(response.data.success){
            toast.success(response.data.msg);
        }else{
            toast.error("Error");
        }
    }

    return (
        <div>
        <>
            <form className='pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={onSubmitHandler}>
                <p className='text-xl'>Upload Thumbnail</p>
                <label htmlFor="image">
                    <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='' width={140} height={70}/>
                </label>
                <input
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setImage(e.target.files[0]);
                        }
                    }}
                    type="file"
                    id="image"
                    hidden
                    required
                />
                <p className='text-xl mt-4'>Blog title</p>
                <input onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' name='title' required />
                <p className='text-xl mt-4'>Blog Description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Write content here' name='description' rows={6} required />
                <p className='text-xl mt-4'>Blog Category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} id="" className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type='submit' className='mt-8 w-40 h-12 cursor-pointer bg-black text-white'>ADD</button>
            </form>
        </>
        </div>
    )
}

export default Page
