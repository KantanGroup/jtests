import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import Link from './../../components/Link';

const desktopStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

class KanjiDesktop extends React.Component {
  static propTypes = {
    kanjis: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { kanjis } = this.props;
    return (
      <div style={desktopStyles.root}>
        <GridList
          cellHeight={100}
          cols={10}
          style={desktopStyles.gridList}
        >
          {kanjis.map((kanji) => (
            <GridTile
              key={kanji.code}
              title={<span><b>{kanji.meaning}</b></span>}
            >
              <center>
                <Link to={`/japanese/kanji/${String.fromCharCode(kanji.code)}`}><h1 style={{ fontSize: 36 }}>{String.fromCharCode(kanji.code)}</h1></Link>
              </center>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default KanjiDesktop;
