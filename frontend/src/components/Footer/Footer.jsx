import { Typography } from '@mui/material';
import React from 'react' 
import { Link } from 'react-router-dom';
import './Footer.css';
import {
    BsGithub,
    BsLinkedin,
    BsFillEnvelopeOpenFill,
    BsInstagram
} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="footer">
        <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>
                <p>Hello, my name is Ankita Budhia, and I will graduate from Vel Tech University with 
                    a degree in Computer Science in 2023. I'm interested in front end engineering, and 
                    I enjoy building websites that have wonderful user interfaces in addition to being attractive 
                    and effective.</p>
            </Typography>
            <Link to="/Contact" className='footerContactBtn'>
                <Typography>Contact Me</Typography>
            </Link>
        </div>
        <div>
            <Typography variant='h6'>Social Media</Typography>
                <a href="https://github.com/ankita007-coder" target="blank">
                    <BsGithub/>
                </a>
                <a href="https://www.linkedin.com/in/ankita-budhia-7b44861b8/">
                    <BsLinkedin/>
                </a>
                <a href="mailto: ankitabudhia03@gmail.com">
                    <BsFillEnvelopeOpenFill/>
                </a>
                <a href="https://www.linkedin.com/in/ankita-budhia-7b44861b8/">
                    <BsInstagram/>
                </a>
        </div>
    </div>
    
  )
}

export default Footer