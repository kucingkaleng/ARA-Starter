import React from 'react'

export default function ListTreeSimple(props) {

  let lists = []

  function getTreeView (items) {
    items.map(item => {
      lists.push(
        <li 
          key={item.id}
          className={`list-group-item cursor-pointer ${item.parent_id ? `child-`+item.parent_id : ''}`}
          onClick={() => handleClick(item.id)}
        >
          <i className={`fa fa-caret-right`} style={{ padding: `0 ${0.5 * item.level}rem`}}></i>
          <i className={`fa fa-${item.fa_icon} mr-2`}></i>
          {item.name}
        </li>
      )
      if (typeof item.children !== 'undefined' && item.children.length > 0) {
        getTreeView(item.children)
      }
    })

    return lists
  }

  function handleClick (id) {
    let elements = document.querySelectorAll('.child-'+id)
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('listtree-slide')
    }
  }

  return getTreeView(props.lists)
}