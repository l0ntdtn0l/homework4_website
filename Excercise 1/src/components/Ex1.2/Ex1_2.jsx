import * as React from 'react'
import {FadeLoader} from "react-spinners";
import MyPage from "./MyPage"

export default function Ex1_2() {
  return (
    <>
        <h3 style={{color: "black"}}>Ex 1.2</h3>
        <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />} >
            <MyPage/>
        </React.Suspense>
    </>
  )
}