import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Layout from "./Layout/Layout"
import data from "./assets/JSONData"
import { setTitleTag } from "./utils"
import Page from "./Page/Page";

function App() {
  const [jsonData, setJsonData] = useState([])
  const [selected, setSelected] = useState("")
  const [layoutData, setLayoutData] = useState([])
  const [pageData, setPageData] = useState([])
  const [title, setTitle] = useState("abc")

  const consolidatedObj = {
    "setSelected": setSelected,
    "setTitle": setTitle,
    "selected": selected,
    "layoutData": layoutData
  }

  useEffect(() => {
    if (jsonData.length) {
      let layoutDataArray = []
      let pageDataArray = {}
      jsonData.forEach(page => {
        layoutDataArray.push({
          "title": page.title,
          "slug": page.slug
        })
        pageDataArray[page.slug] = {
          "type": page.blocks[0].type,
          "headline": page.blocks[0].headline,
          "subhead": page.blocks[0].subhead,
          "cta": page.blocks[0].cta,
          "background": page.blocks[0].background,
          "slug": page.slug
        }
      })
      setLayoutData(layoutDataArray)
      setPageData(pageDataArray)
      setSelected(jsonData[0].slug)
      setTitle(jsonData[0].title)
    }
  }, [jsonData])

  useEffect(() => {
    setTitleTag(title)
  }, [title])

  useEffect(() => {
    setJsonData(data.pages)
    setTitleTag(title)
  }, [title])

  return (
    <Router>
      <div className="page__container" >
        <Layout
          consolidatedObj={consolidatedObj}
        />
        {Object.values(pageData).length && Object.values(pageData).map(page => {
          if (page.type === "marquee") {
            return (
              <Route exact path={`/${page.slug}`} render={() => (
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
