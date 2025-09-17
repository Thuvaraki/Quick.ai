import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  // UseNavigate hoook is use for navigations; When the logo img clicked, will be re-directed to home page
  const navigate = useNavigate();
  const { user } = useUser(); //A hook that gives the currently signed-in user.
  const { openSignIn } = useClerk(); //A hook that gives access to Clerk’s API, like opening the sign-in modal.
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {/* Must wrap any JavaScript logic (like ternaries, function calls, variables) inside {} in JSX. 
          Ifweu write without curly braces:React will throw an error, because JSX doesn’t know how to handle raw JS without {}. */}
      {user ? (
        // UserButton is a ready-made component that shows the user’s profile picture and a dropdown menu (sign out, manage account)
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
