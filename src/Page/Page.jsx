import React from 'react'

function Page({ page }) {
    const { background, cta, headline, subhead } = page
    return (
        <>
            <img src={`/backgrounds/${background}`} alt="Background" className="background" />
            <div className="head_subhead__container">
                <div className="title">{headline}</div>
                <div className="subhead">{subhead}</div>
            </div>
            <div className="cta__container">
                <h2 className="cta">{cta}</h2>
                <div className="lets_talk__text">LET'S TALK.</div>
            </div>
        </>
    )
}

export default Page
