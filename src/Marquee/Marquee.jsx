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
                <a
                    className="cta__text"
                    href="https://calendly.com/nickfmatthews/bukwild-chat"
                    rel="noopener noreferrer"
                    target="_blank"
                >LET'S TALK.</a>
            </div>
        </>
    )
}

export default Page
