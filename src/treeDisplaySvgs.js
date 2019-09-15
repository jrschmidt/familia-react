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

const getParentSvg = (male, female, locTag) => {

  if (male && female) return(
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

export { getGrandparentSvg, getParentSvg };


  // Use svgChildrenOfMale for male focus person.
//   svgChildrenOfMale:
//     <svg className='connect-children-male' key='c-cm' width='240' height='160'>
//       <line x1='140' y1='40' x2='240' y2='40' stroke='#333333' strokeWidth='5' />
//       <line x1='190' y1='40' x2='190' y2='120' stroke='#333333' strokeWidth='5' />
//       <line x1='20' y1='120' x2='190' y2='120' stroke='#333333' strokeWidth='5' />
//       <line x1='20' y1='120' x2='20' y2='160' stroke='#333333' strokeWidth='5' />
//     </svg>,
//
//   // Use svgChildrenOfFemale for female focus person.
//   svgChildrenOfFemale:
//     <svg className='connect-children-female' key='c-cf' width='240' height='160'>
//       <line x1='0' y1='40' x2='100' y2='40' stroke='#333333' strokeWidth='5' />
//       <line x1='50' y1='40' x2=' 50' y2='120' stroke='#333333' strokeWidth='5' />
//       <line x1='50' y1='120' x2='220' y2='120' stroke='#333333' strokeWidth='5' />
//       <line x1='220' y1='120' x2='220' y2='160' stroke='#333333' strokeWidth='5' />
//     </svg>
// };
