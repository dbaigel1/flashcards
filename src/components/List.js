import React from 'react'
import { Link } from "gatsby"

const List = ({title, link}) => {
    return (
        <div className="listCard">
        <Link to={`/${link}/`}> {title} </Link>
        </div>
    )
}


export default List