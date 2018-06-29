import React from 'react'

import twitter from '../assets/svg/twitter.svg'
import insta from '../assets/svg/insta.svg'
import youtube from '../assets/svg/youtube.svg'
import facebook from '../assets/svg/facebook.svg'
import twitch from '../assets/svg/twitch.svg'
import soundcloud from '../assets/svg/soundcloud.svg'

const link = {
  margin: '0 10px',
}

const links = {
  twitter: '#',
  instagram: 'https://www.instagram.com/yinzguhyz',
  youtube: 'https://www.youtube.com/channel/UC5I3juUKrJOt8OV5rVsuImw',
  facebook: 'https://www.facebook.com/yinzguhyz1/',
  soundcloud: 'https://soundcloud.com/yinz-guhyz',
  twitch: 'https://www.twitch.tv/yinzguhyz',
}

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <a
      href={links.facebook}
      className="social-icon__link"
      target="_blank"
      title="Yinz Guhyz Facebook"
    >
      <img src={facebook} alt="Facebook logo" />
    </a>
    <a
      href={links.instagram}
      className="social-icon__link"
      target="_blank"
      title="Yinz Guhyz Instagram"
    >
      <img src={insta} alt="Instagram logo" />
    </a>
    <a
      href={links.youtube}
      className="social-icon__link"
      target="_blank"
      title="Yinz Guhyz YouTube"
    >
      <img src={youtube} alt="Youtube logo" />
    </a>
    <a
      href={links.twitch}
      className="social-icon__link"
      target="_blank"
      itle="Yinz Guhyz Twitch"
    >
      <img src={twitch} alt="Twitch logo" />
    </a>
    <a
      href={links.soundcloud}
      className="social-icon__link"
      target="_blank"
      title="Yinz Guhyz Soundcloud"
    >
      <img src={soundcloud} alt="Soundcloud logo" />
    </a>
  </div>
)
