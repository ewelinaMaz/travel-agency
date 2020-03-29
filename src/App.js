import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AnimatedSwitch} from 'react-router-transition';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Trip from './components/views/Trip/TripContainer';
import Country from './components/views/Country/CountryContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import styles from './styles/App.scss';
// DONE - import other views
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch //Loading side from bottom
            atEnter={{translateY: 200, opacity: 0}}
            atLeave={{translateY: 200, opacity: 0}}
            atActive={{translateY: 0, opacity: 1}}
            className={styles.switchWrapper}
            location={location}
            mapStyles={styles => ({
              transform: `translateY(${styles.translateY}%)`,
              opacity: styles.opacity,
            })}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/trip/:id' component={Trip} />
            {/* DONE - add more routes for other views */}
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/country/:id' component={Country} />
            <Route exact path='/regions' component={Regions} />
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
