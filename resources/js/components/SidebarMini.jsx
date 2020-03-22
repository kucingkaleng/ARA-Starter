import React, { useEffect } from 'react'
import { InertiaLink, useRememberedState } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import SidebarChild from './SidebarChild'

export default function SidebarMini ({ items }) {

  /**
   * Initialize local state
   * activeMenu : to get current url
   * children : 
   */
  const [state, dispatch] = useRememberedState({
    activePath: window.location.pathname,
    activeParent: 0,
    children: []
  })

  /**
   * Initialize sidebar items for parent
   */
  const navItems = items.map(item => {

    if (`/` + item.url == state.activePath && item.level == 1) {
      state.activeParent = item.id
    }

    return (
      <InertiaLink
        key={item.id}
        href={item.url}
        className={`icon ${`/` + item.url == state.activePath ? 'active' : ''}`}      
      >
        <i className={`fa fa-${item.fa_icon}`}></i>
      </InertiaLink>
    )
  })

  /**
   * Effects
   */
  useEffect(() => {

    // Get Children
    let parent = items.filter(item => item.id == state.activeParent)

    // Set children to state
    dispatch({
      ...state,
      children: parent[0].children
    })

  }, [])

  /**
   * Render
   */
  return (
    <>
      <div className="sidebarMini">
        <div className="top">
          <a href="#!" className="icon">
            <i className="fa fa-code"></i>
          </a>
        </div>

        <div className="center">
          <div className="sidebar-items">
            {navItems}
          </div>
        </div>

        <div className="bottom">
          <img src="/img/dp.jpg" alt="" />
        </div>
      </div>

      <SidebarChild items={state.children} />
    </>
  )
}