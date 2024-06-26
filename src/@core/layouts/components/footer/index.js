// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='#' rel='noopener noreferrer'>
          Sorbonne
        </a>
        <span> All rights Reserved</span>
        <span className='d-none d-sm-inline-block'></span>
      </span>
      <span className='float-md-end d-none d-md-block'>
      Sorbonne
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer       
