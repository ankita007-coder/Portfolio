import React from 'react' 
import './CodingPlatforms.css';
import leetcode from '../../images/leetcode.png';
import codechef from '../../images/codechef.jpeg';
import hackerrank from '../../images/hackerrank.png';
import hackerearth from '../../images/hackerearth.png';
import codestudio from '../../images/codestudio.jpeg';
function CodingPlatforms(){
  return (
    <div className='codingPlatform'>
      <div>
        <a href='https://leetcode.com/ankitabudhia42/' target='blank'>
            <img src={leetcode} alt='Leetcode'/>
        </a> 
        <a href='https://www.hackerrank.com/ankitabudhia42' target='blank'>
          <img src={hackerrank} alt='Hackerrank'/>
        </a>
        <a href="https://www.codingninjas.com/codestudio/profile/anKita_dedd">
          <img src={codestudio} alt="Codestudio" />
        </a>
        </div>
        <div>
        <a href='https://www.codechef.com/users/ankitabudhia03' target='blank'>
          <img src={codechef} alt='Codechef'/>
        </a>
        <a href='https://www.hackerearth.com/@ankitabudhia03'>
          <img src={hackerearth} alt='Hackerearth'/>
        </a>
        </div>
        </div>
  )
}

export default CodingPlatforms;