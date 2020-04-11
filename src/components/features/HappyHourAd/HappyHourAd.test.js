import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};
const mockProps = {
  title: 'HappyHour',
  promoDescription: 'is Now!',
};

describe ('Component HappyHourAd', () => {
  it ('should render component', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component).toBeTruthy();
  });
  it ('should contain header and promoDescription', () => {

    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it ('header and description should contain right props', () => {
    const expectedTitle = mockProps.title;
    const expectedDescription = mockProps.promoDescription;

    const component = shallow(<HappyHourAd {...mockProps}/>);
    expect(component.find(select.title).text()).toEqual(expectedTitle);
    expect(component.find(select.promoDescription).text()).toEqual(expectedDescription);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args){
    if(args.length){
      super(...args);
    }
    else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it('should show correct at ${time}', () => {
    global.Date = mockDate('2019-05-14${time}.135Z');
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription);
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};
describe('Component HappyHourAd with mocked Date', () => {

  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00;00', 23 * 60 * 60 + '');

});
  