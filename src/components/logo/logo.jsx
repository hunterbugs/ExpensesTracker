import s from './logo.module.css';
import logo1vector from 'assets/png/Logo1Vector1x.png';
import logo2vector from 'assets/png/Logo2Vector1x.png';
import logo3vector from 'assets/png/Logo3Vector1x.png';

const logo = () => {
  return (
    <div className={s.containerMain}>
        <div className={s.logoContainer}>
        <img src={logo1vector} alt="logo" className={s.logo1} />
        <img src={logo2vector} alt="logo" className={s.logo2} />
        <img src={logo3vector} alt="logo" className={s.logo3} />
        </div>
        <div><a className={s.logoName}>EXPENSES</a></div>
        
    </div>
  )
}

export default logo