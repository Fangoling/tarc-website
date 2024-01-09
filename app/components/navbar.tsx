"use client"
import React, { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script";

export default function Navbar() {
    return (
        <>
        <Head>
            <Link rel="stylesheet" href="style.css" type="text/css" />
        </Head>
        <Script src="https://kit.fontawesome.com/628c8d2499.js" crossOrigin="anonymous"/>
        <nav id="menu">
            <div className="menu-item">
                <div className="menu-text">
                    <a href="#">Products</a>
                </div>
                <div className="sub-menu">
                    <div className="icon-box">
                        <div className="icon"><i className="far fa-weight-hanging"></i></div>
                        <div className="text">
                            <div className="title">Weighted Clothing<i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">Elevate you training with this item.</div>
                        </div>
                    </div>
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div className="menu-item highlight">
                <div className="menu-text">
                    <a href="#">Services</a>
                </div>
                <div className="sub-menu double">
                    <div className="icon-box gb a">
                        <div className="icon"><i className="far fa-question-circle"></i></div>
                        <div className="text">
                            <div className="title">Consult <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">From Professionals</div>
                        </div>
                    </div>
                    <div className="icon-box gb b">
                        <div className="icon"><i className="far fa-users-className"></i></div>
                        <div className="text">
                            <div className="title">Teach <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">In Classroom</div>
                        </div>
                    </div>
                    <div className="icon-box gb c">
                        <div className="icon"><i className="far fa-school"></i></div>
                        <div className="text">
                            <div className="title">Learn <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">By Video</div>
                        </div>
                    </div>
                    <div className="icon-box gb d">
                        <div className="icon"><i className="far fa-chess-rook"></i></div>
                        <div className="text">
                            <div className="title">Keep <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">The Castle</div>
                        </div>
                    </div>
                    <div className="icon-box gb e">
                        <div className="icon"><i className="far fa-video-plus"></i></div>
                        <div className="text">
                            <div className="title">Become <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">A Creator</div>
                        </div>
                    </div>
                    <div className="icon-box gb f">
                        <div className="icon"><i className="far fa-cat"></i></div>
                        <div className="text">
                            <div className="title">Understand <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">Our Journey</div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        Ready to dive in? <a href="#">Get Started</a>
                    </div>
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-text">
                    <a href="#">Contact</a>
                </div>
                <div className="sub-menu">
                    <div className="icon-box">
                        <div className="icon"><i className="fab fa-instagram"></i></div>
                        <div className="text">
                            <div className="title">Instagram <i className="far fa-arrow-right"></i></div>
                            <div className="sub-text">Follow us on instagram.</div>
                        </div>
                    </div>
                    <div className="sub-menu-holder"></div>
                </div>
            </div>
            <div id="sub-menu-container">
                <div id="sub-menu-holder">
                    <div id="sub-menu-bottom">

                    </div>
                </div>
            </div>
        </nav>
        </>
    );

}