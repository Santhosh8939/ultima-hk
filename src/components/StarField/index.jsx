import React from 'react';
import Star from '../Star';


function StarField({
  stars = 10
}) {

  var indents = [];
  for (var i = 0; i < stars; i++) {
    indents.push(<Star key={i} />);
  }

  return indents;
}

export default StarField;