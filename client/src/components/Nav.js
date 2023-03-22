import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
        return (
        <ul className="flex-row">
            <li className="mx-1">
                <Link to="/profile">
                    Saved Recipes
                </Link>
            </li>
            
            {/* <li className="mx-1">
              <Link to="/ChefMode">
                  Chef Mode
              </Link>
            </li> */}
            
            {/* <li className="mx-1">
              <Link to="/favorite">
                  My Recipes
              </Link>
            </li> */}
            
            {/* <li className="mx-1">
              <Link to="/DoGroceries">
                  Do Groceries
              </Link>
            </li>  */}
            
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                  Log Out
              </a>
            </li>
        </ul>
    );
    } else {
        return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
                Log In
            </Link>
          </li>
          
          <li className="mx-1">
            <Link to="/signup">
                Sign Up
            </Link>
            </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="spaghetti-plate">🍝 </span>
          EasyMeals
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
