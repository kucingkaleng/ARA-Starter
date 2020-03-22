import React, { useEffect, Suspense } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import MainNavbar from '../../components/NavbarMain'
import SidebarMini from '../../components/SidebarMini'

export default function Layout({ title, children, menuParent, meta }) {
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <main>
      <div className="mainLeft">
        
        <SidebarMini items={menuParent} />

      </div>

      <div className="mainRight container-fluid">
        <MainNavbar items={[]} />

        {children}

        <div className="container-fluid mainFooter">
          <p>Copyright &copy; 2020 Adeardo Dora Harnanda</p>
        </div>
      </div>
    </main>
  )
}