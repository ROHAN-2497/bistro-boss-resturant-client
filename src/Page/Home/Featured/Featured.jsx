import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-items text-white pt-8 my-20 bg-fixed ">
      <SectionTitles
        subHeading="check it out"
        heading="from our menu"
      ></SectionTitles>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20,2023</p>
          <p className="uppercase">where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            facere possimus illo. Possimus cumque saepe magnam. Sint eaque
            mollitia inventore libero consectetur, sunt rerum voluptate aliquam!
            Obcaecati magni dolore sed quis aut quos odio aspernatur distinctio
            natus ullam perspiciatis totam blanditiis deleniti pariatur commodi
            voluptate, praesentium unde saepe consequatur consectetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
