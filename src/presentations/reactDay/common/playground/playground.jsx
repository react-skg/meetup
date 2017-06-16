import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { foreground, red } from './colors';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
  text-align: left;
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
background: #1d1f27;
font-size: 0.8rem;
font-family: "Operator Mono SSm A", "Operator Mono SSm B", monospace;
font-weight: 300;
height: 22.22222222222222rem;
overflow-y: scroll;
overflow-x: hidden;
cursor: text;
white-space: pre-wrap!important;
flex-basis: 50%;
width: 50%;
max-width: 50%;
${column}
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  height: auto;
  overflow: hidden;
  ${column}
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`;

const Playground = ({ noInline, code, scope }) => (
  <StyledProvider
    code={code}
    noInline={noInline}
    scope={{ React, styled, ...scope }}
  >
    <LiveWrapper>
      <StyledEditor onChange={(code) => {}} />
      <StyledPreview />
    </LiveWrapper>

    <StyledError />
  </StyledProvider>
)

export default Playground;
