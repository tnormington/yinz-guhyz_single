import React from 'react'

import twitter from '../assets/svg/twitter.svg'
import insta from '../assets/svg/insta.svg'
import youtube from '../assets/svg/youtube.svg'
import facebook from '../assets/svg/facebook.svg'

const link = {
  margin: '0 10px',
}

const links = {
  twitter: '#',
  instagram: 'https://www.instagram.com/yinzguhyz',
  youtube: 'https://www.youtube.com/channel/UC5I3juUKrJOt8OV5rVsuImw',
  facebook: 'https://www.facebook.com/yinguhyz/',
}

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <a href={links.facebook} className="social-icon__link" target="_blank">
      <img src={facebook} alt="Facebook logo" />
    </a>
    <a href={links.instagram} className="social-icon__link" target="_blank">
      <img src={insta} alt="Instagram logo" />
    </a>
    <a href={links.youtube} className="social-icon__link" target="_blank">
      <img src={youtube} alt="Youtube logo" />
    </a>
  </div>
)
