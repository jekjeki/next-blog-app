import React from 'react'
import classes from './notification.module.css'

function Notification(props) {
  const {status, title, message} = props

  let cssClass = ''

  if(status == 'success'){
    cssClass = classes.success
  }

  if(status == 'error'){
    cssClass = classes.error
  }

  const styling = `${classes.notification} ${cssClass}`

  return (
    <div className={styling}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Notification