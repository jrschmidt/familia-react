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

const getParentSvg = () => {
  return(
    <svg className={'svg-connect-p1'} key='p1' width='240' height='160'>
    <line x1='0' y1='40' x2='240' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='120' y1='40' x2='120' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
  );
}

const getChildrenSvg = (focusGender) => {
  const className = (focusGender === 'male')
    ? 'svg-connect-children-m'
    : 'svg-connect-children-f';
  return (
    <svg className={className} key='c1' width='640' height='120'>
    <line x1='0' y1='40' x2='100' y2='40' stroke='#333333' strokeWidth='5' />
    <line x1='50' y1='40' x2='50' y2='120' stroke='#333333' strokeWidth='5' />
    </svg>
  );
}

const getSiblingsSvg = (rowType) => {
  const svgs = {

    'single-1':
      <svg className='connect' key='svg-single-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'single-2':
      <svg className='connect' key='svg-single-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='500' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'single-3':
      <svg className='connect' key='svg-single-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='200' y1='40' x2='600' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='200' y1='40' x2='200' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='400' y1='40' x2='400' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='600' y1='40' x2='600' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'final-1':
      <svg className='connect' key='svg-final-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'final-2':
      <svg className='connect' key='svg-final-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'final-3':
      <svg className='connect' key='svg-final-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='500' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'final-4':
      <svg className='connect' key='svg-final-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>,

    'extend-4':
      <svg className='connect' key='svg-extend-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='160' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#333333' strokeWidth='5' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#333333' strokeWidth='5' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#333333' strokeWidth='5' />
      </svg>

  };
  return svgs[rowType];

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

export {
  getGrandparentSvg,
  getParentSvg,
  getChildrenSvg,
  getSiblingsSvg,
  getPlusSignSvg
};
