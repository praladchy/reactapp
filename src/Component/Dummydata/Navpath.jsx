import Home from "../../Page/Home/Home"
import Bussiness from "../../Page/Bussiness/Bussiness"
import Contacts from "../../Page/contact/Contacts"
import Politics from "../../Page/Politics/Politics"
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
  
];
export {Navpath};