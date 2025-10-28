"use client"

import { assets, blog_data, BlogType } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    
    const params = useParams();
    const id = Number(params.id);
 
    const [data, setData] = useState<BlogType | null>();

    const fetchBlogData = () => {
        for(let i=0; i<blog_data.length; i++){
            if(Number(id) === blog_data[i].id){
                setData(blog_data[i]);
                console.log(data);
            }
        }
    }

    useEffect(() => {
        fetchBlogData();
    })
 
    return (
        data 
            ? <>
                <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                    <div className='flex justify-between items-center'>
                        <Image src={assets.logo} alt='' className='w-[130px] sm:w-auto'/>
                        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                            Get started <Image src={assets.arrow} alt=''/>
                        </button>
                    </div>
                    <div className='text-center my-24'>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} alt='' width={60} height={60}/>
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                </div>
                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={data.image} alt='' width={1200} height={720} />

                <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
                <p>
                    In today is fast-paced world, maintaining a balanced and healthy lifestyle has become both a challenge and a priority.
                    From managing stress to eating right and staying active, healthy habits form the foundation of a fulfilling life.
                    In this blog, we will walk you through practical, science-backed steps to build and sustain habits that improve both your
                    physical and mental well-being.
                </p>

                <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
                <p className='my-3'>
                    Every transformation begins with awareness. Start by asking yourself what you truly value in life—whether it is mental peace, energy, productivity,
                    or longevity. Once you have identified what matters, translate these values into actionable, measurable goals.
                    Instead of vague resolutions like get fit, define a goal like exercise 30 minutes daily, 5 times a week.
                </p>
                <p className='my-3'>
                    Writing down your goals and understanding your “why” gives your habits a deeper purpose and keeps you motivated when things get tough.
                </p>

                <h3 className='my-5 text-[18px] font-semibold'>Step 2: Design Your Environment for Success</h3>
                <p className='my-3'>
                    Your environment can either support or sabotage your habits. Make small changes around you that align with your goals:
                    prep healthy meals in advance, place your workout clothes where you can see them, and remove distractions like junk food or phone clutter.
                </p>
                <p className='my-3'>
                    Habit stacking is another great technique—tie new habits to existing ones. For example, meditate right after brushing your teeth or stretch while
                    your coffee brews. These triggers reduce resistance and make habits automatic.
                </p>

                <h3 className='my-5 text-[18px] font-semibold'>Step 3: Start Small and Stay Consistent</h3>
                <p className='my-3'>
                    One of the biggest mistakes people make is trying to change everything at once. Focus on one habit at a time, starting small.
                    Want to build a journaling habit? Start with 2 minutes a day. When the habit feels natural, you can expand it.
                </p>
                <p className='my-3'>
                    Consistency beats intensity. It is not about doing something perfectly every time, but about showing up regularly.
                    Use tools like habit trackers, reminders, or accountability buddies to keep yourself on track.
                </p>

                <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
                <p className='my-3'>
                    Building healthy habits is not about overnight change—it is about creating a system that supports gradual, sustainable improvement.
                    Reflect on your goals, design an environment that works for you, and take consistent action. Over time, small changes compound into
                    remarkable results. Your best self is built one habit at a time.
                </p>

                <div className='my-24'>
                    <p className='text-black font font-semibold my-4'>Share this article on social media</p>
                    <div className='flex gap-4'>
                    <Image src={assets.facebook_icon} alt='Facebook' width={50} />
                    <Image src={assets.twitter_icon} alt='Twitter' width={50} />
                    <Image src={assets.googleplus_icon} alt='Google+' width={50} />
                    </div>
                </div>
                </div>
            <Footer/>
            </>
            : <></>
    )
}

export default Page;
