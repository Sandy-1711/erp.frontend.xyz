import Link from 'next/link'
export default function Navbar(user) {
    var student = user?.student;
    student=true;
    const faculty = user?.student;
    const admin = user?.student;
    return <header className='flex w-full justify-between items-center px-10 h-16 border'>
        <div className='flex gap-20'>
            <div><h1 className='text-xl font-bold text-gray-700'>ATTENDANCE PORTAL</h1></div>
            <div className='flex items-center justify-center'>
                <ul className='flex gap-6 items-center justify-center text-base'>
                    {student && <li className='hover:text-blue-500'><Link href={'/'}>Home</Link></li>}
                    {student && <li className='hover:text-blue-500'><Link href={'/marks'}>Marks</Link></li>}
                    {student && <li className='hover:text-blue-500'><Link href={'/attendance'}>Attendance</Link></li>}
                    {student && <li className='hover:text-blue-500'><Link href={'/documents'}>Documents</Link></li>}
                    {student && <li className='hover:text-blue-500'><Link href={'/profile'}>Settings</Link></li>}
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
            <input className='border p-2 px-4 rounded-md' placeholder='Search' name='searchbar' id='searchbar' />
            {/* <div className='rounded-full h-4 w-4'> */}
            <Link href={'/profile'}>
                <div className='bg-gray-500 h-8 w-8 rounded-full'>

                </div>
            </Link>
            {/* </div> */}
        </div>
    </header>
}