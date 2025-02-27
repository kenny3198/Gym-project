import { SelectedPage, ClassType  } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3  from "@/assets/image3.png"
import image4  from "@/assets/image4.png"
import image5  from "@/assets/image5.png"
import image6   from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'
const classes: Array<ClassType> = [
    {
       name: "Weight Training Classes" ,
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
       image: image1
    },
    {
        name: "Yoga Classes" ,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
        image: image2
     },
     {
        name: "AB Core Classes" ,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
        image: image3
     },
     {
        name: "Adventures Classes" ,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
        image: image4
     },
     {
        name: "Fitness Classes" ,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
        image: image5
     },
     {
        name: "Training Classes" ,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, natus excepturi tempore consequatur est?",
        image: image6
     }
]
type Props = {
setSelectedPage: (value: SelectedPage) => void
}

const ourClasses = ({setSelectedPage}: Props) => {
  return <section id='ourclasses' className='w-full bg-primary-100 py-20'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
      <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.5}}
      transition={{delay:0.2, duration: 0.5}}
      variants={{
         hidden: { opacity: 0, x: -50},
         visible: { opacity:1, x: 0}
      }}
      className='mx-auto w-5/6'>
        <div className='w-3/5'>
        <HText>
            OUR CLASSES
           </HText>
           <p className='py-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae 
            eum et obcaecati corrupti veritatis. 
            Molestiae ad dicta architecto voluptatibus quo!</p>
        </div>
      </motion.div>
      <div className='mt-10 h-[353px] overflow-x-auto overflow-y-hidden w-full'>
         <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
                <Class key={`${item.name}-${index}`} 
                       name={item.name}
                       description={item.description}
                       image={item.image}
                />
            ))}
         </ul>
      </div>
    </motion.div>
  </section>
}

export default ourClasses