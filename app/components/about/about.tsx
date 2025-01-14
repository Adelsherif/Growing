import React from 'react';
import Styles from "../../style/About.module.css";
import Link from 'next/link';
import { MdSlowMotionVideo } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import Image from 'next/image';


export default function About() {
  return (
    <div className={Styles.about}>
        <div className='container' id={Styles.aboutContent}>
        <div className={Styles.imageSection}>
                <div className={Styles.boxOne}>  
                    <div className={Styles.boxContent}>
                        <div className={Styles.image}>
                            <Image src={require("./images/person-00.jpg")} alt='person' />
                        </div>
                        <div className={Styles.innerBox} >
                            <h2><FaDollarSign /><span> 7,654 </span><span><MdSlowMotionVideo /></span></h2>
                            <p>TOTAL REVENUE <span>+ $ 232</span></p>
                        </div>
                    </div>
                    <div className={Styles.imageLine}>
                            <Image src={require("./images/line-01.png")} alt='person' />
                    </div>
                </div>
                <div className={Styles.boxTow}>
                <div className={Styles.boxContent}>
                        <div className={Styles.innerBox} >
                            <h2><FaDollarSign /> <span>9,978</span> <span><MdSlowMotionVideo /></span></h2>
                            <p>TOTAL REVENUE <span>+ $ 349</span></p>
                        </div>
                        <div className={Styles.image}>
                            <Image src={require("./images/person-00.jpg")} alt='person' />
                        </div>
                </div>
                <div className={Styles.imageLine}>
                            <Image src={require("./images/line-02.png")} alt='person' />
                    </div>
                </div>
            </div>
            <div className='textSection'>
                <h2>WHAT WE DO</h2>
                <h1>Increase our Customers Sales</h1>
                <p>We`ll gide through our unique 5-step brand-building framwork</p>
                <button><Link href="#"><span>MORE DETAILS</span><span><BsChevronRight /></span></Link></button>
            </div>
        </div>
    </div>
  )
}
