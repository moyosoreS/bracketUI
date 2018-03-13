import React, { Component }from 'react';
import axios from 'axios';
import './bracket.css';

class BracketUL extends Component {
     handleClick1 = (e) => {
     document.getElementById("88").innerHTML = e;
     
     console.log(e);}

     handleClick2 = (e) => {
     document.getElementById("89").innerHTML = e;
     
     console.log(e);}

     handleClick3 = (e) => {
     document.getElementById("90").innerHTML = e;
     
     console.log(e);}

     handleClick4 = (e) => {
     document.getElementById("91").innerHTML = e;
     
     console.log(e);}

     handleClick5 = (e) => {
     document.getElementById("92").innerHTML = e;
     
     console.log(e);}

     handleClick6 = (e) => {
     document.getElementById("93").innerHTML = e;
     
     console.log(e);}

     handleClick7 = (e) => {
     document.getElementById("94").innerHTML = e;
     
     console.log(e);}

     handleClick8 = (e) => {
     document.getElementById("95").innerHTML = e;
     
     console.log(e);}
     handleClick9 = (e) => {
     document.getElementById("108").innerHTML = e;
     
     console.log(e);}

     handleClick10 = (e) => {
     document.getElementById("109").innerHTML = e;
     
     console.log(e);}
     handleClick11 = (e) => {
     document.getElementById("110").innerHTML = e;
     
     console.log(e);}
     handleClick12 = (e) => {
     document.getElementById("111").innerHTML = e;
     
     console.log(e);}
     handleClick13 = (e) => {
     document.getElementById("118").innerHTML = e;
     
     console.log(e);}
     handleClick14 = (e) => {
     document.getElementById("119").innerHTML = e;
     
     console.log(e);}
     handleClick15 = (e) => {
     document.getElementById("200").innerHTML = e;
     document.getElementById("303").innerHTML = e;
     
     console.log(e);}

    constructor(props) {
        super(props);
        this.state = {
            current: 'current',
	    games: {},
   
        };
    }

    componentDidMount() {
	console.log('I got in!');
          axios.get('https://trungics-gse00013027.integration.us2.oraclecloud.com/integration/flowapi/rest/GETBRACKETDATA/v01/getallteams', {
                headers: {
                          Authorization: 'Basic Y2xvdWQuYWRtaW46cExVQ2t5QDNGbE9vcg==',
                         }
	})
      	.then(res => {
	
        	var games = res.data.Games;
        
        
		console.log("Response Games: ", res.data.Games);
		console.log("State Games:", games.Games);
        
         
        	this.setState({ games: games });
	
      })
  	.catch(function (error) {
    		console.log(error);
  	});
  }

render() {

	var play = this.state.games;
	var json_games = JSON.stringify(play);
	var home_store = [];
	var away_store = [];

	JSON.parse(json_games, (key, value) =>{ 
		if (key === 'HomeTeam'){
	
			home_store.push(value);
			console.log("key: ", key, "value: ", value.HomeTeam)}
		else if (key === 'AwayTeam'){
			away_store.push(value);
			console.log("Key: ", key, "value", value.AwayTeam)}
			console.log("Home Team Store: ", home_store);
			console.log("Away Team Store: ", away_store);
	});


	console.log("DATA CONV: ", json_games["HomeTeam"]);
      return (
        <div>
        <h1>2013 NCAA Tournament - Midwest Bracket</h1>
<main id="tournament" class="left">
  <ul class="roundL round-1">
    <li class="spacerL">&nbsp;</li>
    
    <li id="48" class="gameL game-topL winnerL" onClick={(e) => this.handleClick1(home_store[16])}>{ home_store[16] } <span>79</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="49" class="gameL game-bottomL " onClick={(e) => this.handleClick1(away_store[16])}>{ away_store[16] } <span>48</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="50" class="gameL game-topL winnerL" onClick={(e) => this.handleClick2(home_store[17])}>{ home_store[17] } <span>84</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="51" class="gameL game-bottomL " onClick={(e) => this.handleClick2(away_store[17])}>{ away_store[17] } <span>72</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="52" class="gameL game-topL " onClick={(e) => this.handleClick3(home_store[18])}>{ home_store[18] } <span>55</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="53" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick3(away_store[18])}>{ away_store[18] } <span>68</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="54" class="gameL game-topL winnerL" onClick={(e) => this.handleClick4(home_store[19])}>{ home_store[19] } <span>64</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="55" class="gameL game-bottomL " onClick={(e) => this.handleClick4(away_store[19])}>{ away_store[19] } <span>44</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="56" class="gameL game-topL winnerL" onClick={(e) => this.handleClick5(home_store[20])}>{ home_store[20] } <span>54</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="57" class="gameL game-bottomL " onClick={(e) => this.handleClick5(away_store[20])}>{ away_store[20] } <span>52</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="58" class="gameL game-topL winnerL" onClick={(e) => this.handleClick6(home_store[21])}>{ home_store[21] } <span>65</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="59" class="gameL game-bottomL " onClick={(e) => this.handleClick6(away_store[21])}>{ away_store[21] } <span>54</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="60" class="gameL game-topL winnerL" onClick={(e) => this.handleClick7(home_store[22])}>{ home_store[22] } <span>67</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="61" class="gameL game-bottomL " onClick={(e) => this.handleClick7(away_store[22])}>{ away_store[22] } <span>63</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="62" class="gameL game-topL winnerL" onClick={(e) => this.handleClick8(home_store[23])}>{ home_store[23] } <span>73</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="63" class="gameL game-bottomL " onClick={(e) => this.handleClick8(away_store[23])}>{ away_store[23] } <span>61</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-2">
    <li class="spacerL">&nbsp;</li>
    
    <li id="88" class="gameL game-topL winnerL" onClick={(e) => this.handleClick9(document.getElementById("88").innerHTML)}> <span>82</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="89" class="gameL game-bottomL " onClick={(e) => this.handleClick9(document.getElementById("89").innerHTML)}> <span>56</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="90" class="gameL game-topL winnerL" onClick={(e) => this.handleClick10(document.getElementById("90").innerHTML)}> <span>74</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="91" class="gameL game-bottomL " onClick={(e) => this.handleClick10(document.getElementById("91").innerHTML)}> <span>57</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="92" class="gameL game-topL " onClick={(e) => this.handleClick11(document.getElementById("92").innerHTML)}> <span>48</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="93" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick11(document.getElementById("93").innerHTML)}> <span>70</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="94" class="gameL game-topL " onClick={(e) => this.handleClick12(document.getElementById("94").innerHTML)}> <span>50</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="95" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick12(document.getElementById("95").innerHTML)}> <span>66</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-3">
    <li class="spacerL">&nbsp;</li>
    
    <li id="108" class="gameL game-topL winnerL" onClick={(e) => this.handleClick13(document.getElementById("108").innerHTML)}> <span>77</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="109" class="gameL game-bottomL " onClick={(e) => this.handleClick13(document.getElementById("109").innerHTML)}> <span>69</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="110" class="gameL game-topL " onClick={(e) => this.handleClick14(document.getElementById("110").innerHTML)}> <span>61</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="111" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick14(document.getElementById("111").innerHTML)}> <span>71</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-4">
    <li class="spacerL">&nbsp;</li>
    
    <li id="118" class="gameL game-topL winnerL" onClick={(e) => this.handleClick15(document.getElementById("118").innerHTML)}> <span>85</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="119" class="gameL game-bottomL " onClick={(e) => this.handleClick15(document.getElementById("119").innerHTML)}> <span>63</span></li>
    
    <li class="spacerL">&nbsp;</li>
  </ul>   
  <ul class="roundL round-5">
		
		
   <li id="200" class="gameL game-topL winnerL"> <span>85</span></li>
		
  </ul>		
</main>
</div>
      )
    }
}

export default BracketUL;
