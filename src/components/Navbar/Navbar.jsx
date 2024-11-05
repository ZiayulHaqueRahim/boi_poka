import { NavLink } from "react-router-dom";

const Navbar = () => {


    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/dashboard'>Listed Books</NavLink></li> 
       <li><NavLink to='/pages'>Pages to Read</NavLink></li> 
    
    
    </>

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content btn btn-outline mx-5 btn-info bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-6">
                        
                        {links}
                       
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Boi Poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal btn btn-outline btn-info flex gap-6 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <NavLink className="btn btn-outline btn-info ">Log In</NavLink>
                <NavLink className="btn btn-outline btn-info ">Sign Up</NavLink>
            </div>
        </div>

    );
};

export default Navbar;