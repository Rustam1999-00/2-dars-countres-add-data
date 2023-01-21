import './Headers.css';
import dark from  './240_F_82845673_m89d0QKW48Ts6NyRW2MtWou1RhlLJeyv.jpg'


function Header (){
   return(
   <header>
    <h2 className='title'>COUNTRES</h2>
    <button className='dark-button'> <img className='img' src={dark} alt='dark-mode' width={50} height={50}/> Dark-mode </button>
   </header>
 
   )
    
   

}

export default Header