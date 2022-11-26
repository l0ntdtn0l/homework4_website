import "typeface-roboto"
import React, {useState} from "react"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import First from "./First"
import Second from "./Second"
import Third from "./Third"

export default function Ex13({links}) {
    const [open, setOpen] = useState(false)
    function toggleDrawer({type, key})
    {
        if (type === "keydown" && (key === "Tab" || key === "Shift"))
        {
            return
        }
        setOpen(!open)
    }
    return(
        <>
        <h3 style={{color: "red"}}>Ex 1.3</h3>
        <Router>
            <Button onClick={toggleDrawer}>
                Open Nav
            </Button>
            <section>
                <Route path="/first" component={First} />
                <Route path="/second" component={Second} />
                <Route path="/third" component={Third} />
            </section>
            <Drawer open={open} onClose={toggleDrawer}>
                <div 
                    style={{width: 250}}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        {links.map((link) => (                            
                            <ListItem button key={link.url} component={Link} to={link.url}>
                                <Switch>
                                    <Route 
                                        exact
                                        path={link.url}
                                        render={() => (
                                            <ListItemText
                                                primary={link.name}
                                                primaryTypographyProps={{color: "primary"}}
                                            />
                                        )}
                                        
                                    />
                                    <Route 
                                    path="/"
                                    render={() => <ListItemText primary={link.name} />}
                                    />
                                </Switch>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </Router>
        </>
    )
}

Ex13.defaultProps = {
    links: [
        {url: "/first", name: "First Page"},
        {url: "/second", name: "Second Page"},
        {url: "/third", name: "Third Page"}
    ],
}