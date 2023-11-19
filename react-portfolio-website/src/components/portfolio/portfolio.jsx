import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.jpg'

//do noot use the image in production 

const data = [
  {
    id: 1,
    image: IMG1,
    Title: 'Important-of-using-diagrams-in-software-development',
    Medium: 'https://medium.com',
    demo: 'https://medium.com/@gunarathneasalya95/important-of-using-diagrams-in-software-development-2fc3d1bf945a'
  },
  {
    id: 2,
    image: IMG2,
    Title: 'Worlds-best-future-with-blockchain',
    Medium: 'https://medium.com',
    demo: 'https://medium.com/@gunarathneasalya95/worlds-best-future-with-blockchain-d98fb6fcbfe6'
  },
  {
    id: 3,
    image: IMG3,
    Title: 'Crypto currency Dashbord & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio_container'>
        {
          data.map (({id, image, title, github, demo}) => {
            return (
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>  
            <img src={image} alt={title} /> </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
              <a herf='https://medium.com/' className='btn' target='_blank'>Medium</a>
              <a herf='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>)
          })
        }
      
        
        </div></section>
  )
}

export default Portfolio