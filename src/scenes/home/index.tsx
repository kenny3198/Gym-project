import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return <section 
  id='home'
  className='gap-16 py-10 bg-gray-20 md:h-full md:pb-0'
  > 
   {/* IMAGES  AND MAIN HEADER*/}
   <motion.div
    className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
    {/* MAIN HEADER */}

<div className='z-10 mt-32 md:basis-3/5'
>
{/* HEADING */}
<motion.div
 className='md:-mt-20'
 initial='hidden'
 whileInView='visible'
 viewport={{once: true, amount: 0.5}}
 transition={{duration: 0.5}}
 variants={{
    hidden: { opacity: 0, x: -50},
    visible: { opacity:1, x: 0}
 }}
 >
    <div className='relative'>
        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
            <img src={HomePageText} alt="home-page-text" />
        </div>
    </div>
    <p className='mt-8 text-sm'>
        Unrivaled Gym. Unaparalled Training Fitness Classes, World 
        class Studios to get the body shape that you dream of .. Get your Dream 
        Body Now.
    </p>
</motion.div>
{/* ACTIONS */}
    <motion.div
     className='mt-8 flex items-center gap-8 justify-start'
     initial='hidden'
     whileInView='visible'
     viewport={{once: true, amount: 0.5}}
     transition={{delay:0.2, duration: 0.5}}
     variants={{
        hidden: { opacity: 0, x: -50},
        visible: { opacity:1, x: 0}
     }}
    
     >
     <ActionButton setSelectedPage={setSelectedPage}>
        Join Now
     </ActionButton>
     <AnchorLink className='text-sm font-bold text-primary-500 underline 
     hover:text-secondary-500'
     onClick={() => setSelectedPage(SelectedPage.ContactUs)}
     href={`${SelectedPage.ContactUs}`}
     >
       <p>Learn More</p> 
     </AnchorLink>
    </motion.div>
    </div>
    {/* IMAGE */}
    <div className='flex basis:3/5 justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end'>
        <img src={HomePageGraphic} alt="home-graphics-image" />
    </div>
   </motion.div>
       {/* SPONSORS */}
       {isAboveMediumScreen && (
        <div className='h-[150px] w-full py-10 bg-primary-100'>
            <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 justify-between items-center'>
                    <img src={SponsorRedBull} alt="sponsur-redbull" />
                    <img src={SponsorForbes} alt="sponsur-forbes" /> 
                     <img src={SponsorFortune} alt="sponsur-fortune" />
                </div>
            </div>
        </div>
       )}
  </section>
}

export default Home