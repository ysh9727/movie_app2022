import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// , useContext

// export default class Detail extends React.Component {
//   componentDidMount() {
//     const navigate = useNavigate();
//     console.log(navigate);
//   }

//   render() {
//     return <span>hello</span>;
//   }
// }


// async, await 사용해보자
export default function Detail () {
  const NavigateFunction = (move) => {
    useEffect(() => {
      navigate(move);
    })
  }
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  if (location.state === null) {
    NavigateFunction("/");
  }
  // console.log(navigate(-1));

  return <span>{location.state.title}</span>;
}