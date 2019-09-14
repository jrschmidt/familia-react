// JSX formatted SVG tags to draw connector lines between the PersonMini or
// PersonDisplayTile components in a TreeDisplay component.

import React from 'react';

const svgs = {

  // Connect parents to grandparents:
  // ()

  // Use svgFatherMother when focus person has both parents.
  svgFatherMother:
  <svg className='connect-father-mother' key='c-fm' width='560' height='80'>
  <line x1='80' y1='0' x2='80' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='480' y1='0' x2='480' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='80' y1='40' x2='480' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='280' y1='40' x2='280' y2='80' stroke='#333333' strokeWidth='5' />
  </svg>,

// Connect 'focus person' to parents:
// (svgFatherMother, svgFather, svgMother)

  // Use svgFatherMother when focus person has both parents.
  svgFatherMother:
  <svg className='connect-father-mother' key='c-fm' width='560' height='80'>
  <line x1='80' y1='0' x2='80' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='480' y1='0' x2='480' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='80' y1='40' x2='480' y2='40' stroke='#333333' strokeWidth='5' />
  <line x1='280' y1='40' x2='280' y2='80' stroke='#333333' strokeWidth='5' />
  </svg>,

  // Use svgFather when focus person has father only.
  // Use svgMother when focus person has mother only.

// Connect father of focus person to paternal grandparents:
// (svgParentsOfFather, svgFatherOfFather, svgMotherOfFather)

  // Use svgParentsOfFather when father has both parents.
  // Use svgFatherOfFather when father has father only.
  // Use svgMotherOfFather when father has mother only.

// Connect mother of focus person to maternal grandparents:
// (svgParentsOfMother, svgFatherOfMother, svgMotherOfMother)

  // Use svgParentsOfMother when mother has both parents.
  // Use svgFatherOfMother when mother has father only.
  // Use svgMotherOfMother when mother has mother only.

// Connect focus person to children:
// (svgChildrenOfMale, svgChildrenOfFemale)

  // Use svgChildrenOfMale for male focus person.
  svgChildrenOfMale:
    <svg className='connect-children-male' key='c-cm' width='240' height='160'>
      <line x1='140' y1='40' x2='240' y2='40' stroke='#333333' strokeWidth='5' />
      <line x1='190' y1='40' x2='190' y2='120' stroke='#333333' strokeWidth='5' />
      <line x1='20' y1='120' x2='190' y2='120' stroke='#333333' strokeWidth='5' />
      <line x1='20' y1='120' x2='20' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>,

  // Use svgChildrenOfFemale for female focus person.
  svgChildrenOfFemale:
    <svg className='connect-children-female' key='c-cf' width='240' height='160'>
      <line x1='0' y1='40' x2='100' y2='40' stroke='#333333' strokeWidth='5' />
      <line x1='50' y1='40' x2=' 50' y2='120' stroke='#333333' strokeWidth='5' />
      <line x1='50' y1='120' x2='220' y2='120' stroke='#333333' strokeWidth='5' />
      <line x1='220' y1='120' x2='220' y2='160' stroke='#333333' strokeWidth='5' />
    </svg>
};

export { svgs };
