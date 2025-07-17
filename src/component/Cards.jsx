import { CodeBracketIcon, MusicalNoteIcon, PaintBrushIcon } from '@heroicons/react/24/solid'
import {motion,useScroll, useSpring, useTransform} from 'motion/react'
import { useRef } from 'react'
const Cards = () => {
  
   const Cards = [
  {
    name: "Paint Art with Real Sticks",
    desc: "In this painting, one beautiful house and some flowers with vibrant colours are made.",
    icon: <PaintBrushIcon className='w-[60px] text-white'/>,
    img: "Oil Art Ideas.jpg",
  },
  {
    name: "Learn Web Development",
    desc: "Explore HTML, CSS, and JavaScript with hands-on projects to build real-world websites and apps.",
    icon: <CodeBracketIcon className='w-[60px] text-white'/>,
    img: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // You can replace this with your own image
  },
  {
    name: "Music Composition Basics",
    desc: "Discover the art of composing music, learning about melody, rhythm, and harmony in a fun way.",
    icon: <MusicalNoteIcon className='w-[60px] text-white'/>,
    img: "https://images.pexels.com/photos/159376/turntable-top-view-audio-equipment-159376.jpeg?auto=compress&cs=tinysrgb&w=1200", // You can replace this with your own image
  }
];
  return (
   <>
  {Cards.map((item,idx)=>{
  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref,offset:["start end","end start"]})
  const opacity = useTransform(scrollYProgress,[0,0.5,1],[0,1,0]);
  const translate = useTransform(scrollYProgress,[0,1],[300,-300]);
  const scale = useSpring(useTransform(scrollYProgress,[0,1],[1.7,0]),{stiffness:80,damping:10,mass:2});

    return(
      <>
      {/* Top Grid Section */}
  <motion.div
  key={idx} 
  ref={ref}
  style={{opacity:opacity}}
   className="grid grid-cols-12 gap-8 mx-auto px-6 py-16 my-25">
    {/* Left Column */}
    <motion.div
    style={{y: translate}}
    className="flex flex-col justify-center col-span-12 md:col-span-6">
      {item.icon}
      <h1 className='font-bold text-white text-3xl my-5'>{item.name}</h1>
      <p className='font-normal text-gray-400'>
        {item.desc}
      </p>
    </motion.div>

    {/* Right Column - Image */}
    <motion.div 
    style={{scale:scale}}
    className="col-span-12 md:col-span-6">
      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <img
          src={item.img}
          alt="Painting"
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  </motion.div>
      </>
    )
  })}
   </>
  )
}

export default Cards
