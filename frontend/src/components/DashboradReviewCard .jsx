import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPen,faTrash} from "@fortawesome/free-solid-svg-icons";
const DashboradReviewCard  = (props) => {
  const firstLine = props.text.split(/[\n!.,]/)[0];
  return (
    <tr className='table-row'>
        <td className='table-data'>{props.id}</td>  
        <td className='table-data'>{props.product_id}</td>  
        <td className='table-data'>{props.title}</td> 
        <td className='table-data'>{props.rate}</td> 
        <td className='table-data'>{props.country}</td> 
        <td className='table-data'>{props.date}</td> 
        <td className='table-data'>{firstLine}</td>
        <td className='table-data'><FontAwesomeIcon className='sideNavbar-item-icon edit-icon' icon={faPen} /></td> 
        <td className='table-data'><FontAwesomeIcon className='sideNavbar-item-icon edit-icon'  icon={faTrash} /></td>
        </tr>
  )
}

export default DashboradReviewCard 