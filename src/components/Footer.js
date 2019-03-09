import React from 'react';

function Footer() {

    return (
        <div> 
            <h2> Technology used on the project</h2>
        <ul>
            <li title="react" ><i className="fab fa-react fa-5x" value="react"></i></li>
            <li title="node package manager"><i className="fab fa-npm fa-5x"></i></li>
            <li title="HTML5"><i className="fab fa-html5 fa-5x"></i></li>
            <li title="Font Awesome"> <i className="fab fa-font-awesome-flag fa-5x"></i> </li>
            <li title="The Mobie Db API"><i className="fab fa-imdb fa-5x"></i></li>
            <li title="Open Weather API"><i className="fas fa-cloud-sun-rain fa-5x"></i></li>
        </ul>



        </div>
    )
}

export default Footer;