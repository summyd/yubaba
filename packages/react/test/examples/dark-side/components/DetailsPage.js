// @flow

import React from 'react';
import Photo from './Photo';
import TransitionContainer from '../../../../src/TransitionContainer';
import Transition from '../../../../src/Transition';
import ScrollToTopOnMount from '../../ScrollToTOpOnMount';

const DetailsPage = ({ onClick, src, description, name, color }: any) => (
  <TransitionContainer pair={name} className="content-bg" style={{ backgroundColor: color }}>
    <ScrollToTopOnMount />

    <div className="content-text">
      {name.toUpperCase().split('').map((char, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{char}</span>)}
    </div>

    <div className="content-margin">
      <Transition
        pair={name}
        transitions={[[{
          transition: 'circle-shrink',
          duration: 0.3,
          background: color,
        }, {
          transition: 'move',
          duration: 0.4,
        }], {
          transition: 'fadeout',
          duration: 0.3,
        }]}
      >
        <Photo
          className="box-highlighted"
          onClick={onClick}
          type="big"
          src={src}
        />
      </Transition>

      {description}
    </div>
  </TransitionContainer>
);

export default DetailsPage;