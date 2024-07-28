import React from "react";

const HeaderTitle = () => {
  return (
    <div className="flexCenter gap-2">
      <img src="/img/icon.png" className="w-[50px]" alt="" />
      <div className="flexColStart">
        <h1 className="text-2xl title-font text-orange-500">$KOZUE</h1>
        <span className="text-sm font-bold uppercase">
          Kozue is sister of Neiro.
        </span>
      </div>
    </div>
  );
};

export default HeaderTitle;
