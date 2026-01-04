import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    tags: ["Part Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    role: "Frontend Engineer",
    tags: ["Full Time", "Mid Level"],
    salary: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 day ago",
    role: "Backend Developer",
    tags: ["Remote", "Senior Level"],
    salary: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "3 days ago",
    role: "Full Stack Engineer",
    tags: ["Full Time", "Senior Level"],
    salary: "$160/hr",
    location: "Remote"
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    posted: "6 days ago",
    role: "React Developer",
    tags: ["Contract", "Mid Level"],
    salary: "$140/hr",
    location: "Remote"
  },
  {
    id: 6,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "4 days ago",
    role: "iOS Developer",
    tags: ["Full Time", "Senior Level"],
    salary: "$170/hr",
    location: "Bangalore, India"
  },
  {
    id: 7,
    company: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flipkart_logo.svg",
    posted: "1 week ago",
    role: "Software Engineer",
    tags: ["Full Time", "Junior Level"],
    salary: "$90/hr",
    location: "Delhi, India"
  },
  {
    id: 8,
    company: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    posted: "2 days ago",
    role: "Frontend Developer",
    tags: ["Internship", "Junior Level"],
    salary: "$40/hr",
    location: "Bangalore, India"
  }
];


  return (
    <div className="parent">
      {cardData.map((data) => (
        <Card  props={data} />
      ))}
    </div>
  )
}

export default App
