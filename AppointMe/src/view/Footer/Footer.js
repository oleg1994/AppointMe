import React, {} from 'react';
import './Footer.css';
import linkedin from './../images/linkedin-icon.png';







function Footer(props) {
  
 
    return (
        <a href={'https://www.linkedin.com/in/oleg-melnyk/'} className='footerBlock'><img src={linkedin} alt="linkedinIcon" className='linkedinIcon'/>&nbsp;&nbsp;Oleg Melnyk</a>
    );
}

export default Footer;
