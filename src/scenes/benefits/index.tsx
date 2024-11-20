
import HText from "@/shared/HText"
import { SelectedPage, BenefitsType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from './Benefit'
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton"

const benefits: Array<BenefitsType> = [
    {
        icons: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Where every individual enjoy the moment by flexing out thier body and get desired shape"
    },
    {
        icons: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's Of Diverse Classes",
        description: "Where every individual enjoy the moment by flexing out thier body and get desired shape"
    },
    {
        icons: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Pro Expert And Trainers",
        description: "Where every individual enjoy the moment by flexing out thier body and get desired shape"
    }
]
const container = {
    hidden : {},
    visible: {
        transition:{staggerChildren: 0.2}
    }
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const BenefitIndex = ({setSelectedPage}: Props) => {
  return <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    
   <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
    {/* HEADER */}
       <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.5}}
        transition={{delay:0.2, duration: 0.5}}
        variants={{
           hidden: { opacity: 0, x: -50},
           visible: { opacity:1, x: 0}
        }}
       className="md:w-3/5 md:my-5">
        <HText>
            MORE THAN JUST A GYM
        </HText>
        <p className="my-5 text-sm"> 
            We provide World Class fitness Equipment, trainers and 
            Get you to your ultimate fitness goals with ease . We provide
            true care in to each and every memeber
        </p>
       </motion.div>
       {/* BENEFIT */}
       <motion.div 
       initial="hidden"
       whileInView="visible"
       viewport={{once: true, amount:0.5}}
       variants={container}
       className="md:flex items-ceneter justify-between gap-8 mt-5">
        {benefits.map((benefit:BenefitsType) => (
            <Benefit key={benefit.title}
                     icons={benefit.icons}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
            />
        ))}
       </motion.div>
       {/* GRAPHICS AND DESCRIPTION */}
       <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHICS */}
        <img className="mx-auto" src={BenefitPageGraphic} alt="graphic-image" />
        {/* DESCRIPTION */}
        <div>
              
          {/* TITLE */}
            <div className="relative">
           <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves"></div>
           <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                 hidden: { opacity: 0, x: 50},
                 visible: { opacity:1, x: 0}
              }}>

           </motion.div>
            <HText>
                MILLIONS OF HAPPY MEMBER GETTING {" "} <span className="text-primary-500">FIT</span>
            </HText>
            </div>
          {/* DESCRIPTION */}
                 <motion.div   initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
               hidden: { opacity: 0, x: -50},
               visible: { opacity:1, x: 0}
            }}
                 >
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni praesentium optio soluta libero? Veniam amet voluptate fugit ullam? Earum corporis, 
                        similique ullam optio ratione doloribus reiciendis esse quibusdam accusamus?
                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni praesentium optio soluta libero? Veniam amet voluptate fugit ullam? Earum corporis, 
                        similique ullam optio ratione doloribus reiciendis esse quibusdam accusamus?</p>
                 </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
               <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
               </div> 
            </div>
        </div>
       </div>
   </motion.div>
  </section>
}

export default BenefitIndex;