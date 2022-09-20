import { NavLink } from "react-router-dom";
const BottomNavigation = ({NavData}) => {
 
  return (
    <div className="bottom-nav-container">
      {NavData.map((each, index) => (
        <div className="bottom-nav" key={index}>
          <NavLink to={each.url}>{each.lable}</NavLink>
        </div>
      ))}
    </div>
  );
};
export default BottomNavigation;
