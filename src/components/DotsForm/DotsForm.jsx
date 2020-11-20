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
    borderRadius: '20px'
  }
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [animation, setAnimation] = useState('intro 1s ease-out');
  const DotsFormTabs =
    children &&
    React.Children.toArray(children)
      .filter((child) => child.type.name === 'TabForm')
      .map((child, i) => ({
        ...child,
        props: {
          ...tabsStyle,
          ...child.props,
          animation: animation,
          activeTab: i === activeTab,
          next: () => activeTab < tabs && setActiveTab(activeTab + 1)
        }
      }));
  const tabs = DotsFormTabs.length - 1;
  const ActiveTab = DotsFormTabs.find((tab) => tab.props.activeTab);
  const onChangingTab = (tabIndex) => {
    let animate;
    if (tabIndex > activeTab) animate = 'enterRight 1s';
    if (tabIndex < activeTab) animate = 'enterLeft 1s';
    // if (tabIndex === 0) animate = 'exitLeft 1s';
    // if (tabIndex === tabs) animate = 'exitRight 1s';
    setAnimation(animate);
    setActiveTab(tabIndex);
  };
  return (
    <DotsFormHolder topDots={topDots}>
      <DotsHolder>
        {DotsFormTabs.map((dot, index) => (
          <DotForm
            key={index + 'Tab'}
            active={index === activeTab}
            onClick={() => onChangingTab(index)}
          />
        ))}
      </DotsHolder>
      {removeArrows ? (
        ActiveTab
      ) : (
        <TabsHolder>
          <ArrowButton
            onClick={() => onChangingTab(activeTab - 1)}
            disabled={activeTab === 0}
          >{`<`}</ArrowButton>
          {ActiveTab}
          <ArrowButton
            onClick={() => onChangingTab(activeTab + 1)}
            disabled={activeTab === tabs}
          >
            >
          </ArrowButton>
        </TabsHolder>
      )}
    </DotsFormHolder>
  );
};

export default DotsForm;
