import React from "react";
import "./Category.scss";
const Category = ({ category, setCategory }) => {
  console.log(category);
  return (
    <div className={category === "lotto" ? `Categorymodal2` : `Categorymodal`}>
      <div
        onClick={() => setCategory("icebreak")}
        className="Categorycard  Categoryarchipelago"
      >
        <a className="Categorycard-category" href="#" title="HTML & CSS">
          <span>아이스 브레이킹</span>
        </a>
      </div>
      <div
        onClick={() => setCategory("future")}
        className="Categorycard  Categorybutte"
      >
        <a className="Categorycard-category" href="#" title="HTML & CSS">
          <span>일정 추천</span>
        </a>
      </div>
      <div
        onClick={() => setCategory("lotto")}
        className="Categorycard  Categorycanyon"
      >
        <a className="Categorycard-category" href="#" title="HTML & CSS">
          <span>대표자 뽑기</span>
        </a>
      </div>
      <div className="Categorycard  Categorydune">
        <a className="Categorycard-category" href="#" title="HTML & CSS">
          <span>Dune</span>
        </a>
      </div>
      <div className="Categorycard  Categoryestuary">
        <a className="Categorycard-category" href="#" title="HTML & CSS">
          <span>Estuary</span>
        </a>
      </div>
    </div>
  );
};

export default Category;
