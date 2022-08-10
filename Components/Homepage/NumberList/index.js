import { useState } from "react";
import { Row } from "react-bootstrap";
import SingleNumber from "./SingleNumber";

const NumberList = ({ value }) => {
  const arr = Object.entries(value);

  console.log(arr);

  // pagination index handler
  const [pIndex, setPIndex] = useState(0);

  // pagination handler using buttons
  const gotoNext = () => pIndex < arr.length - 20 && setPIndex(pIndex + 20);
  const gotoPrevious = () =>
    pIndex > 20 ? setPIndex(pIndex - 20) : setPIndex(0);
  const goto = (num) => {
    setPIndex(num);
  };
  const middleBtnAmount = Math.ceil(arr.length / 20);
  let btnGurbageArray = [];
  for (let i = 0; i < middleBtnAmount; i++) {
    btnGurbageArray.push(i);
  }

  return (
    <>
      <div className="container" style={{ minHeight: "51vh" }}>
        <Row lg={4} md={2} sm={1}>
          {arr?.slice(pIndex, pIndex + 20).map((each, i) => {
            return <SingleNumber data={each} key={i} />;
          })}
        </Row>
      </div>
      <div className="pagination-handler mt-5">
        <button onClick={gotoPrevious} className="previous-btn btn">
          Previous
        </button>
        {btnGurbageArray.map((pageNumber, i) => {
          return (
            <button
              key={i}
              onClick={() => goto(pageNumber * 20)}
              className={`${
                pIndex / 20 === pageNumber && "current-page"
              } btn px-3 py-1`}
            >
              {pageNumber + 1}
            </button>
          );
        })}
        <button onClick={gotoNext} className="next-btn btn">
          Next
        </button>
      </div>
    </>
  );
};

export default NumberList;
