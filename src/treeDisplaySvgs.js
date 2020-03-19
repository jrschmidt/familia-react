// JSX formatted SVG tags to draw connector lines between the PersonMini or
// PersonDisplayTile components in a TreeDisplay component.

import React from 'react';

const getGrandparentSvg = (male, female, locTag) => {

  if (male && female) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='0' y1='40' x2='40' y2='40' stroke='#666666' strokeWidth='4' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
    </svg>
  );

  if (male && !female) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='0' y1='40' x2='20' y2='40' stroke='#666666' strokeWidth='4' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
    </svg>
  );

  if (female && !male) return(
    <svg className={'svg-connect-' + locTag} key={locTag} width='40' height='160'>
    <line x1='20' y1='40' x2='40' y2='40' stroke='#666666' strokeWidth='4' />
    <line x1='20' y1='40' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
    </svg>
  );

  if (!male && !female) return null;

};

const getParentSvg = (highlight) => {

    if (highlight === 'father')
      return(
        <svg className={'svg-connect-p1'} key='p1' width='240' height='160'>
        <line x1='0' y1='40' x2='120' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='0' y1='40' x2='15' y2='30' stroke='#669999' strokeWidth='4' />
        <line x1='0' y1='40' x2='15' y2='50' stroke='#669999' strokeWidth='4' />
        <line x1='120' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='120' y1='40' x2='120' y2='160' stroke='#669999' strokeWidth='4' />
        </svg>
      );

    else if (highlight === 'mother')
      return (
        <svg className={'svg-connect-p1'} key='p1' width='240' height='160'>
        <line x1='0' y1='40' x2='120' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='120' y1='40' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='225' y1='30' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='225' y1='50' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='120' y1='40' x2='120' y2='160' stroke='#669999' strokeWidth='4' />
        </svg>
      );

    else
      return(
        <svg className={'svg-connect-p1'} key='p1' width='240' height='160'>
        <line x1='0' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='120' y1='40' x2='120' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );
}

const getSpouseChildrenConnector = (focusGender, highlight) => {

  if (focusGender === 'male')
    // spouse & children connectors for male focus person

    if (highlight === 'wife')
      return (
        <svg className='svg-connect-children-m' key='c1' width='240' height='160'>
        <line x1='140' y1='40' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='225' y1='30' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='225' y1='50' x2='240' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='200' y1='40' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );

    else if (highlight === 'child')
      return (
        <svg className='svg-connect-children-m' key='c1' width='240' height='160'>
        <line x1='140' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='200' y1='40' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );

    else
      return (
        <svg className='svg-connect-children-m' key='c1' width='240' height='160'>
        <line x1='140' y1='40' x2='240' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='200' y1='40' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='200' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='20' y1='140' x2='20' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );

  else
    // spouse & children connectors for female focus person

    if (highlight === 'husband')
      return (
        <svg className='svg-connect-children-f' key='c1' width='240' height='160'>
        <line x1='0' y1='40' x2='100' y2='40' stroke='#669999' strokeWidth='4' />
        <line x1='0' y1='40' x2='15' y2='30' stroke='#669999' strokeWidth='4' />
        <line x1='0' y1='40' x2='15' y2='50' stroke='#669999' strokeWidth='4' />
        <line x1='40' y1='40' x2='40' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='40' y1='140' x2='220' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='220' y1='140' x2='220' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );

    else if (highlight === 'child')
      return (
        <svg className='svg-connect-children-f' key='c1' width='240' height='160'>
        <line x1='0' y1='40' x2='100' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='40' y1='40' x2='40' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='40' y1='140' x2='220' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='220' y1='140' x2='220' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );

    else
      return (
        <svg className='svg-connect-children-f' key='c1' width='240' height='160'>
        <line x1='0' y1='40' x2='100' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='40' y1='40' x2='40' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='40' y1='140' x2='220' y2='140' stroke='#666666' strokeWidth='4' />
        <line x1='220' y1='140' x2='220' y2='160' stroke='#666666' strokeWidth='4' />
        </svg>
      );
}

const getChildrenSvg = (numberOfChildren, highlight) => {
  const plainColor = '#666666';
  const highlightColor = '#669999';

  const xxyy = {
    t: [380, 0, 380, 40],
    h1: [80, 40, 180, 40],
    h2: [180, 40, 280, 40],
    h3: [280, 40, 380, 40],
    h4: [380, 40, 480, 40],
    h5: [480, 40, 580, 40],
    h6: [580, 40, 680, 40],
    v1: [80, 40, 80, 80],
    v2: [180, 40, 180, 80],
    v3: [280, 40, 280, 80],
    v4: [380, 40, 380, 80],
    v5: [480, 40, 480, 80],
    v6: [580, 40, 580, 80],
    v7: [680, 40, 680, 80],
    vxx: [380, 80, 380, 200],
    hx1: [80, 200, 280, 200],
    hx2: [280, 200, 380, 200],
    hx3: [380, 200, 480, 200],
    hx4: [480, 200, 680, 200],
    vx1: [80, 200, 80, 240],
    vx2: [280, 200, 280, 240],
    vx3: [480, 200, 480, 240],
    vx4: [680, 200, 680, 240]
  };

  const getLineSegment = (id, color) => {
    let xy = xxyy[id];
    return (
      <line
        x1={xy[0]}
        y1={xy[1]}
        x2={xy[2]}
        y2={xy[3]}
        stroke={color}
        strokeWidth='4'
      />
    );
  }



  const getSegmentsList = (numberOfChildren) => {
    const segments = [
      ['t', 'v4'],
      ['t', 'h3', 'h4', 'v3', 'v5'],
      ['t', 'h2', 'h3', 'h4', 'h5', 'v2', 'v4', 'v6'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v5', 'v7'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'vx1'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'vx1', 'vx2'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'hx3', 'vx1', 'vx2', 'vx3'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'hx3', 'hx4', 'vx1', 'vx2', 'vx3', 'vx4']
    ];

  return segments[numberOfChildren];
  }

  const getHighlightedSegmentsList =  (numberOfChildren, hoveredChild) => {
    let segs = [];
    return segs;
  }

  const getSegments = (numberOfChildren, highlight) => {
    const segmentList = getSegmentsList(numberOfChildren);
    const highlightedSegmentsList = [];
    let segs = [];
    segmentList.forEach( segId => {
      segs.push(getLineSegment(segId, plainColor));
    });
    return segs;
  }

  return (
    <svg className='svg-children' width='760' height='240'>
      <>{getSegments(numberOfChildren, highlight)}< />
    </svg>
  );

}

const getPlusSignSvg = () => {
  return (
    <svg className='plus-sign' width='31' height='31'>
      <line x1='15' y1='6' x2='15' y2='23' stroke='#666666' strokeWidth='3' />
      <line x1='6' y1='15' x2='23' y2='15' stroke='#666666' strokeWidth='3' />
      <path fill='none' stroke='#666666' strokeWidth='3'
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
  getSpouseChildrenConnector,
  getChildrenSvg,
  getPlusSignSvg
};
