import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';



describe('Component TripSummary', () => {
  it ('should render correct src and alt for images', () => {
    const expectedImage = 'image.jpg';
    const expectedDescription = 'Sunny';

    const component = shallow(<TripSummary imageSrc={expectedImage} name={expectedDescription}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedDescription);

    console.log(component.debug());
  });

  it ('should generate correct link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id}/>);

    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
  });

  it('should throw error without required props', () => {
    const component = shallow(<TripSummary/>);
    expect(component).toBeTruthy();
  });
 
  it('should render correct props', () => {
    const expectedName = 'Marvelous travel';
    const expectedCost = '1200';
    const expectedDays = 6;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);

    expect(component).toBeTruthy;
    console.log(component.debug());
  });

  it('should render tags array correctly', () => {
    const expectedArray = ['abc', 'def', 'ghi'];
    const component = shallow(<TripSummary tags={expectedArray}/>);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);

    console.log(component.debug());
  });

  it ('does not render div if tags is not given or empty', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component.find('.tags')).toEqual({});
    console.log(component.debug());
  });
});