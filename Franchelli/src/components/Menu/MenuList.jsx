import "./MenuList.css";
import { menu_list } from "../../assets/assets";
import "dragscroll";

const MenuList = ({ category, setCategory }) => {
  
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Menu</h1>
      <div className="menu-list dragscroll">
        {menu_list.map((menu, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === menu.menu_name ? "Top Dishes" : menu.menu_name
                );
              }}
              key={index}
              className="menu-list-item"
            >
              <img
                className={category === menu.menu_name ? "active" : ""}
                src={menu.menu_image}
                alt={menu.menu_name}
              />
              <h2>{menu.menu_name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
