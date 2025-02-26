import React from 'react';
//Icons
import { IoLogoLinkedin, IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
//Picture
import pic from '../images/omakuva.jpeg';

const wordHighlight = {
    color: "navy"
}
const imageStyle = {
    borderRadius: "50%",
    width: '70%'
}

export default function AboutMe({refer}) {
  return (
    <div className='aboutDiv' ref={refer}>
      <div className='about-left'>
        <div className='aboutHeader'>
            <h1>Hello, <br />My name is <span style={wordHighlight}>Otto</span></h1>
        </div>
        <div className='aboutText'>
            <p> A 23-year-old Business Information Technology student from Lahti, Finland. Currently I’m studying my last year at LAB University of Applied Sciences. 
                I’m deeply interested in web design and other UX/UI development. For me coding allows to express my vision and ideas in a creative way. 
                I've always liked problem solving and programming challenges me in that on daily bases.
                When it comes to coding I would describe myself as a perfectionist. I always want to do things better than last time and continuously develop my skill set.
                <br /><br />As I said I’m mostly interested in front-end development. The style I want to achieve in my projects is minimalistic, clean and well balanced. 
                I’m also interested in the logic behind an application’s UI. I’ve tried to grow my skill set with free time projects and Udemy’s great selection of different courses. 
                The main goal for me is to develop my skills towards full-stack development or master a specific programming language. <br /><br />
                I'm currently working as a HubSpot Developer. This includes working with HubSpot's own programming language HubL and creating custom modules for HubSpot's CMS.
                I'm also working with HubSpot's CRM-platform and creating custom solutions for the company's different business units in Finland and abroad.
            </p>
        </div>
      </div>
      <div className='about-right'>
        <img src={pic} alt="my pic" style={imageStyle}/>
        <div className='socials'>
          <RiInstagramFill style={{cursor: "pointer"}} onClick={() => {window.open('https://www.instagram.com/otto_sebastian/', '_blank')}}/>
          <IoLogoLinkedin style={{cursor: "pointer"}} onClick={() => {window.open('https://www.linkedin.com/in/otto-hyyrynen-267692265', '_blank')}}/>
          <IoLogoFacebook style={{cursor: "pointer"}} onClick={() => {window.open('https://www.facebook.com/od.hyyrynen', '_blank')}}/>
          <IoLogoGithub style={{cursor: "pointer"}} onClick={() => {window.open('https://github.com/OttoSebastian', '_blank')}}/>
        </div>
      </div>
    </div>
  );
}
