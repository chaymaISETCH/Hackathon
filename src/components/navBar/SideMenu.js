import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./menu.scss";

const SideMenu = ({show,nested}) => {

  return (
    <section>
  <aside className="sidebar" style={{display:!nested?"none":"block"}}>
        
    <nav className="sidebar-nav">
 
      <ul>
        <li>
          <a href="#" className="link"><span>Option</span></a>
          <ul className="nested-nav">
            <li>
              <a href="#" className="link">Option</a>
            </li>
            <li>
              <a href="#" className="link">Option</a>
            </li>
          
             
          </ul>
        </li>
        <li>
          <a href="#" className="link">Challenges</a>
          <ul className="nested-nav">
            
              
        <Link
          className="link"
          to={{
            pathname: "/addChallenge",
          }}
        >Add new Challenge</Link>
            <li>
            
              <a href="#" className="link">Option</a>
            </li>
          
          </ul>
        </li>
        <li>
          <a href="#" className="link">Option</a>
        </li>
      </ul>
    </nav>
  </aside>
</section>
  );
}

  const mapStateToProps = state =>({
    nested : state.user.nestedMenu
  })
  export default connect(mapStateToProps)(SideMenu);
 
