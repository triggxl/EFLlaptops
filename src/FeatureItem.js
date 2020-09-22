import React from 'react';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const FeatureItem = (props) => {
  //creating each 'feature' HTML element; Object.keys turns Object.properties in to an array of keys
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={[slugify(props.feature)]}
        checked={props.optionItem.name === props.selected[props.feature].name}
        onChange={() => props.updateFeature(props.feature, props.optionItem)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.optionItem.name} ({USCurrencyFormat.format(props.optionItem.cost)})
      </label>
    </div>
  )
}

export default FeatureItem;