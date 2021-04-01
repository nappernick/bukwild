export const setTitleTag = (title) => {
    const titleElement = document.getElementsByTagName("title")[0]
    titleElement.innerHTML = title
}
