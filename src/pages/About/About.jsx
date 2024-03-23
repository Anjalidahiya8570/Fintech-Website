import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className='main-container'>
      <h2 className="mhead">About Us</h2>
        <div className={styles.flexr}>
            <div className={styles.image}></div>
            <div className={styles.content}>FinTech Club is an organization running under Naresh Vashisht Centre for Tinkering & Innovation (NVCTI) at IIT (ISM) Dhanbad. Here, we learn to analyze and develop the financial models to make products utilizing software technology to provide optimal financial solutions to businesses.</div>
        </div>

        <h1 className="shead"><strong>Functionality of the Club</strong></h1>
        <div className="big-card">
          <p>The Fintech Club at our institution is a vibrant hub of financial exploration and technological innovation, offering a diverse range of activities that enrich the knowledge and skills of its members: <br/>
<h5><strong>Introductory Finance Classes:</strong></h5>Seniors take the initiative to conduct introductory finance classes, drawing from their academic knowledge and practical experiences. A solid foundation in finance was laid, providing members with a comprehensive understanding of key principles and concepts.<br/>
<h5><strong>Probability and Statistics:</strong></h5> A comprehensive course on probability and statistics was conducted entirely by club seniors over a span of two months through weekly classes. Recognizing the importance of these quantitative skills in the financial sector, senior members took the initiative to design and deliver a structured curriculum.<br/> 
<h5><strong>Basics of Algorithmic Trading:</strong></h5> The Fintech Club delves into the exciting realm of algorithmic trading, equipping members with the fundamentals of designing and implementing algorithmic strategies. From coding exercises to simulations, participants gain hands-on experience in leveraging technology for efficient and data-driven trading.<br/>
<h5><strong>Preparation for Alphathon:</strong></h5> Classes were conducted with the primary goal of preparing its members to excel in the prestigious Alphathon, organised  by WorldQuant, a renowned competition in the field of quantitative finance. Recognizing the significance of this competition and the unique challenges it presents, club seniors orchestrated an intensive workshop focused on alpha generation – a critical aspect of quantitativefinance.as a result there were 9 positions among top 20 from our Club. <br/>
<h5><strong>Preparation for FRM(Financial Risk Management):</strong></h5> Also our pre-final year students are following the syllabus of FRM for the purpose of appearing for FRM 1 this December.<br/>
<h5><strong>Weekly Posts:</strong></h5> Also weekly posts on different topics have been posted on linkedin and medium. These posts are the result of group discussion and whatever we have discussed in our classes. <br/>

Apart from the regular sessions we do have group Discussion  to keep ourselves updated on the various happenings in the world of finance.
<h5><strong>Discussion on ETFs and InvITs:</strong></h5> The club facilitates in-depth discussions on Exchange-Traded Funds (ETFs) and Infrastructure Investment Trusts (InvITs). Members explored the nuances of these financial instruments, gaining insights into their structure, advantages, and applications in diverse investment portfolios. Group Discussion was conducted on what to expect from the market over the buzz of bitcoin etfs being launched .

<h5><strong>Project Implementation of Technical Indicators:</strong></h5> Members undertook a practical project to implement essential technical indicators, including Simple Moving Average (SMA), Exponential Moving Average (EMA), Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD),  Bollinger Bands and devise a basic trading strategy implementation using these technical indicators. Several classes and doubt solving sessions were held to discuss the challenges faced by the sophomore batch of Fintech while making this project.
</p>
        </div>

        <h2 className="shead">Club Divisions</h2>
        <div className="big-card">
            <ul>
                <li style={{margin: "20px 0"}}><b>Trading, Finance and Quant :</b> This division focuses on financial markets, investments, and quantitative analysis. We explore financial models, mathematical modelling (for risk and return evaluation) and various trading strategies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam a pulvinar consequat.</li>
                <li style={{margin: "20px 0"}}><b>Management and Product Design :</b> This division manages product development,from research stage to finalization. This includes research, design, project management, testing and final launch of the product. The goal is to transform ideas into a successful product that meets market need and generates value. Our aim is to solidify an idea into a market ready product.</li>
            </ul>
        </div>

    </div>
  )
}

export default About