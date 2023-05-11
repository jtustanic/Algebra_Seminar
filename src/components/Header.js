const Header = (props) => {
    const isLoggedIn = !!props.username; //!! osiguravaju tocnost podataka koje cemo primati
    return(
        <> {/*prazan react fragment, služi istu svrhu kao <div>, ali manje opterećuje DOM*/}
        {isLoggedIn && 
         <div className="App-header">
         <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
         <h1>{props.username}'s Chat Room</h1>
         {/* Prazan div služi za flex pozicioniranje elemenata */}
         <div></div>
       </div>
       }
       
       {!isLoggedIn &&
        <div className="App-header">
       <div></div>
        <h1>Chat App</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>
      }

      </>
    )
}

export default Header;