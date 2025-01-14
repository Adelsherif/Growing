import React from 'react';
import Styles from "../../style/Services.module.css";
import Link from 'next/link';
import { FaShoppingCart  } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import Image from 'next/image';


export default function Services() {
  return (
    <div className={Styles.services}>
        <div className='container' id={Styles.servicesContent}>
            <div className='textSection'>
                <h2>WE HELP YOU</h2>
                <h1>Sell Stunning Products</h1>
                <p>We`ll gide through our unique 5-step brand-building framwork</p>
                <button><Link href="#"><span>MORE DETAILS</span><span><BsChevronRight /></span></Link></button>
            </div>
            <div className={Styles.imageSection}>
                <div className={Styles.box}>
                    
                    <div className={Styles.boxContent}>
                        <div className={Styles.image}>
                            <Image src={require("./images/product-01.png")} alt="product" />
                        </div>
                        <p>Minimal Chair</p>
                        <div className={Styles.innerBox} >
                            <p>$240.00</p>
                            <Link href="#"><FaShoppingCart  /></Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.box}>
             
                <div className={Styles.boxContent}>
                    <div className={Styles.image}>
                        <Image src={require("./images/product-02.png")} alt="product" />
                    </div>
                    <p>Beats Headphone</p>
                    <div className={Styles.innerBox} >
                        <p>$74.00</p>
                        <Link href="#"><FaShoppingCart  /></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
