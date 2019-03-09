import React from 'react';
import './RakutenMenu.css';
import photo from './photo.jpg';

function RakutenMenu() {
    return(
<div className="nav">
    <ul>
        <li className="brand">Rakuten TV</li>
        <li className="react"> 
        <div className="dropdown">
  <button className="dropbtn">Components</button>
  <div className="dropdown-content">
    <div> RakutenMenu  </div>
    <div> Weather </div>
    <div> Movies </div>
    <div> Footer </div>
  </div>
</div>
        
         </li>
        <li> <i className="fas fa-search search"></i>  <input className="search" placeholder="⌕ Don't Search"></input>  </li>

       
        <li className="github"> <a href="https://github.com/martinrebo/React-movie-and-moods">
        <div className="text"> Github  </div> 
          <img src="https://img.icons8.com/windows/26/000000/github.png" alt=""></img></a> </li>
          <li className="user">  <a href="https://martinreboredo.com/">
          <div className="text">  Martin </div>
          <img src={photo} alt=""/> </a></li>

    </ul>
</div>
        
    )
}

export default RakutenMenu;