const Header = (props) => {
    const isLoggedIn = !!props.username; //!! osiguravaju tocnost podataka koje cemo primati
    return(
        <> {/*prazan react fragment, služi istu svrhu kao <div>, ali manje opterećuje DOM*/}
        {isLoggedIn &&
         <div className="App-header">
         <button onClick={props.toggleSidebar}>
          MENU
         </button>
         <h1>{props.username}'s chat room</h1>
         <button onClick={props.handleLogout}>Logout</button>
       </div>
       }

       {!isLoggedIn &&
        <div className="App-header">
       <div></div>
        <h1>Hi there!</h1>
        <div></div>
      </div>
      }

      </>
    )
}

export default Header;
