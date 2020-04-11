import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), 
      currentTime.getUTCMonth(), 
      currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const getTime = this.getCountdownTime();
    const{title, promoDescription} = this.props;
    
    return(
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{getTime > 82800 ? promoDescription : getTime}
        </div>
      </div>
    );
    
  }
}
export default HappyHourAd;