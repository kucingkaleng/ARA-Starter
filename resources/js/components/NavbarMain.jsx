import React from 'react'

const handleClick = () => {
  $('#menu')
    .toggleClass('gg-menu-right')
    .toggleClass('gg-close')
}

export default function MainNavbar ({ items }) {

  const navItems = items.map(item => {
    return (
      <a key={item.id}
      className={`nav-item nav-link ${`/` + item.url == window.location.pathname ? 'active' : ''}`}
      href={item.url}>{item.name}</a>
    )
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src="/img/logo.png" />
      </a>
      {/* <div className="btn-group">
        <button type="button" className="btn btn-sm btn-primary">Boards</button>
        <button type="button" className="btn btn-sm btn-outline-primary">Analytics</button>
      </div> */}
      <a href="#!" className="navbar-toggler" data-toggle="collapse" data-target="#mainNavbar" onClick={handleClick}>
        <i id="menu" className="cssIcon gg-menu-right"></i>
      </a>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <div className="navbar-nav">
          {navItems}
        </div>
      </div>
    </nav>
  )
}