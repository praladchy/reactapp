import Home from "../../Page/Home/Home"
import Bussiness from "../../Page/Bussiness/Bussiness"
import Contacts from "../../Page/contact/Contacts"
import Politics from "../../Page/Politics/Politics"
import Login from "../../Page/Login/Login"
import SignUp from "../../Page/SignUp/SignUp"
import LoginSignUp from "../../Page/Login/LoginSignUp"
const Navpath = [
    {
        url: "/",
        element: <Home />,
    },
    {
        url: "/Contacts",
        element: <Contacts />,
    },
    {
        url: "/Politics",
        element: <Politics />,
    },
    {
        url: "/Bussiness",
        element: <Bussiness />,
    },
    {
        url: "/Login",
        element: <Login/>
    }, 
    {
        url: "/SignUp",
        element: <SignUp/>
    },
    // {
    //     url: "/LoginSignUp",
    //     element: <LoginSignUp/>
    // },
];
export {Navpath};