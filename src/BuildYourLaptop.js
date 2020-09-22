import React from 'react';
import slugify from 'slugify';
import ItemCategory from './ItemCategory';
import FeatureItem from './FeatureItem';

const BuildYourLaptop = (props) => {
  //creating each 'feature' HTML element; Object.keys turns Object.properties in to an array of keys
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    //creates options for each item category + generating HTML
    const options = props.features[feature].map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem key={idx} itemHash={itemHash} optionItem={item} feature={feature} featureHash={featureHash} selected={props.selected} updateFeature={props.updateFeature}/>
      );
    });
    //return for function
    return (
      <ItemCategory key={featureHash} feature={feature} options={options}/> 
    );
  });
  //return for component
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

/*
Identify usecase for new component
Figure out what we need to migrate to new component
Call new component to pass the props it just received from parent
-----------------------------------------------------------------------------------
Find largest subset or chunk of HTML that can be its own standalone component
Transfer what is needed in new component that still exists in App
Pass what needs to be used in state for this component as props in return statement
If variable is used in multiple components then variable must be passed down as prop
debugging
  refactoring and assigning appropriate data types (coming from state...props...other?)

App === nearest common ancestor for components in this application that need to use state
*/

export default BuildYourLaptop;