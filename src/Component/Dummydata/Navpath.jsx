import Home from "../../Page/Home/Home"
import Bussiness from "../../Page/Bussiness/Bussiness"
import Contacts from "../../Page/contact/Contacts"
import Politics from "../../Page/Politics/Politics"
import Login from "../../Page/Login/Login"
import SignUp from "../../Page/SignUp/SignUp"
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
    }, {
        url: "/SignUp",
        element: <SignUp/>
    },
];
export {Navpath};