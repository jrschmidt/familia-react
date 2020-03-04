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
    t: [400, 0, 400, 40],
    h1: [100, 40, 200, 40],
    h2: [200, 40, 300, 40],
    h3: [300, 40, 400, 40],
    h4: [400, 40, 500, 40],
    h5: [500, 40, 600, 40],
    h6: [600, 40, 700, 40],
    v1: [100, 40, 100, 80],
    v2: [200, 40, 200, 80],
    v3: [300, 40, 300, 80],
    v4: [400, 40, 400, 80],
    v5: [500, 40, 500, 80],
    v6: [600, 40, 600, 80],
    v7: [700, 40, 700, 80],
    vxx: [400, 80, 400, 200],
    hx1: [100, 200, 300, 200],
    hx2: [300, 200, 400, 200],
    hx3: [400, 200, 500, 200],
    hx4: [500, 200, 700, 200],
    vx1: [100, 200, 100, 240],
    vx2: [300, 200, 300, 240],
    vx3: [500, 200, 500, 240],
    vx4: [700, 200, 700, 240]
  };

  const getLineSegment = (id, color) => {
    let xy = xxyy.id;
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
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v5', 'v7'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'vx1']
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'vx1', 'vx2'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'hx3', 'vx1', 'vx2', 'vx3'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7', 'vxx', 'hx1', 'hx2', 'hx3', 'hx4', 'vx1', 'vx2', 'vx3', 'vx4']
    ];

  return [ segments[numberOfChildren] ];
  }

  const getHighlightedSegmentsList =  (numberOfChildren, hoveredChild) => {
    let segs = [];
    return segs;
  }



  // const getHighlightedSegmentsList =  (numberOfChildren, hoveredChild) => {
  //   const hlsLists = [
  //     [],
  //     ['t', 'h1', 'h2', 'h3', 'v1'],
  //     ['t', 'h3', 'v3'],
  //     ['t', 'h4', 'v5'],
  //     ['t', 'h4', 'h5', 'h6', 'v7'],
  //     ['t', 'h1', 'h2', 'h3', 'v1'],
  //     ['t', 'h3', 'v3'],
  //     ['t', 'h4', 'v5']
  //   ];
  //
  //   let segs = [];
  //   if (numberOfChildren === 1 && hoveredChild === 1)
  //     segs = ['t', 'h3', 'v3'];
  //   if (numberOfChildren === 2) {
  //     if (hoveredChild === 1) segs = ['t', 'h2', 'h3', 'v2'];
  //     if (hoveredChild === 2) segs = ['t', 'v4'];
  //   }
  //   if (numberOfChildren > 2)
  //     segs = hlsLists[numberOfChildren];
  //   return segs;
  // }

  const getSegments = (numberOfChildren, highlight) => {
    const segmentList = getSegmentsList(numberOfChildren);
    const highlightedSegmentsList = getHighlightedSegmentsList(numberOfChildren, highlight);
    let segs = [];
    segmentList.forEach( segId => {
      console.log(`segId = ${{segId}}`);
      // const color = ( highlightedSegmentsList.includes(segId) )
      //   ? highlightColor
      //   : plainColor;
      // segs.push(getLineSegment(segId, color));
    });
    return segs;
  }

  return (
    <svg>
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
