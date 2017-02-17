import React from 'react'
import clipboard from 'clipboard-js'
const { object } = React.PropTypes

const IconEmail = React.createClass({
  propTypes: {
    data: object.isRequired
  },
  componentDidMount () {
    this.refs.iconEmail.addEventListener('mouseenter', this.showEmailNotification)
    this.refs.iconEmail.addEventListener('mouseleave', this.hideEmailNotification)
  },
  setEmailNotification (msg) {
    this.refs.iconEmailNotifcation.innerHTML = msg
  },
  showEmailNotification () {
    this.refs.iconEmailNotifcation.style.display = 'inline-block'
  },
  hideEmailNotification () {
    this.refs.iconEmailNotifcation.style.display = 'none'
    this.setEmailNotification(this.props.data.email.notification.copyMsgBefore)
  },
  updateEmailNotification () {
    this.setEmailNotification(this.props.data.email.notification.copyMsgAfter)
  },
  copyEmailAddress (event) {
    event.preventDefault()
    clipboard.copy(this.props.data.email.address).then(this.updateEmailNotification)
  },
  render () {
    return (
      <a href='#' onClick={this.copyEmailAddress}>
        <div ref='iconEmailNotifcation' className='SocialIcons__email-notification'>
          { this.props.data.email.notification.copyMsgBefore }
        </div>
        <img ref='iconEmail' className='SocialIcons__email' src='../img/icon-email.png' alt='E-mail' />
      </a>
    )
  }
})

export default IconEmail
