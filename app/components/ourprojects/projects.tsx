import React from 'react';
import Styles from "../../style/Projects.module.css";
import Image from 'next/image';

export default function Projects() {
  return (
    <div className={Styles.projects}>
        <div className='container' id={Styles.projectsContent}>
            <div className={Styles.text}>
                <h3>Compaines We`ve helped build</h3>
            </div>
            <div className={Styles.companies}>
                <Image src={require("./images/c-05.png")} alt='logo' />
                <Image src={require("./images/c-01.png")} alt='logo' />
                <Image src={require("./images/c-02.png")} alt='logo' />
                <Image src={require("./images/c-04.png")} alt='logo' />
                <Image src={require("./images/c-03.png")} alt='logo' />
            </div>
        </div>
    </div>
  )
}
