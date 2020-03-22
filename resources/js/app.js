import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
require('./bootstrap')
window.$ = require('jquery')

const app = document.getElementById('app')

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => import(`./pages/${name}`).then(module => module.default)}
  />,
  app
)