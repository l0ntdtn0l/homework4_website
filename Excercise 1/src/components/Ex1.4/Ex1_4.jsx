import React from 'react'
import "typeface-roboto"
import FormGroup from "@mui/material/FormGroup"
import MyTextInput from './MyTextInput'
import MySelect from './MySelect'

export default function Ex14() {
  return (
    <>
        <h3 style={{color: "red"}}>Ex 1.4</h3>
        <FormGroup style={{width: 200, margin: 10}}>
            <MyTextInput/>
            <MySelect/>
        </FormGroup>
    </>
  )
}