// import React from "react";
// import styles from "./styles/Category.module.css";
// import { Link } from "react-router-dom";
// import category from "../../JsonData/Category.json";

// function Category() {
//   return (
//     <section id="category" className={`p-3 ${styles.category_container}`}>
//       <h4 className="text-center p-2">Category</h4>
//       <div className={styles.category_products}>
//         {category.map((data, index) => (
//           <Link
//             key={index}
//             // to={"/category"}
//             className={`text-decoration-none  ${styles.category_link}`}
//           >
//             <img className={styles.category_image} src={data.image} alt="" />
//             <h6 className="text-danger text-center p-3 fw-bold ">
//               {data.name}
//             </h6>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Category;
import React, { useState } from "react";
import styles from "./styles/Category.module.css";
import { Link } from "react-router-dom";
import category from "../../JsonData/Category.json";

function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const handleNext = () => {
    if (currentIndex + imagesPerPage < category.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  return (
    <section id="category" className={`p-3 ${styles.category_container}`}>
      <h4 className="text-center p-2">Category</h4>
      <div className="d-flex justify-content-center align-items-center">
        {currentIndex > 0 && (
          <button onClick={handlePrevious} className={styles.scroll_button}>
            &lt;
          </button>
        )}
        <div className={styles.category_products}>
          {category
            .slice(currentIndex, currentIndex + imagesPerPage)
            .map((data, index) => (
              <Link
                key={index}
                to={`/category/${data.id}`} // Updated to use dynamic route
                className={`text-decoration-none ${styles.category_link}`}
              >
                <img
                  className={styles.category_image}
                  src={data.image}
                  alt={data.name}
                />
                <h6 className="text-danger text-center p-3 fw-bold">
                  {data.name}
                </h6>
              </Link>
            ))}
        </div>
        {currentIndex + imagesPerPage < category.length && (
          <button onClick={handleNext} className={styles.scroll_button}>
            &gt;
          </button>
        )}
      </div>
    </section>
  );
}

export default Category;
