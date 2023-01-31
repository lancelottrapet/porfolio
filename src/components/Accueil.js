import React from "react";

const Accueil  = () =>{
    return( 
        <div className="acceuil">
    <div className="title-img-div">
    <img src= '/fond1.png' alt="title-background" className="title-background"/>
    <div className="title-img-h-div">
            <h2>Hello, I am</h2>
            <h1>Lancelot Trapet</h1>
            <h2>Full-Stack Web Developer</h2>
          </div>
   </div>
   
   <div className="title-sidebar-div">
        <img src= '/profile.jpg' alt="title-linkedin-icon" className="title-linkedin-icon"/> 
        <h3>Lancelot Trapet</h3>
        <h4 className="title-profession-h4">Full-Stack Web Developer</h4>
        <img src="full_stack.png" alt="title-fullstack-icon" className="title-fullstack-icon" />
        <h4 className="title-email-h4">lancelot.trapet@hotmail</h4>
         </div>
    </div>
    );
};


export default Accueil;