import React from 'react'
import "typeface-roboto"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"

const tabContentStyle = {
    padding: 16,
}

function TabContainer({value}) {
    return(
        <AppBar position="static">
            <Tabs value={value}>
                <Tab label="Item One" LinkComponent={Link} to="/" />
                <Tab label="Item Two" LinkComponent={Link} to="/page2"/>
                <Tab label="Item Three" LinkComponent={Link} to="/page3"/>
            </Tabs>
        </AppBar>
    )
}

export default function Ex131() {
  return (
    <>      
        <h3 style={{color: "red"}}>Ex 1.3.1</h3>
        <Router>
            <Route 
                exact
                path="/"
                render={() => (
                    <>
                        <TabContainer value={0} />
                        <Typography component="div" style={tabContentStyle}>
                            Item One
                        </Typography>
                    </>
                )}
            />
            <Route 
                exact
                path="/page2"
                render={() => (
                    <>
                        <TabContainer value={1} />
                        <Typography component="div" style={tabContentStyle}>
                            Item Two
                        </Typography>
                    </>
                )}
            />
            <Route 
                exact
                path="/page3"
                render={() => (
                    <>
                        <TabContainer value={2} />
                        <Typography component="div" style={tabContentStyle}>
                            Item Three
                        </Typography>
                    </>
                )}
            />
        </Router>
    </>
  )
}