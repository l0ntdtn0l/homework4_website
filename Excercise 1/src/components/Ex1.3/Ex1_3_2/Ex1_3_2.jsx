import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import PeopleContainer from "./PeopleContainer"

export default function Ex132() {
  return (
    <>
        <h3 style={{color: "red"}}>Ex 1.3.2</h3>
        <BrowserRouter>
            <Switch>
                <Route path="/people">
                    <PeopleContainer/>
                </Route>
                <Link to="/people">People</Link>
            </Switch>
        </BrowserRouter>
    </>
  )
}