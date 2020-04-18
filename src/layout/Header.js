import React, { Component } from 'react'
import '../css/Header.css'

export class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="https://www.secfi.com/" className="left logo"> </a></li>
                    <li><a href="mailto:andremlsantos@protonmail.com?Subject=Next%20call" className="right">Contact</a></li>
                    <li><a href=" https://github.com/andremlsantos/secfi-front-end.git" className="right">GitHub</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header
