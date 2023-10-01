import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className='main-container'>
      <h2 className="mhead">About Us</h2>
        <div className={styles.flexr}>
            <div className={styles.image}></div>
            <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas commodi assumenda ut blanditiis veritatis voluptatibus perspiciatis maiores? Cum, perferendis architecto omnis natus dolore labore consectetur illo at, rerum distinctio odit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestias harum repellat repudiandae magni illum dolorum ipsum beatae, illo hic ex quod recusandae, possimus exercitationem ratione ipsam voluptatibus tenetur fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero animi vel doloribus incidunt nostrum dicta quas debitis natus repellendus quam delectus quo hic blanditiis explicabo! Optio iusto repellat maxime?</div>
        </div>

        <h2 className="shead">Functionality of the Club</h2>
        <div className="big-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas commodi assumenda ut blanditiis veritatis voluptatibus perspiciatis maiores? Cum, perferendis architecto omnis natus dolore labore consectetur illo at, rerum distinctio odit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestias harum repellat repudiandae magni illum dolorum ipsum beatae, illo hic ex quod recusandae, possimus exercitationem ratione ipsam voluptatibus tenetur fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero animi vel doloribus incidunt nostrum dicta quas debitis natus repellendus quam delectus quo hic blanditiis explicabo! Optio iusto repellat maxime?</p>
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