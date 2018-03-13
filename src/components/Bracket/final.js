import React, { Component } from 'react';
import './bracket.css';

class Final extends Component {
     handleClick1 = (e) => {
     document.getElementById("304").innerHTML = e;
     
     console.log(e);}
     handleClick2 = (e) => {
     document.getElementById("305").innerHTML = e;
     
     console.log(e);}

	constructor(props) {
    super(props);
    this.state = {
      current: 'current',
    };
  }

  render() {
    return (
      <div>
      <div >
<main id="tournament" class="left" style={{marginLeft: 0, marginRight:0}}>
  <ul class="roundL round-1">
	<li class="spacerL">&nbsp;</li>
		
	<li id="300" class="gameL game-topL winnerL" onClick={(e) => this.handleClick1(document.getElementById("300").innerHTML)}> </li>
	<li class="gameL game-spacerL">&nbsp;</li>
	<li id="301" class="gameL game-bottomL " onClick={(e) => this.handleClick1(document.getElementById("301").innerHTML)}> </li>
		
	<li class="spacerL">&nbsp;</li>
	</ul>	
	<ul class="roundL round-5">
		
		
	<li id="304" class="gameL game-topL winnerL"> <span>85</span></li>
		
	</ul>			
</main>
      </div>
      <div>
<main id="tournament" class="left">
  <ul class="roundL round-2">
	<li class="spacerL">&nbsp;</li>
		
	<li id="302" class="gameL game-topL winnerL" onClick={(e) => this.handleClick2(document.getElementById("302").innerHTML)}> </li>
	<li class="gameL game-spacerL">&nbsp;</li>
	<li id="303" class="gameL game-bottomL " onClick={(e) => this.handleClick2(document.getElementById("303").innerHTML)}> </li>
		
	<li class="spacerL">&nbsp;</li>
	</ul>	
	<ul class="roundL round-5">
		
		
	<li id="305" class="gameL game-topL winnerL"> <span>85</span></li>
		
	</ul>
</main>

<main id="tournament" class="left">
  <ul class="roundL round-3">
	<button id="submit"> Submit Bracket </button>
		
	</ul>
</main>
      </div>
      </div>
    )
  }
}

export default Final;
