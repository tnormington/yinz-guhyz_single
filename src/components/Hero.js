import React, { Component } from 'react'

import SocialLinks from '../components/SocialLinks'

import heroBgFull from '../assets/png/hero/mobile-full.png'
import mobileFullTall from '../assets/png/hero/mobile-full--tall.png'
import bg from '../assets/png/hero/hero-bg.png'
import l1 from '../assets/png/hero/hero-layer1-dark.png'
import l2 from '../assets/png/hero/hero-layer2.png'
import l3 from '../assets/png/hero/hero-layer3.png'

import yinzGuhyzLogo from '../assets/svg/yinzguhyz.svg'

const debounce = require('debounce')

const MAX_SCROLL = 500

export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      layerTop: {
        one: 0,
        two: 0,
        three: 0,
        bg: 0,
      },
      windowWidth: 0,
    }
  }

  componentDidMount() {
    this.handleResize()

    document.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    document.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  handleScroll() {
    const y = window.scrollY

    if (y < MAX_SCROLL) {
      this.setState({
        layerTop: {
          one: `${y / 2}px`,
          two: `${y / 3}px`,
          bg: `-${y / 3}px`,
        },
      })
    }
  }

  heroContent(button) {
    return (
      <div className="hero__content">
        <img className="hero__content__logo" src={yinzGuhyzLogo} />
        <SocialLinks />
        {button && (
          <a href="#anchor-link" className="button">
            Check it Awt!
          </a>
        )}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.windowWidth > 600 && (
          <div className="hero">
            <img
              style={{ top: this.state.layerTop.bg }}
              className="hero__layer layer-bg"
              src={bg}
            />
            <img
              style={{ top: this.state.layerTop.one }}
              className="hero__layer layer-1"
              src={l3}
            />
            <img
              style={{ top: this.state.layerTop.two }}
              className="hero__layer layer-2"
              src={l2}
            />
            <img
              style={{ top: this.state.layerTop.three }}
              className="hero__layer layer-3"
              src={l1}
            />
            {this.heroContent(true)}
          </div>
        )}
        {this.state.windowWidth <= 600 && (
          <div className="hero--mobile">
            <img className="hero--mobile__bg" src={mobileFullTall} />
            {this.heroContent(false)}
          </div>
        )}
      </div>
    )
  }
}
