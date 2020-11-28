import React, { useState } from 'react';
import {
  DotsHolder,
  DotsFormHolder,
  DotForm,
  TabsHolder,
  ArrowButton
} from './DotsForm.styles';

const DotsForm = ({
  children,
  topDots = false,
  removeArrows = false,
  removeDots = false,
  styledComponents,
  dotsStyledComponents,
  dotsStyle = {
    size: null,
    color: null,
    hoverShadowColor: null,
    activeColor: null,
    activeHoverColor: null
  },
  dotsActiveStyledComponents,
  arrowsStyledComponents,
  arrowsStyle = { color: null, disabledColor: null, hoverColor: null },
  tabsStyle = {
    width: '98%',
    height: '98%',
    margin: 0,
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    borderRadius: '20px',
    styledComponents: ''
  }
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [animation, setAnimation] = useState('intro 1s ease-out');
  const onChangingTab = (tabIndex) => {
    let animate;
    if (tabIndex > activeTab) animate = 'enterRight 1s';
    if (tabIndex < activeTab) animate = 'enterLeft 1s';
    // if (tabIndex === 0) animate = 'exitLeft 1s';
    // if (tabIndex === tabs) animate = 'exitRight 1s';
    setAnimation(animate);
    setActiveTab(tabIndex);
  };
  const DotsFormTabs =
    children &&
    React.Children.toArray(children)
      .filter((child) => child.type.name === 'TabForm')
      .map((child, i) => {
        const newChild = {
          ...child,
          props: {
            ...tabsStyle,
            blockNext: true,
            ...child.props,
            animation: animation,
            activeTab: i === activeTab,
            onSubmit: () => activeTab < tabs && onChangingTab(activeTab + 1)
          }
        };
        return newChild;
      });
  const tabs = DotsFormTabs.length - 1;
  const ActiveTab = DotsFormTabs.find((tab) => tab.props.activeTab);
  const isBlocked = (index) =>
    index === activeTab ||
    (index > 0
      ? DotsFormTabs[index - 1].props.blockNext
      : DotsFormTabs[index].props.blockNext);
  const changeTab = (index) => !isBlocked(index) && onChangingTab(index);
  return (
    <DotsFormHolder topDots={topDots} styledComponents={styledComponents}>
      {!removeDots && (
        <DotsHolder>
          {DotsFormTabs.map((dot, index) => (
            <DotForm
              key={index + 'Tab'}
              active={index === activeTab}
              onClick={() => changeTab(index)}
              styledComponents={dotsStyledComponents}
              activeStyledComponents={dotsActiveStyledComponents}
              dotsStyle={dotsStyle}
              disabled={isBlocked(index)}
            />
          ))}
        </DotsHolder>
      )}
      {removeArrows ? (
        ActiveTab
      ) : (
        <TabsHolder>
          <ArrowButton
            onClick={() => changeTab(activeTab - 1)}
            disabled={activeTab === 0 || isBlocked(activeTab - 1)}
            styledComponents={arrowsStyledComponents}
            arrowsStyle={arrowsStyle}
          >
            {'<'}
          </ArrowButton>
          {ActiveTab}
          <ArrowButton
            onClick={() => changeTab(activeTab + 1)}
            disabled={activeTab === tabs || isBlocked(activeTab + 1)}
            styledComponents={arrowsStyledComponents}
            arrowsStyle={arrowsStyle}
          >
            {'>'}
          </ArrowButton>
        </TabsHolder>
      )}
    </DotsFormHolder>
  );
};

export default DotsForm;
