import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
   const authStatus = useSelector((state) => state.auth.status);
   const navigate = useNavigate();

   const navItems = [
      {
         name: "Home",
         slug: "/",
         active: true,
      },
      {
         name: "Login",
         slug: "/login",
         active: !authStatus,
      },
      {
         name: "Signup",
         slug: "/signup",
         active: !authStatus,
      },
      {
         name: "All Posts",
         slug: "/all-posts",
         active: authStatus,
      },
      {
         name: "Add Post",
         slug: "/add-post",
         active: authStatus,
      },
   ];
   return (
      <>
         <header className="py-3 shadow bg-myNavy">
            <div className="w-full max-w-7xl mx-auto ps-4">
               <nav className="flex">
                  <div className="mx-4">
                     <Link to={"/"}>
                        <Logo width="50px" />
                     </Link>
                  </div>
                  <div className="py-2 m-1 font-mono text-xl font-semibold bg-myYellow rounded-full">
                     <h2 className="px-3">Full Stack Blog</h2>
                  </div>

                  <ul className="flex ml-auto">
                     {navItems.map((item) =>
                        item.active ? (
                           <li key={item.name}>
                              <button
                                 onClick={() => navigate(item.slug)}
                                 className="inline-block px-5 py-2 
                                 font-mono text-2xl font-semibold duration-200 hover:bg-myYellow rounded-full"
                              >
                                 {item.name}
                              </button>
                           </li>
                        ) : null
                     )}
                     {authStatus && (
                        <li>
                           <LogoutBtn />
                        </li>
                     )}
                  </ul>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;
