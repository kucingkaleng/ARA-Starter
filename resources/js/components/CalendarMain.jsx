import React from 'react'
import Calendar from 'react-calendar'

export default function CalendarMain () {
  return (
    <div>
      <Calendar
        value={new Date()}
      />
    </div>
  )
}