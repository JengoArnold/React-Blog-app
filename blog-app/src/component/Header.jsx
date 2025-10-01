import { Link } from "react-router";



function Header() {
    return(
        
<header>
  <h1>Routing</h1>
  <ul>
    <li>
      <link to="/">Home</link>
    </li>
<li>
    <link to='about'>About</link>
</li>


   {/*<li>
      <link to="/404">NotFound</link>
    </li>*/} 
  </ul>
</header>

    )
    
}
export default Header;