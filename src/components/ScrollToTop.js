import React, {useState} from 'react'; 

const ScrollToTop = (props) => {
    const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 

  window.addEventListener('scroll', toggleVisible); 

    return (
      <>
        <div>
          <button className={`scroll-to-top ${visible ? '' : 'no-display'}`} onClick={scrollToTop}>
          </button>
        </div>
      </>
    );
  };
  export default ScrollToTop;