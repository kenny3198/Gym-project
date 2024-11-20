import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
               <div className="mt-16 basis-1/2 md:mt-0">
                  <img src={Logo} alt="footer-logo" />
                  <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti atque at facere quibusdam animi amet quod consequatur optio placeat eos?
                    </p>
                    <p>Evogym All Right Reserved</p>
               </div>
               <div className="mt-16 basis-1/4 md:mt-0">
                   <h4 className="font-bold">Links</h4>
                   <p className="my-5">Merssa Ocsi senetus</p>
                   <p className="my-5">Et gravida senetus</p>
                   <p>Et gravida senetus</p>
               </div>
               <div className="mt-16 basis-1/4 md:mt-0">
                   <h4 className="font-bold">Contact Us</h4>
                   <p className="my-5">Et gravida senetus</p>
                   <p>08127319721</p>
               </div>
               <div>

               </div>
            </div>
  </footer>
}

export default Footer