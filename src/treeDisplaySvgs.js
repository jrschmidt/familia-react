// JSX formatted SVG tags to draw connector lines between the PersonMini or
// PersonDisplayTile components in a TreeDisplay component.

import React from 'react';

const svgs = {

// Connect 'focus person' to parents:
// (svgFatherMother, svgFather, svgMother)

  // Use svgFatherMother when focus person has both parents.
  svgFatherMother:
  <svg className='connect-father-mother' key='c-fm' width='560' height='80'>
  <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='480' y1='0' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='80' y1='40' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='280' y1='40' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
  </svg>,

  // Use svgFather when focus person has father only.
  svgFather:
  <svg className='connect-father' key='c-f' width='560' height='80'>
  <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='80' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='280' y1='40' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
  </svg>,

  // Use svgMother when focus person has mother only.
  svgMother:
  <svg className='connect-mother' key='c-m' width='560' height='80'>
  <line x1='480' y1='0' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='280' y1='40' x2='480' y2='40' stroke='#666666' strokeWidth='5' />
  <line x1='280' y1='40' x2='280' y2='80' stroke='#666666' strokeWidth='5' />
  </svg>,


// Connect father of focus person to paternal grandparents:
// (svgParentsOfFather, svgFatherOfFather, svgMotherOfFather)

  // Use svgParentsOfFather when father has both parents.
  svgParentsOfFather:
    <svg className='connect-parents-of-father' key='c-pf' width='360' height='80'>
      <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='80' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

  // Use svgFatherOfFather when father has father only.
  svgFatherOfFather:
    <svg className='connect-father-of-father' key='c-ff' width='360' height='80'>
      <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='80' y1='40' x2='180' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

  // Use svgMotherOfFather when father has mother only.
  svgMotherOfFather:
    <svg className='connect-mother-of-father' key='c-mf' width='360' height='80'>
      <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,


// Connect mother of focus person to maternal grandparents:
// (svgParentsOfMother, svgFatherOfMother, svgMotherOfMother)

  // Use svgParentsOfMother when mother has both parents.
  svgParentsOfMother:
    <svg className='connect-parents-of-mother' key='c-pm' width='360' height='80'>
    <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='80' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

  // Use svgFatherOfMother when mother has father only.
  svgFatherOfMother:
    <svg className='connect-father-of-mother' key='c-pm' width='360' height='80'>
    <line x1='80' y1='0' x2='80' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='80' y1='40' x2='180' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,

  // Use svgMotherOfMother when mother has mother only.
  svgMotherOfMother:
    <svg className='connect-mother-of-mother' key='c-pm' width='360' height='80'>
    <line x1='280' y1='0' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='180' y1='40' x2='280' y2='40' stroke='#666666' strokeWidth='5' />
    <line x1='180' y1='40' x2='180' y2='80' stroke='#666666' strokeWidth='5' />
    </svg>,


// Connect focus person to children:
// (svgChildrenOfMale, svgChildrenOfFemale)

  // Use svgChildrenOfMale for male focus person.
  svgChildrenOfMale:
    <svg className='connect-children-male' key='c-cm' width='560' height='120'>
      <line x1='80' y1='40' x2='80' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='480' y1='0' x2='480' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='80' y1='80' x2='480' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='180' y1='80' x2='180' y2='120' stroke='#666666' strokeWidth='5' />
    </svg>,

  // Use svgChildrenOfFemale for female focus person.
  svgChildrenOfFemale:
    <svg className='connect-children-female' key='c-cf' width='560' height='120'>
      <line x1='80' y1='0' x2='80' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='480' y1='40' x2=' 480' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='80' y1='80' x2='480' y2='80' stroke='#666666' strokeWidth='5' />
      <line x1='380' y1='80' x2='380' y2='120' stroke='#666666' strokeWidth='5' />
    </svg>
};

export { svgs };
