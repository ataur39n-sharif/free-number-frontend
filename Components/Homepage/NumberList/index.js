import { useState } from "react";
import { Row } from "react-bootstrap";
import SingleNumber from "./SingleNumber";

const NumberList = ({ value }) => {

  const [arr, setArr] = useState([])
  const [alert, setAlert] = useState(false)

  useState(() => {
    const sortedData = value.sort((a, b) => {
      let x = a.country_code.toUpperCase()
      let y = b.country_code.toUpperCase()
      return x == y ? 0 : x > y ? 1 : -1;
    })
    setArr(sortedData)
  }, [])



  // pagination index handler
  const [pIndex, setPIndex] = useState(0);

  // pagination handler using buttons
  const gotoNext = () => {
    setAlert(!alert)
    return pIndex < arr.length - 15 && setPIndex(pIndex + 15)
  };
  const gotoPrevious = () => {
    setAlert(!alert)
    return pIndex > 15 ? setPIndex(pIndex - 15) : setPIndex(0);
  }

  const goto = (num) => {
    setAlert(!alert)
    setPIndex(num);
  };
  const middleBtnAmount = Math.ceil(arr.length / 15);
  let btnGurbageArray = [];
  for (let i = 0; i < middleBtnAmount; i++) {
    btnGurbageArray.push(i);
  }

  return (
    <>
      <div className="container" style={{ minHeight: "51vh" }}>
        <Row lg={4} md={2} sm={1}>
          {arr.slice(pIndex, pIndex + 15).map((each, i) => {
            // console.log(pIndex)
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
              onClick={() => goto(pageNumber * 15)}
              className={`${pIndex / 15 === pageNumber && "current-page"
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
