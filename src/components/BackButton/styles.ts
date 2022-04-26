import styled from 'styled-components/native'
import { getStatusBarHeight } from "react-native-iphone-x-helper";


import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(BorderlessButton)`
  margin-top: ${getStatusBarHeight() + RFValue(10)}px;

`;

