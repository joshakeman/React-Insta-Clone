import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './searchBar.css'

// library.add(faInstagram)

const SearchBar = (props) => {
    return (
    <div className='header'>
        <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/img/instagram-brands.svg'} alt="" className="instagram-icon"/> | <h2 className="search-bar">Instagram</h2>
        </div>
        <div className="search-input">
            <form onSubmit={props.filterPosts}>
                <input 
                type="text" 
                placeholder="Search.."
                name="search"
                onChange={props.handleChanges}
                ></input>
            </form>
        </div>
        <div className="user-icons">
            <img src={process.env.PUBLIC_URL + '/img/user-regular.svg'} alt="" className="instagram-icon"/>
            <img src={process.env.PUBLIC_URL + '/img/compass-regular.svg'} alt="" className="instagram-icon"/>
            <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} alt="" className="instagram-icon"/>
        </div>
        
    </div>
    )
}

export default SearchBar