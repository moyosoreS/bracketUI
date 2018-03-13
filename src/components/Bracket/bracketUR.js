import React, { Component }from 'react';
import axios from 'axios';
import './bracket.css';

class BracketUR extends Component {
     handleClick1 = (e) => {
     document.getElementById("64").innerHTML = e;
     
     console.log(e);}

     handleClick2 = (e) => {
     document.getElementById("65").innerHTML = e;
     
     console.log(e);}

     handleClick3 = (e) => {
     document.getElementById("66").innerHTML = e;
     
     console.log(e);}

     handleClick4 = (e) => {
     document.getElementById("67").innerHTML = e;
     
     console.log(e);}

     handleClick5 = (e) => {
     document.getElementById("68").innerHTML = e;
     
     console.log(e);}

     handleClick6 = (e) => {
     document.getElementById("69").innerHTML = e;
     
     console.log(e);}

     handleClick7 = (e) => {
     document.getElementById("70").innerHTML = e;
     
     console.log(e);}

     handleClick8 = (e) => {
     document.getElementById("71").innerHTML = e;
     
     console.log(e);}
     handleClick9 = (e) => {
     document.getElementById("96").innerHTML = e;
     
     console.log(e);}

     handleClick10 = (e) => {
     document.getElementById("97").innerHTML = e;
     
     console.log(e);}
     handleClick11 = (e) => {
     document.getElementById("98").innerHTML = e;
     
     console.log(e);}
     handleClick12 = (e) => {
     document.getElementById("99").innerHTML = e;
     
     console.log(e);}
     handleClick13 = (e) => {
     document.getElementById("112").innerHTML = e;
     
     console.log(e);}
     handleClick14 = (e) => {
     document.getElementById("113").innerHTML = e;
     
     console.log(e);}
     handleClick15 = (e) => {
     document.getElementById("202").innerHTML = e;
     document.getElementById("302").innerHTML = e;
     
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
<main id="tournament" class="right">
  <ul class="roundR round-1">
    <li class="spacerR">&nbsp;</li>
    
    <li id="0" class="gameR game-topR winnerR" onClick={(e) => this.handleClick1(home_store[24])}>{ home_store[24] } <span>79</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="1" class="gameR game-bottomR " onClick={(e) => this.handleClick1(away_store[24])}>{ away_store[24] } <span>48</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="2" class="gameR game-topR winnerR" onClick={(e) => this.handleClick2(home_store[25])}>{ home_store[25] } <span>84</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="3" class="gameR game-bottomR " onClick={(e) => this.handleClick2(away_store[25])}>{ away_store[25] } <span>72</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="4" class="gameR game-topR " onClick={(e) => this.handleClick3(home_store[26])}>{ home_store[26] } <span>55</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="5" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick3(away_store[26])}>{ away_store[26] } <span>68</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="6" class="gameR game-topR winnerR" onClick={(e) => this.handleClick4(home_store[27])}>{ home_store[27] } <span>64</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="7" class="gameR game-bottomR " onClick={(e) => this.handleClick4(away_store[27])}>{ away_store[27] } <span>44</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="8" class="gameR game-topR winnerR" onClick={(e) => this.handleClick5(home_store[28])}>{ home_store[28] } <span>54</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="9" class="gameR game-bottomR " onClick={(e) => this.handleClick5(away_store[28])}>{ away_store[28] } <span>52</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="10" class="gameR game-topR winnerR" onClick={(e) => this.handleClick6(home_store[29])}>{ home_store[29] } <span>65</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="11" class="gameR game-bottomR " onClick={(e) => this.handleClick6(away_store[29])}>{ away_store[29] } <span>54</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="12" class="gameR game-topR winnerR" onClick={(e) => this.handleClick7(home_store[30])}>{ home_store[30] } <span>67</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="13" class="gameR game-bottomR " onClick={(e) => this.handleClick7(away_store[30])}>{ away_store[30] } <span>63</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="14" class="gameR game-topR winnerR" onClick={(e) => this.handleClick8(home_store[31])}>{ home_store[31] } <span>73</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="15" class="gameR game-bottomR " onClick={(e) => this.handleClick8(away_store[31])}>{ away_store[31] } <span>61</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-2">
    <li class="spacerR">&nbsp;</li>
    
    <li id="64" class="gameR game-topR winnerR" onClick={(e) => this.handleClick9(document.getElementById("64").innerHTML)}> <span>82</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="65" class="gameR game-bottomR " onClick={(e) => this.handleClick9(document.getElementById("65").innerHTML)}> <span>56</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="66" class="gameR game-topR winnerR" onClick={(e) => this.handleClick10(document.getElementById("66").innerHTML)}> <span>74</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="67" class="gameR game-bottomR " onClick={(e) => this.handleClick10(document.getElementById("67").innerHTML)}> <span>57</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="68" class="gameR game-topR " onClick={(e) => this.handleClick11(document.getElementById("68").innerHTML)}> <span>48</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="69" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick11(document.getElementById("69").innerHTML)}> <span>70</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="70" class="gameR game-topR " onClick={(e) => this.handleClick12(document.getElementById("70").innerHTML)}> <span>50</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="71" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick12(document.getElementById("71").innerHTML)}> <span>66</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-3">
    <li class="spacerR">&nbsp;</li>
    
    <li id="96" class="gameR game-topR winnerR" onClick={(e) => this.handleClick13(document.getElementById("96").innerHTML)}> <span>77</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="97" class="gameR game-bottomR " onClick={(e) => this.handleClick13(document.getElementById("97").innerHTML)}> <span>69</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="98" class="gameR game-topR " onClick={(e) => this.handleClick14(document.getElementById("98").innerHTML)}> <span>61</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="99" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick14(document.getElementById("99").innerHTML)}> <span>71</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-4">
    <li class="spacerR">&nbsp;</li>
    
    <li id="112" class="gameR game-topR winnerR" onClick={(e) => this.handleClick15(document.getElementById("112").innerHTML)}> <span>85</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="113" class="gameR game-bottomR " onClick={(e) => this.handleClick15(document.getElementById("113").innerHTML)}> <span>63</span></li>
    
    <li class="spacerR">&nbsp;</li>
  </ul>   
  <ul class="roundL round-5">
		
		
    <li id="202" class="gameL game-topL winnerL"> <span>85</span></li>
		
  </ul>		
</main>
</div>
      )
    }
}

export default BracketUR;
