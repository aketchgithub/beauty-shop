import { useState } from "react";

const Sidebar = ({ setCategory }) => {

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([
    "All",
    "Serums",
    "Makeup",
    "Masks",
    "Toners",
    "Eye Creams"
  ]);

  const handleClick = (category) => {
    if (category === "All") {
      console.log("All category")
      setCategory(null);
    } else {
      setCategory(category);
    }
  };

  return (
    <div className="p-0 mt-8 text-left h-screen w-44 bg-white ">
      <h2 className="text-m font-bold mb-5">PRODUCT CATEGORIES</h2>
      <ul className="p-0">
        {categories.map((category) => (
          <li 
            key={category}
            className="cursor-pointer mb-3 text-gray-500 text-m font-semibold hover:text-pink"
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
   </div>
  );
};

export default Sidebar;