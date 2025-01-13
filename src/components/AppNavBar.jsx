import { NavLink } from "react-router-dom";

function AppNavBar() {
    const pages = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/posts",
            name: "Recipes"
        },
        {
            path: "/about",
            name: "About Us"
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to={pages[0].path} className="my-title fs-3 navbar-brand">JUST COOK</NavLink>
                <ul className="navbar-nav">
                    {pages.map((curPage) => <li className="nav-item" key={curPage.name}>
                        <NavLink to={curPage.path} className="nav-link my-title">{curPage.name}</NavLink>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
}

export default AppNavBar