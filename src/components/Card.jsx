import React from 'react'
import { Save } from 'lucide-react'

const Card = ({props}) => {
    // console.log(props);

  return (
    <div className="card">
    
            {/* Top */}
            <div>
    
            <div className="top">
              <img
                src={props.logo}
                alt={props.company}
                width="40"
                />
              <button className="save-btn">
                Save <Save size={12} />
              </button>
            </div>
    
            {/* Center */}
            <div className="center">
              <h3>
                {props.company} <span>• {props.posted}</span>
              </h3>
              <h2>{props.role}</h2>
              <div className="tags">
                <h4>{props.tags[0]}</h4>
                <h4>{props.tags[1]}</h4>
              </div>
            </div>
    
                </div>
            {/* Bottom */}
            <div className="bottom">
              <div>
                <h3>{props.salary}</h3>
                <p>{props.location}</p>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
    
          </div>
  )
}

export default Card