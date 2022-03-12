import React from 'react'
import VerticalTabs from '../component/SideBar'
//import FullFeaturedCrudGrid from '../component/Tuesday'




const Main = () => {
  return (
    <div className='main' style={{ width:"100%", height:"500px",  margin:"auto", justifyContent:"center", alignItems:"center"}}>
        <VerticalTabs style={{ width:"100%", height:"500px", backgroundColor:"yellow", margin:"auto", justifyContent:"center"}} />
      
    </div>
  )
}

export default Main