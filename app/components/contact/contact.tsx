import React from 'react';
import Styles from "../../style/Contact.module.css";
import Image from 'next/image';

export default function Contact() {
  return (
    <div className={Styles.contact}>
        <div className='container' id={Styles.contactContent}>
            <div className={Styles.contactForm}>
                <h2>Write Us</h2>
                <form>
                    <input type='text' placeholder='Your E-mail....' />
                    <textarea placeholder='Your Message' ></textarea>
                    <input type='submit' value="SEND YOUR MESSAGE" />
                </form>
            </div>
            <div className={Styles.contactImage}>
                <div className={Styles.image}>
                    <Image src={require('./images/contact.png')} alt='person' />
                </div>
            </div>
        </div>
        <footer>
            <h3>copyright 2025 <span>Adel Sherif</span></h3>
        </footer>
    </div>
  )
}
