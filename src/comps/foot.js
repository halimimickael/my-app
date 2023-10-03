import React, { useEffect, useState } from 'react'

export default function Foot() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
       <footer className='text-center'> 
          <a href="https://github.com/halimimickael " className="text-decoration-none">
            <h5 className="fw-light text-white m-0"> by Mickael Halimi  {currentDate.toLocaleString()}</h5>
          </a>
        </footer> 
    </div>
  )
}
