import React, { Component } from 'react'

import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class NewsletterForm extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.collectHoney = this.collectHoney.bind(this)

    this.state = {
      email: '',
      result: null,
      invalidEmail: false,
      botDetected: false,
      pending: false,
    }
  }

  handleInputChange(e) {
    console.log(e.target.value)

    this.setState({
      email: e.target.value,
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    if (this.state.botDetected) return

    if (!this.state.email) return

    this.setState({ pending: true })
    addToMailchimp(this.state.email).then(data => {
      console.log(data)
      this.setState({ result: data, pending: false })
    })
  }

  collectHoney() {
    this.setState({ botDetected: true })
  }

  render() {
    return (
      <div className="newsletter-form">
        {this.state.result &&
          this.state.result.result === 'error' && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: this.state.result.msg }} />
            </div>
          )}
        {this.state.result &&
          this.state.result.result === 'success' && (
            <div>
              <p>
                Thanks for signing up! You will now be kept up to date on the
                latest at Yinz Guhyz.
              </p>
            </div>
          )}
        {this.state.result === null && (
          <div>
            <p>
              Sign up for the newsletter to recieve updates & early subscriber
              rewards, we won’t send you any spam, I promise
            </p>
            <form onSubmit={this.handleFormSubmit}>
              <input
                tabIndex="-1"
                hidden
                type="text"
                onChange={this.collectHoney}
              />
              <input
                className={this.state.invalidEmail ? 'invalid' : ''}
                type="email"
                placeholder="E-mail Address"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              <input
                type="submit"
                value={this.state.pending ? 'Processing...' : 'Submit'}
              />
            </form>
          </div>
        )}
      </div>
    )
  }
}
