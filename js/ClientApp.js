import React from 'react'
import ReactDOM from 'react-dom'
import '../css/HomePage'

const HomePage = React.createClass({
  render () {
    return (
      <div className='HomePage'>
        <div className='Introduction'>
          <div className='Introduction__name'>Sebastian Muszynski</div>
          <div className='Introduction__description'>Front-End Web Developer</div>
        </div>
        <div className='SocialIcons'>
          <a href='https://www.linkedin.com/in/muszynskisebastian' target='blank'>
            <img className='SocialIcons__linkedin' src='../img/icon-linkedin.png' alt='LinkedIn' />
          </a>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<HomePage />, document.getElementById('app'))
