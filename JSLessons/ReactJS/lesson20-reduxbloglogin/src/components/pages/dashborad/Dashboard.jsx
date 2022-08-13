import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardItem from './DashboardItem'

const Dashboard = (props) => {
  return (
    <div>
        <Link to="/addblog" className='btn btn-primary'>Add</Link>
        <table className="table">
    <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody>

    {props.deyer.map(calldata=>{
        return <DashboardItem key={calldata.id} {...calldata}/>
      })}
     
    </tbody>
  </table>
</div>
  )
}

const mapStateToProps = (state)=>{
    return{
      deyer: state.item
    }
  }
  

export default connect(mapStateToProps)(Dashboard)