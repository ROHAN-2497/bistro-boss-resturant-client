import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import MenuItem from "./MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitles
        heading="form our menu"
        subHeading="Check it Out"
      ></SectionTitles>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
