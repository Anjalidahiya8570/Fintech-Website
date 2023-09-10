import React from 'react'
import styles from './Achievements.module.css'

const Achievements = () => {
  return (
    <div id = "achieve">
        <h2 className='mhead'>Achievements</h2>
        <div className='big-card'>
            <ul>
                <li className={styles.list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam a pulvinar consequat.</li>
                <li className={styles.list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam a pulvinar consequat.</li>
                <li className={styles.list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam a pulvinar consequat.</li>
                <li className={styles.list}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam a pulvinar consequat.</li>
            </ul>
        </div>
    </div>
  )
}

export default Achievements