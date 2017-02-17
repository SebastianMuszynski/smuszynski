import React from 'react'
import ReactDOM from 'react-dom'
import clipboard from 'clipboard-js'
import css from '../css/HomePage'
import data from '../data/en'

const HomePage = React.createClass({
  componentDidMount() {
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
    this.setEmailNotification(data.email.notification.copyMsgBefore)
  },
  updateEmailNotification () {
    this.setEmailNotification(data.email.notification.copyMsgAfter)
  },
  copyEmailAddress (event) {
    event.preventDefault()
    clipboard.copy(data.email.address).then(this.updateEmailNotification)
  },
  render () {
    return (
      <div className='HomePage'>
        <div className='Introduction'>
          <div className='Introduction__name' ref='introName'>{ data.name }</div>
          <div className='Introduction__description'>{ data.description}</div>
        </div>
        <div className='SocialIcons'>
          <a href='https://www.linkedin.com/in/muszynskisebastian' target='blank'>
            <img className='SocialIcons__linkedin' src='../img/icon-linkedin.png' alt='LinkedIn' />
          </a>
          <a href='https://twitter.com/s_muszynski' target='blank'>
            <img className='SocialIcons__twitter' src='../img/icon-twitter.png' alt='Twitter' />
          </a>
          <a href='https://github.com/SebastianMuszynski' target='blank'>
            <img className='SocialIcons__github' src='../img/icon-github.png' alt='GitHub' />
          </a>
          <a href='#' onClick={this.copyEmailAddress}>
            <div ref='iconEmailNotifcation' className='SocialIcons__email-notification'>
              { data.email.notification.copyMsgBefore }
            </div>
            <img ref='iconEmail' className='SocialIcons__email' src='../img/icon-email.png' alt='E-mail' />
          </a>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<HomePage />, document.getElementById('app'))
