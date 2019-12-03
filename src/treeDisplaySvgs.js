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


const getChildrenSvgs = (numberOfChildren, highlight) => {
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
  };

  const getLineSegment = (id, color) => {
    const xy = xxyy[id];
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

  const getSegmentsList =  (numberOfChildren) => {
    const segments = [
      ['t', 'v4'],
      ['t', 'h3', 'h4', 'v3', 'v5'],
      ['t', 'h2', 'h3', 'h4', 'h5', 'v2', 'v4', 'v6'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h6', 'v1', 'v3', 'v5', 'v7'],
      ['t', 'h1', 'h2', 'h3', 'v1'],
      ['t', 'h1', 'h2', 'h3', 'v1', 'v3'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'v1', 'v3', 'v5'],
      ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v5', 'v7']
    ];

  const extension = ['t', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'v1', 'v3', 'v4', 'v5', 'v7'];

  return (numberOfChildren > 4)
    ? [ segments[numberOfChildren] ]
    : [ extension, segments[numberOfChildren]];
  }

  const getHighlightedSegmentsList =  (numberOfChildren, hoveredChild) => {
    const hlsLists = [
      [],
      ['t', 'h1', 'h2', 'h3', 'v1'],
      ['t', 'h3', 'v3'],
      ['t', 'h4', 'v5'],
      ['t', 'h4', 'h5', 'h6', 'v7'],
      ['t', 'h1', 'h2', 'h3', 'v1'],
      ['t', 'h3', 'v3'],
      ['t', 'h4', 'v5']
    ];

    let segs = [];
    if (numberOfChildren === 1 && hoveredChild === 1)
      return ['t', 'h3', 'v3'];
    if (numberOfChildren === 2) {
      if (hoveredChild === 1) return ['t', 'h2', 'h3', 'v2'];
      if (hoveredChild === 2) return ['t', 'v4'];
    }
    if (numberOfChildren > 2)
      return hlsLists[numberOfChildren];
  }

  const getSegments = (numberOfChildren, highlight) => {
    const segmentList = this.getSegmentsList(numberOfChildren);
    const highlightedSegmentsList = this.getHighlightedSegmentsList(numberOfChildren, highlight);
    return segmentList.map( (segId) => {
      const color = ( highlightedSegmentsList.includes(segId) )
        ? highlightColor
        : plainColor;
      return this.getLineSegment(segId, color);
    });
  }

  return (<svg>
    <>{this.getSegments()}< />
  </svg>);

// className='connect' key='svg-single-1' width='720' height='160'
}


const getSiblingsSvg = (rowType) => {
  const svgs = {

    'single-1':
      <svg className='connect' key='svg-single-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'single-2':
      <svg className='connect' key='svg-single-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'single-3':
      <svg className='connect' key='svg-single-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='200' y1='40' x2='600' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='200' y1='40' x2='200' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='400' y1='40' x2='400' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='600' y1='40' x2='600' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'final-1':
      <svg className='connect' key='svg-final-1' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'final-2':
      <svg className='connect' key='svg-final-2' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'final-3':
      <svg className='connect' key='svg-final-3' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='500' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'final-4':
      <svg className='connect' key='svg-final-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>,

    'extend-4':
      <svg className='connect' key='svg-extend-4' width='720' height='160'>
        <line x1='400' y1='0' x2='400' y2='160' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='700' y2='40' stroke='#666666' strokeWidth='4' />
        <line x1='100' y1='40' x2='100' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='300' y1='40' x2='300' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='500' y1='40' x2='500' y2='80' stroke='#666666' strokeWidth='4' />
        <line x1='700' y1='40' x2='700' y2='80' stroke='#666666' strokeWidth='4' />
      </svg>

  };
  return svgs[rowType];

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
  getChildrenSvgs,
  getSiblingsSvg,
  getPlusSignSvg
};
