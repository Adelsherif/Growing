import React from 'react';
import Styles from "../../style/Header.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <div className={Styles.header}>
        <div className="container" id={Styles.headerContent}>
            <div className={Styles.logo}>
                <h2>GROW</h2>
            </div>
            <div className={Styles.register}>
                <Link href="#">Get Started Now</Link>
                <Link href="#">Login</Link>
            </div>
        </div>
    </div>
  )
}
