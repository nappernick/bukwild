import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import abc from '../assets/abc_logo.svg';

function Layout({ consolidatedObj }) {
    const { setSelected, setTitle, selected, layoutData } = consolidatedObj
    const params = useParams()
    const setDetails = (e, slug) => {
        setSelected(slug)
        setTitle(e.target.innerHTML)
    }
    console.log(params)
    return (
        <div className="layout__section">
            <div className="logo_text__container">
                <img src={abc} alt="ABC Logo" className="abc" />
                <div className="Industry-Services-AboutUs">
                    {/* checks that layoutData array has data before mapping */}
                    {layoutData.length && layoutData.map(link => (
                        // Link that navigates to pages, dynamically created
                        // according to JSON data
                        <NavLink
                            to={`/${link.slug}`}
                            className={`text-style-${selected === link.slug ? "1" : "0"}`}
                            key={link.slug}
                            onClick={(e) => setDetails(e, link.slug)}
                        >{`${link.title}`}
                        </NavLink>
                    ))}

                </div>
            </div>
            <div className="contact_us__container">
                <a
                    className="contact_us__text_box"
                    href="https://calendly.com/nickfmatthews/bukwild-chat"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div
                        className="text"

                    >Contact Us</div>
                </a>
            </div>
        </div>
    )
}

export default Layout
