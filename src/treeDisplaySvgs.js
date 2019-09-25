// JSX formatted SVG tags to draw connector lines between the PersonMini or
// PersonDisplayTile components in a TreeDisplay component.

import React from 'react';

const getGrandparentSvg = (male, female, locTag) => {

  if (male && female) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='0' y1='40' x2='40' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (male && !female) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='0' y1='40' x2='20' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (female && !male) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='20' y1='40' x2='40' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (!male && !female) return null;
};

const getParentSvg = (forceBoth, male, female, locTag) => {

  if (forceBoth || (male && female)) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='240' height='160'>
    <line x1='0' y1='40' x2='240' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (male && !female) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='240' height='160'>
    <line x1='0' y1='40' x2='120' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (female && !male) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='240' height='160'>
    <line x1='120' y1='40' x2='240' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );

  if (!male && !female) return null;
}

const getChildrenSvg = (gender) => {

  if (gender === 'male')
    return (
      <svg className='svg-connect-children' key='c1' width='640' height='120'>
      <line x1='40' y1='40' x2='640' y2='40' stroke='#333333' strokeWidth='5' />
      <line x1='320' y1='40' x2='320' y2='120' stroke='#333333' strokeWidth='5' />
      </svg>
    );

  else {
    return (
      <svg className='svg-connect-children' key='c1' width='640' height='120'>
      <line x1='0' y1='40' x2='600' y2='40' stroke='#333333' strokeWidth='5' />
      <line x1='320' y1='40' x2='320' y2='120' stroke='#333333' strokeWidth='5' />
      </svg>
    );
  }
}

const getPlusSignSvg = () => {
  return (
    <svg className='plus-sign' width='31' height='31'>
      <line x1='15' y1='6' x2='15' y2='23' stroke='#333333' strokeWidth='3' />
      <line x1='6' y1='15' x2='23' y2='15' stroke='#333333' strokeWidth='3' />
      <path fill='none' stroke='#333333' strokeWidth='3'
        d='
          M 3 6
          a 3 3 0 0 1 3 -3
          l 17 0
          a 3 3 0 0 1 3 3
          l 0 17
          a 3 3 0 0 1 -3 3
          l -17 0
          a 3 3 0 0 1 -3 -3
          l 0 -17
        '
      />
    </svg>
  );
}

export { getGrandparentSvg, getParentSvg, getChildrenSvg, getPlusSignSvg };
