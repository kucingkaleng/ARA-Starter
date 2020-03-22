import React from 'react'

export default function SidebarChild({ items }) {

  /**
   * Initialize sidebar items
   */
  const navItems = items.map(item => {
    if (item.type != 'group') {
      return (
        <a key={item.id} href={item.url} className="sidebar-item">
          <div className="icon"><i className={`fa fa-${item.fa_icon}`}></i></div>
          <span className="text">{item.name}</span>
        </a>
      )
    }

    return (
      <p className="title">{item.title}</p>
    )
  })

  return (
    <div className={`sidebarChild ${items.length <= 0 ? 'hide' : ''}`}>
      <div className="sidebar-items">
        <a href="#!" className="sidebar-item active">
          <div className="icon"><i className="fa fa-bar-chart"></i></div>
          <span className="text">Dashboard</span>
        </a>

        {navItems}

        <p className="title">Customization</p>
        <a href="#!" className="sidebar-item">
          <div className="icon"><i className="fa fa-th-large"></i></div>
          <span className="text">Layouts</span>
        </a>
        <a href="#!" className="sidebar-item">
          <div className="icon"><i className="fa fa-cubes"></i></div>
          <span className="text">Widgets</span>
        </a>
      </div>
    </div>
  )
}