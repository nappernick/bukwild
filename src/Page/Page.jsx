import React from 'react'

function Page({ page }) {
    const { background, cta, headline, subhead, type } = page
    return (
        <>
            <div
                className="background"
                style={{
                    "backgroundImage": `url(/backgrounds/${background})`
                }}
            />
            <div className="head_subhead__container">
                <h1 className="title">{headline}</h1>
                <p className="subhead">{subhead}</p>
            </div>
            <div className="cta__container">
                <h2 className="cta">{cta}</h2>
                <div className="lets_talk__container">
                    <p className="lets_talk__text">LET'S TALK.</p>
                </div>
            </div>
        </>
    )
}

export default Page
