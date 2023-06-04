import React from 'react'
import img from '../assets/6A1E4614-F251-4AB0-83EE-16CD1849CB56.JPG'
import './Card.css'
import email from '../assets/email.svg'
import linkedIn from '../assets/linkedIn.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

const Card = () => {
    return(
        <div >
            <img className={'image'} src={img} alt={'img'}/>

            <h1 className={'myName'}> Uzochukwu Chinemerem </h1>

            <h4 className={'myStack'}> Product Designer </h4>

            <h5 className={'site'}> ucjhay.website </h5>

            <div>
                <a href={'https://mail.google.com/mail/u/0/#sent?compose=DmwnWtDnFtdDbHkmQkJxPLShRhhMVgTDvggfBJsbGktTcGzZjfpWdZcZXLglFvnqKtVxmwhxXVHG'}><img className={'email'} src={email} alt={'email'}/></a>
                <a href={'https://www.linkedin.com/in/uzochukwu-chinemerem/'}><img className={'linkedIn'} src={linkedIn} alt={'email'}/></a>
            </div>

            <div className={'writing'}>
                <h1 className={'about'}> About </h1>
                <h6 className={'me'}> As a professional, I fulfill the roles of both a product designer and a frontend developer. My main focus lies in simplifying tasks and incorporating automation into my work. Keeping up with the latest security protocols and industry standards is a priority for me, and I'm always eager to expand my knowledge and expertise in new areas. </h6>
                <h1 className={'interests'}> Interests </h1>
                <h6 className={'likes'}> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. </h6>
            </div>

            <div className={'social'}>
                <a href={'https://twitter.com/ucjofficial'}><img className={'twit'} src={twitter} alt={'twitter'}/></a>
                <a href={''}><img className={'face'} src={facebook} alt={'facebook'}/></a>
                <a href={'https://www.instagram.com/producedbyucious/'}><img className={'inst'} src={instagram} alt={'instagram'}/></a>
                <a href={'https://github.com/ucskyship'}><img className={'git'} src={github} alt={'git'}/></a>
            </div>
        </div>
    )
}

export default Card;