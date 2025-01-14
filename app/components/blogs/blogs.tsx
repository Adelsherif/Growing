import React from 'react';
import Styles from "../../style/Blogs.module.css";
import Image from 'next/image';

export default function Blogs() {
  return (
    <div className={Styles.blogs}>
        <div className='container' id={Styles.blogsContent}>
            <div className={Styles.blogBox}>
                <div className={Styles.image}>
                    <Image src={require("./images/B-01.png")} alt='blog' />
                </div>
                <h2>   FASHION STORE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur 
                    neque distinctio quibusdam.
                     in debitis.</p>
            </div>
            <div className={Styles.blogBox}>
                <div className={Styles.image}>
                    <Image src={require("./images/B-02.png")} alt='blog' />
                </div>
                <h2>HOME FURNITURE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur 
                    neque distinctio quibusdam.
                     in debitis.</p>
            </div>
            <div className={Styles.blogBox}>
                <div className={Styles.image}>
                    <Image src={require("./images/B-03.png")} alt='blog' />
                </div>
                <h2>SUPER GADGET STORE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur 
                    neque distinctio quibusdam.
                     in debitis.</p>
            </div>
        </div>
    </div>
  )
}
