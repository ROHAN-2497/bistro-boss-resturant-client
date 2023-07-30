import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter((item) => item.category === "popular");
        setMenu(PopularItems);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitles
        heading="form our menu"
        subHeading="Check it Out"
      ></SectionTitles>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
