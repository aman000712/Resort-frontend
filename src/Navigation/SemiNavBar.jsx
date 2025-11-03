
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function SemiNavBar() {
  return (
    <div className='inset-0  bg-transparent opacity-80 object-cover  items-center  justify-center py-1 text-white md:flex hidden'>
     <div className='flex items-center justify-between w-10/12'>

     <div className='flex  gap-1 items-center'>
        <div><FaPhoneAlt /></div>
        <div>+1235 2355 98</div>
      </div>

      <div className='flex gap-1 items-center'>
        <div><SiMinutemailer /></div>
        <div>youremail@email.com</div>
      </div>

      <div>Open hours:Monday-Sunday 8:00AM-9:00PM</div>

     </div>
    </div>
  )
}


