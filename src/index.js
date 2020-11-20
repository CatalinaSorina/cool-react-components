import React from 'react';
import DotsForm from './components/DotsForm/DotsForm';
import { DotsFormTab } from './components/DotsForm/DotsForm.styles';
import StyledFormInput from './components/FormInput/FormInput';

export const Input = (props) => <StyledFormInput {...props} />;

export const TabForm = (props) => <DotsFormTab {...props} />;

export const Form = (props) => <DotsForm {...props} />;
