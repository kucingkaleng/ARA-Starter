import React from 'react'
import Layout from './layouts/MainLayout'
import { Bar } from 'react-chartjs-2'
import CardDashboardWidget from '../components/CardDashboardWidget'
import CalendarMain from '../components/CalendarMain'

/**
 * Widgets
 */
const widgets = [
  {
    title: 'User',
    text: Math.floor(Math.random() * 9000),
    color: 'primary',
    textColor: 'light',
    faIconName: 'user'
  },
  {
    title: 'Agenda',
    text: Math.floor(Math.random() * 9000),
    color: 'success',
    textColor: 'light',
    faIconName: 'calendar'
  },
  {
    title: 'Items',
    text: Math.floor(Math.random() * 9000),
    color: 'warning',
    textColor: 'light',
    faIconName: 'shopping-bag'
  },
  {
    title: 'Progress',
    text: Math.floor(Math.random() * 9000),
    color: 'danger',
    textColor: 'light',
    faIconName: 'clock-o'
  }
]

const widgetElements = widgets.map(data => (
  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
    <CardDashboardWidget color={data.color} textColor={data.textColor} title={data.title} text={data.text} faIconName={data.faIconName} />
  </div>
))

/**
 * End Widgets
 */

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '#8F50FE',
    borderColor: '#8F50FE',
    data: [0, 10, 5, 2, 20, 30, 45]
  }]
}

export default function Home(props) {
  return (
    <Layout {...props} title="Dashboard">
      <div className="container-fluid">
        <h3>Dashboard</h3>
        <div className="row mb-5">
          {widgetElements}
        </div>

        <div className="row">
          <div className="col-12">
            <h3>Datasets</h3>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Bar data={data} />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <CalendarMain />
          </div>
        </div>
      </div>
    </Layout>
  )
}