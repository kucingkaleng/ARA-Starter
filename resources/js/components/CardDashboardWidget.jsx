import React from 'react'

export default function CardDashboardWidget ({ color, title, text, faIconName, textColor }) {
  return (
    <div className={`card card-dashboard-widget bg-${color}`}>
      <h3 className={`card-title text-${textColor}`}>{title}</h3>
      <span className={`card-text text-${textColor}`}>{text}</span>
      <div className={`card-icon text-${textColor}`}>
        <i className={`fa fa-${faIconName}`}></i>
      </div>
    </div>
  )
}