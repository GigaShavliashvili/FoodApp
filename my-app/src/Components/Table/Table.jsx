import React from 'react'
import './table.scss'
const Table = props => {
  return (
       <div>
            <div className="table-wrapper">
    <table>
        {props.headData && props.renderHead ? (
         <thead>
             <tr>
                 {props.headData.map((item,index) => props.renderHead(item,index))}
             </tr>
         </thead>
        ) : "No Value"}
   {props.bodyData && props.renderBody ? (
       <tbody>
           {props.bodyData.map((item,index) => props.renderBody(item,index))}
       </tbody>
   ) : "No Value"}
    </table>
    </div>
    </div>
  )
}

export default Table