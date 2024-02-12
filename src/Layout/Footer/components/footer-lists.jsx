import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLists = ({ title, text1, text2, text3, text4, text5, text6 }) => {
    return (
        <div>
            <h6 className="footer-title">{title}</h6>
            <Link className="link link-hover">{text1 ? text1 : ''}</Link>
            <Link className="link link-hover">{text2 ? text2 : ''}</Link>
            <Link className="link link-hover">{text3 ? text3 : ''}</Link>
            <Link className="link link-hover">{text4 ? text4 : ''}</Link>
            <Link className="link link-hover">{text5 ? text5 : ''}</Link>
            <Link className="link link-hover">{text6 ? text6 : ''}</Link>
        </div>
    )
}
