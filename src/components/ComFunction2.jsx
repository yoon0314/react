import { Fragment } from "react/jsx-runtime";

// function ComFunction2(){
//     return(
//         <Fragment>
//             <h2>함수 컴포넌트</h2>
//             <p>return>div,section,fragment 등 묶을 수 있는태그 순서</p>
//         </Fragment>
//     )
// }

// export default ComFunction2

//or

// export default function ComFunction2(){
//       return(
//         <Fragment>
//             <h2>함수 컴포넌트</h2>
//             <p>return>div,section,fragment 등 묶을 수 있는태그 순서</p>
//         </Fragment>
//     )
// }

//or

let ComFunction2 =()=> {
      return(
        <Fragment>
            <h2>함수 컴포넌트</h2>
            <p>return div,section,fragment(괄호만 있어도 됨)
                 등 묶을 수 있는태그 순서</p>
        </Fragment>
    )
}

export default ComFunction2