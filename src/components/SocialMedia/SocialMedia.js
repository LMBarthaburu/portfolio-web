import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='social-media'>
      <a href="https://www.linkedin.com/in/luis-miguel-barthaburu-/" target="_blank" rel='noreferrer'><FaLinkedin/></a>
      <a href="https://github.com/LMBarthaburu" target="_blank" rel='noreferrer'><FaGithub/></a>
      <a href="https://www.instagram.com/lmbarthaburu/" target="_blank" rel='noreferrer'><FaInstagram/></a>
      <a href="https://www.facebook.com/luis.barthaburu/" target="_blank"  rel='noreferrer'><FaFacebook/></a>
    </div>
)
}

export default SocialMedia