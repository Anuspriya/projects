import {FaArrowCircleLeft} from 'react-icons/fa'
import Link from 'next/link'

const BackButton = () => {
  return (
    <Link href='/' className='btn btn-reverse btn-back'>
      <FaArrowCircleLeft /> Back
    </Link>
  )
}

export default BackButton
