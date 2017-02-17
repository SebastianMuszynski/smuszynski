import React from 'react'
import ReactDOM from 'react-dom'
import IconEmail from './IconEmail'
import data from '../data/en'
import '../css/HomePage'

const HomePage = React.createClass({
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
          <IconEmail data={data} />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<HomePage />, document.getElementById('app'))
