import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Layout from "./Layout/Layout"
import data from "./assets/JSONData"
import { setTitleTag, buildJsonData } from "./utils"
import Page from "./Page/Page";

function App() {
  const [jsonData, setJsonData] = useState([])
  const [selected, setSelected] = useState("")
  const [layoutData, setLayoutData] = useState([])
  const [pageData, setPageData] = useState([])
  // Defaults to "abc" so it's not blank during initial load
  const [title, setTitle] = useState("abc")

  // Save on component prop fields by consolidating into a single object
  const consolidatedObj = {
    "setSelected": setSelected,
    "setTitle": setTitle,
    "selected": selected,
    "layoutData": layoutData
  }
  // Cleaned up long use effect function to buildJsonData in utils
  useEffect(() => {
    if (jsonData.length) {
      buildJsonData(jsonData, setLayoutData, setPageData, setSelected, setTitle)
    }
  }, [jsonData])

  // This sets the text that updates the page title
  useEffect(() => {
    setTitleTag(title)
  }, [title])

  // This actually updates the title element in the head
  useEffect(() => {
    setJsonData(data.pages)
    setTitleTag(title)
  }, [title])

  // For faster image load, could create useEffect that fetches all images on 
  // page load, instead of requiring the browser to fetch each as the user
  // navigates between pages

  return (
    <Router>
      <div className="page__container" >
        <Layout
          consolidatedObj={consolidatedObj}
        />
        {Object.values(pageData).length && Object.values(pageData).map(page => {
          if (page.type === "marquee") {
            return (
              <Route exact path={`/${page.slug}`} key={page.slug} render={() => (
                <Page page={page} />
              )} />)
          }
          return <></>
        })}
      </div >
    </Router>
  );
}

export default App;
