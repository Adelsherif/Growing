import React from 'react';
import Styles from "../../style/Homepage.module.css";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';

export default function Homepage() {
  return (
    <div className={Styles.homepage}>
        <div className='container' id={Styles.homeContent}>
            <div className={Styles.mainImage}>
                <div className={Styles.personImage}>
                    <Image src={require('./images/person-01.png')} alt='person'/>
                </div>
                 <div className={Styles.imageBox}>
                 <div className={Styles.image}><Image src={require('./images/person.png')} alt='person'/></div>
                    <h3>James Bruno</h3>
                    <p>Digitel Markter</p>
                </div> 
            </div>
            <div className={Styles.mainText}>
                <h1>We Help You Build & Grow An Online Business</h1>
                <div className={Styles.Form}>
                    <form>
                        <input type='text' placeholder='Tell Us what you need to build' />
                        <button><CiSearch /></button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}
