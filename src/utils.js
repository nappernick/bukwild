export const setTitleTag = (title) => {
    const titleElement = document.getElementsByTagName("title")[0]
    titleElement.innerHTML = title
}

export const buildJsonData = (jsonData, setLayoutData, setPageData, setSelected, setTitle) => {
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
