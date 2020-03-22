import React from 'react'
import Layout from './layouts/MainLayout'
import ListTreeSimple from '../components/ListTreeSimple'

export default function Pager(props) {
  return (
    <Layout {...props} title="Pager">
      <div className="container">
        <h3>Pager</h3>
        <div className="row my-5">
          <div className="col-lg-5">

            <input className="form-control mb-3" placeholder="Type and search" />
            <ul className="list-group">
              <ListTreeSimple lists={props.menus} />
            </ul>

          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-header">
                <span className="card-title">Add Menu</span>
              </div>
              <div className="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}