import React from 'react';
import PropTypes from 'prop-types';

// first way of accessing props
// export default function Example({title, status, num}) {
//   return (
//     <div>
//       {status ? <h1>{title}</h1> : <h1>{num}</h1>}
//     </div>
//   )
// }

// second way of accessing props via props
// export default function Example(props) {
//   return (
//     <div>
//       {props.status ? <h1>{props.title}</h1> : <h1>{props.num}</h1>}
//     </div>
//   )
// }
//Third way of accessing props via props destructuring
export default function Example(props) {
  const {title, status, num} = props;
  return (
    <div>
      {/* if status = true, show left side  else else right*/}
      {status ? <h1>{title}</h1> : <h1>{num}</h1>}
      {/* if status = true, show this else None*/}
      {status && (  <>
                      <h1>{title}</h1>
                      <h2>{num}</h2>
                    </>
                  )
      }
    </div>
  )
}
//except string all props define inside {}
//defining type of properties
Example.propTypes = {
  title: PropTypes.string,
  num: PropTypes.number,
  status: PropTypes.bool,
}