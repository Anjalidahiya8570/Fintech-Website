import React from 'react'
import styles from './Achievements.module.css'

const Achievements = () => {
  return (
    <div id = "achieve">
        <h2 className='mhead'>Achievements</h2>
        <div className='big-card'>
            <ul>
                <li className={styles.list}>Mohneesh Swami Sir collaborated with Tribhuvan Bisen at  the Options Symposium 6.0 Conference, held at the Bombay Stock Exchange(BSE). Their primary task involved identifying conditions and factors for selling options across different time frames and close-open gap buckets and  also delved into explaining gamma risk, theta decay patterns, and the impact of multiplying skew factors in various market conditions, while also determining the optimal expiry DTE based on these factors.His main part involved in coding out the stuffs and doing statistical analysis on various factors.
</li>
                <li className={styles.list}>Our Fintech Club members got 8th position in Inter IIT Tech Meet’23 held at IIT Madras in the High Prep Problem statement by Worldquant.
</li>
                <li className={styles.list}>Team DREAM-WEB, consisting of Mohneesh Kumar Swami, Harshit Agarwal  and Digvijay Anand emerged as the Finalist in Morgan Stanley’s Code-to-Give Hackathon’23. Team  DREAM-WEB secured a spot among the top 4, earning tremendous praise from the esteemed panel. </li>
                <li className={styles.list}> Rohan Kumar, Raj pandey formed a team (Renaissance) and participated in the IQC (international Quant Championship) and Secured an International rank of 290 among 30000+ teams making them within the top 1%competitors
</li>
                <li className={styles.list}>Aman Agarwal secured the first runner-up position in 'Startup Concurso', a part of the BizThon : The Global Business Hackathon hosted by IIT BHU and organized by E Cell IIT BHU. </li>
                <li className={styles.list}>Mohneesh Kumar Swami along with his team “Team Ka Ching ” successfully secured  Global Rank 50th with India Rank 8th in Stage 2 of the World Quant Brain Global Alphathon  Challenge’22, competing with among 10 K +participants from 90+ countries .</li>
                <li className={styles.list}>Rohan Kumar  participated in Alphaverse premier league (an alpha making competition by Alphagrep) secured a global rank of 31 among thousand participants from prestigious colleges.’
</li>
            </ul>
        </div>
    </div>
  )
}

export default Achievements