import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

function Video() {

// Client side rendering
//   useState(()=>{
//     var aScript = document.createElement('script');
//        aScript.type = 'text/javascript';
//        aScript.src = " https://js.stripe.com/v3/";

//        document.head.appendChild(aScript);
//        aScript.onload = () => {

//        };
//     const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");


// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//     }else{
//         modeText.innerText = "Dark mode";
        
//     }
// });
//   })
  return (
    <div>
      <Head>
        <title>Dashboard Sidebar Menu</title>
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
      </Head>
        <nav className="sidebar close">
    <header>
      <div className="image-text">
        <span className="image">
          {/*<img src="logo.png" alt="">*/}
          <Image src="/vercel.svg" width={72} height={16} />
        </span>
        <div className="text logo-text">
          <span className="name">Analytic App DashBoard </span>
          <span className="profession">Web developer</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" />
    </header>
    <div className="menu-bar">
      <div className="menu">
        {/* <li className="search-box">
          <i className="bx bx-search icon" />
          <input type="text" placeholder="Search..." />
        </li> */}
        <ul className="menu-links">
          <li className="nav-link">
            <a href="#">
            <Link href="/">
              <i className="bx bx-home-alt icon" />
              <span className="text nav-text">
              Dashboard
              </span>
              </Link>
            </a>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Analytics">
              <i className="bx bx-bar-chart-alt-2 icon" />
              <span className="text nav-text">
                Analyitcs
              </span>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Notifications">
              <i className="bx bx-bell icon" />
              <span className="text nav-text">Notifications</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Health">
              <i className="bx bx-pie-chart-alt icon" />
              <span className="text nav-text">Health Visualization</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Podcast">
              <i className="bx bxs-music icon" />
              <span className="text nav-text">Podcast</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Profile">
              <i className="bx bxs-cog icon" />
              <span className="text nav-text">Profile</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/dashboard/Video">
              <i className="bx bxs-video icon active" />
              <span className="text nav-text">Video</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-content">
        <li className>
          <Link href="/">
            <i className="bx bx-log-out icon" />
            <span className="text nav-text">Logout</span>
          </Link>
        </li>
        <li className="mode">
          <div className="sun-moon">
            <i className="bx bx-moon icon moon" />
            <i className="bx bx-sun icon sun" />
          </div>
          <span className="mode-text text">Dark mode</span>
          <div className="toggle-switch">
            <span className="switch" />
          </div>
        </li>
      </div>
    </div>
  </nav>
  <section className="home">
    <div className="text">
        <h2 style={{color : "black"}}>Awarness video</h2>
        <div className={styles.main}>
            <p style={{color : "black"}}>Phishing attack overview</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u9dBGWVwMMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style={{color : "black"}}>Types of phishing Attacks </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rb26NK0jtHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style={{color : "black"}}>How I hacked my Grandma system .</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HfPKe98UqEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p style={{color : "black"}}>Hacking Awarness</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WNVTGTrWcvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
    </div>
    
  </section> 
  
    </div>
   
    
  )
}

export default Video