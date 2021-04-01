import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Layout from "./Layout/Layout"
import data from "./assets/JSONData"
import { setTitleTag, buildJsonData } from "./utils"
import Marquee from "./Marquee/Marquee";

function App() {
  const [jsonData, setJsonData] = useState([])
  const [selected, setSelected] = useState("")
  const [layoutData, setLayoutData] = useState([])
  const [marqueeData, setMarqueeData] = useState([])
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
      buildJsonData(jsonData, setLayoutData, setMarqueeData, setSelected, setTitle)
    }
  }, [jsonData])

  // This sets the text that updates the page title
  useEffect(() => {
    setTitleTag(title)
  }, [title])

  // This actually updates the title element in the head
  useEffect(() => {
    // Had to use a local file because the provided URL had CORS protection
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
        {/* Checks that the data for the Marquee object is present before map */}
        {Object.values(marqueeData).length && Object.values(marqueeData).map(page => {
          // Only creates a Page/Marquee component for marquee data from JSON
          if (page.type === "marquee") {
            return (
              <Route exact path={`/${page.slug}`} key={page.slug} render={() => (
                <Marquee page={page} />
              )} />)
          }
          return <></>
        })}
      </div >
    </Router>
  );
}

export default App;
