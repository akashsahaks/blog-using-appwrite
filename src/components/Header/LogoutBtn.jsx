import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
   const dispatch = useDispatch();

   const logoutHandler = () => {
      authService.logout().then(() => {
         dispatch(logout());
      });
   };

   return (
      <button
         onClick={logoutHandler}
         className="inline-block px-5 py-2 font-mono
         text-2xl font-semibold duration-200 hover:bg-myYellow rounded-full"
      >
         Logout
      </button>
   );
};

export default LogoutBtn;
