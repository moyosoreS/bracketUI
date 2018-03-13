import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderIf from 'render-if';

import BracketLL from './Bracket/bracketLL';
import BracketUL from './Bracket/bracketUL';
import BracketUR from './Bracket/bracketUR';
import BracketLR from './Bracket/bracketLR';
import Final from './Bracket/final'
import Rankings from './ranking';

import './Bracket/bracket.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
    <MuiThemeProvider>
     <div>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Dashboard" value="Dashboard">
          <div>
            <h2 style={styles.headline}>Dashboard</h2>
          </div>
        </Tab>
        <Tab label="Rankings" value="Rankings">
          <div>
            <h2 style={styles.headline}>Rankings</h2>
            <p>
            </p>
          </div>
        </Tab>
      </Tabs>
           {renderIf(this.state.value==='splash')(
             <div>
             <p> Splash </p>
             </div>
           )}
           {renderIf(this.state.value==='Dashboard')(
            <div>
             <div class="topRow">
               <BracketUL />
               <div class="upperFinal">
               </div>
               <BracketUR />
            </div>
            <div class="Final">
            <Final />
            </div>
            <div class="bottomRow">
               <BracketLL />
               <div class="lowerFinal">
               </div>
               <BracketLR />
             </div>
            </div>
           )}
           {renderIf(this.state.value==='Rankings')(
             <div>
               <Rankings />
             </div>
           )}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Dashboard;