

import s from './logo.module.css';
import logoIconDesktop from 'assets/png/logoIcon2x.png';
import logoIconTab from 'assets/png/logoIcon1x.png';


const Logo = () => {
  return (
    <div className={s.containerMain}>
       <div className={s.logo}>
        <img src={logoIconDesktop} alt="logo" className={s.logoIcon} />
       </div>
      <div className={s.logo}><span className={s.logoName}>EXPENSES TRACKER</span></div>
    </div>
  );
};

export default Logo;
