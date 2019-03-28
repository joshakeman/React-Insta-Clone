import React from 'react'
import './searchBar.css'
import styled from "styled-components";


const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`

const UserIcons = styled.div`
    padding: 0 6px;
    display: flex;
    align-items: center;
`

const SearchBar = (props) => {
    return (
    <Header>
        <Logo>
            <img src={process.env.PUBLIC_URL + '/img/instagram-brands.svg'} alt="" className="instagram-icon"/> | <h2 className="search-bar">Instagram</h2>
        </Logo>
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
        <UserIcons>
            <img src={process.env.PUBLIC_URL + '/img/user-regular.svg'} alt="" className="instagram-icon"/>
            <img src={process.env.PUBLIC_URL + '/img/compass-regular.svg'} alt="" className="instagram-icon"/>
            <img src={process.env.PUBLIC_URL + '/img/heart-regular.svg'} alt="" className="instagram-icon"/>
            <button onClick={props.logout} className="logout-button">Logout</button>
        </UserIcons>        
    </Header>
    )
}

export default SearchBar