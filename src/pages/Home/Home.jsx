import React, { useState } from 'react'
import "./Home.css"
import { ExploreMenu, Header, FoodDisplay, AppDownload } from '../../components'


export const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

