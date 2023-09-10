import React from 'react'
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div id='projects'>
        <h2 className="mhead">Projects</h2>

        <div className={styles.project + " big-card"}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <h4 >Project Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sapiente repellendus molestias non consequatur delectus. Sunt debitis magni sapiente, dolore, tenetur neque esse delectus, placeat tempora reiciendis hic illo fuga!</p>
            </div>
        </div>
        <div className={styles.project + " big-card"}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <h4 >Project Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sapiente repellendus molestias non consequatur delectus. Sunt debitis magni sapiente, dolore, tenetur neque esse delectus, placeat tempora reiciendis hic illo fuga!</p>
            </div>
        </div>
        <div className={styles.project + " big-card"}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <h4 >Project Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sapiente repellendus molestias non consequatur delectus. Sunt debitis magni sapiente, dolore, tenetur neque esse delectus, placeat tempora reiciendis hic illo fuga!</p>
            </div>
        </div>
    </div>
  )
}

export default Projects