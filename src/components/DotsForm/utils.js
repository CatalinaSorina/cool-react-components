import React from 'react';

export const checkDeepIn = (children, id) => {
  const array = React.Children.toArray(children);
  const firstChildren = array.find(
    (child) => child.props && child.props.id === id
  );
  if (firstChildren) {
    return firstChildren;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].props && array[i].props.children) {
      const findId = checkDeepIn(array[i].props.children, id);
      if (findId) {
        return findId;
      }
    }
  }
};
