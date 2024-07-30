import React, {useState} from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

const GoBack = (props) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate(); 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 

  window.addEventListener('scroll', toggleVisible); 

    return (
      <>
        <div>
          <button className={`goBack ${visible ? '' : 'no-display'}`} onClick={() => navigate(-1)}>
          </button>
        </div>
      </>
    );
  };
  export default GoBack;