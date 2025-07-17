import Cards from "./Cards"
import {useRef} from 'react'
import {motion,useTransform,useScroll} from 'motion/react'
const Scroll_cards = () => {

  const bg = useRef();
  const {scrollYProgress} = useScroll({target:bg,offset:["start end","end start"]});
  const background = useTransform(scrollYProgress, [0, 0.5, 1], [
    '#b22222', // dark red
    '#1e3a8a', // dark blue
    '#4b0082', // dark purple
  ]);

  return (
    <>
  {/* Cards Section (Full Screen) */}
  <motion.div ref={bg} style={{backgroundColor:background}} className='flex items-center justify-center min-h-screen bg-black'>
    <div
    className="flex flex-col items-center justify-center max-w-[800px]">
      <Cards />
    </div>
  </motion.div>
    </>
  )
}

export default Scroll_cards
