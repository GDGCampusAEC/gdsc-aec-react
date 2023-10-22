import Logo from '../Assests/gdsc-logo.png'
const Navbar = () => {
  return (
    <div className='w-[100%]  flex justify-center items-center py-6 relative'>
        <div className='flex justify-center items-center absolute left-[5vw] gap-1'>
            <img src={Logo} alt="image" className='h-[3.5rem]'/>
            <h1 className='font-bold text-lg text-[#767676]'>GDSC AEC</h1>
        </div>
      <div style={{boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)'}}    className='  px-[5em] rounded-full '>
        <ul className=' flex justify-center items-center  gap-12 drop-shadow-2xl text-sm h-[6.4vh] text-[#535353] transition-all delay-300'>
            <li className='hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500'>About us</li>
            <li className='hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500'>Event</li>
            <li className='hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500'>Our Team</li>
            <li className='hover:border-b-2 hover:border-b-blue-400 hover:cursor-pointer hover:text-blue-500'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
