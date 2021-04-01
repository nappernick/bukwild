import React from 'react'

function Page({ page }) {
    const { background, cta, headline, subhead, type } = page
    return (
        <>
            <img src={`/backgrounds/${background}`} alt="Background Image" className="background"/>
            {/* <div
                className="background"
                style={{
                    "backgroundImage": `url(/backgrounds/${background})`
                }}
            /> */}
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
