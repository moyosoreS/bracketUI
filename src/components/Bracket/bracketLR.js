import React, { Component }from 'react';
import axios from 'axios';
import './bracket.css';

class BracketLR extends Component {
     handleClick1 = (e) => {
     document.getElementById("80").innerHTML = e;
     
     console.log(e);}

     handleClick2 = (e) => {
     document.getElementById("81").innerHTML = e;
     
     console.log(e);}

     handleClick3 = (e) => {
     document.getElementById("82").innerHTML = e;
     
     console.log(e);}

     handleClick4 = (e) => {
     document.getElementById("83").innerHTML = e;
     
     console.log(e);}

     handleClick5 = (e) => {
     document.getElementById("84").innerHTML = e;
     
     console.log(e);}

     handleClick6 = (e) => {
     document.getElementById("85").innerHTML = e;
     
     console.log(e);}

     handleClick7 = (e) => {
     document.getElementById("86").innerHTML = e;
     
     console.log(e);}

     handleClick8 = (e) => {
     document.getElementById("87").innerHTML = e;
     
     console.log(e);}
     handleClick9 = (e) => {
     document.getElementById("104").innerHTML = e;
     
     console.log(e);}

     handleClick10 = (e) => {
     document.getElementById("105").innerHTML = e;
     
     console.log(e);}
     handleClick11 = (e) => {
     document.getElementById("106").innerHTML = e;
     
     console.log(e);}
     handleClick12 = (e) => {
     document.getElementById("107").innerHTML = e;
     
     console.log(e);}
     handleClick13 = (e) => {
     document.getElementById("116").innerHTML = e;
     
     console.log(e);}
     handleClick14 = (e) => {
     document.getElementById("117").innerHTML = e;
     
     console.log(e);}
     handleClick15 = (e) => {
     document.getElementById("203").innerHTML = e;
     document.getElementById("301").innerHTML = e;
     
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
<main id="tournament" class="right">
  <ul class="roundR round-1">
    <li class="spacerR">&nbsp;</li>
    
    <li id="32" class="gameR game-topR winnerR" onClick={(e) => this.handleClick1(home_store[8])}>{ home_store[8] }<span>79</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="33" class="gameR game-bottomR " onClick={(e) => this.handleClick1(away_store[8])}>{ away_store[8] } <span>48</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="34" class="gameR game-topR winnerR" onClick={(e) => this.handleClick2(home_store[9])}>{ home_store[9] } <span>84</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="35" class="gameR game-bottomR " onClick={(e) => this.handleClick2(away_store[9])}>{ away_store[9] } <span>72</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="36" class="gameR game-topR " onClick={(e) => this.handleClick3(home_store[10])}>{ home_store[10] } <span>55</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="37" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick3(away_store[10])}>{ away_store[10] } <span>68</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="38" class="gameR game-topR winnerR" onClick={(e) => this.handleClick4(home_store[11])}>{ home_store[11] } <span>64</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="39" class="gameR game-bottomR " onClick={(e) => this.handleClick4(away_store[11])}>{ away_store[11] } <span>44</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="40" class="gameR game-topR winnerR" onClick={(e) => this.handleClick5(home_store[12])}>{ home_store[12] } <span>54</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="41" class="gameR game-bottomR " onClick={(e) => this.handleClick5(away_store[12])}>{ away_store[12] } <span>52</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="42" class="gameR game-topR winnerR" onClick={(e) => this.handleClick6(home_store[13])}>{ home_store[13] } <span>65</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="43" class="gameR game-bottomR " onClick={(e) => this.handleClick6(away_store[13])}>{ away_store[13] } <span>54</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="44" class="gameR game-topR winnerR" onClick={(e) => this.handleClick7(home_store[14])}>{ home_store[14] } <span>67</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="45" class="gameR game-bottomR " onClick={(e) => this.handleClick7(away_store[14])}>{ away_store[14] } <span>63</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="46" class="gameR game-topR winnerR" onClick={(e) => this.handleClick8(home_store[15])}>{ home_store[15] } <span>73</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="47" class="gameR game-bottomR "onClick={(e) => this.handleClick8(away_store[15])}>{ away_store[15] } <span>61</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-2">
    <li class="spacerR">&nbsp;</li>
    
    <li id="80" class="gameR game-topR winnerR" onClick={(e) => this.handleClick9(document.getElementById("80").innerHTML)}> <span>82</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="81" class="gameR game-bottomR " onClick={(e) => this.handleClick9(document.getElementById("81").innerHTML)}> <span>56</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="82" class="gameR game-topR winnerR" onClick={(e) => this.handleClick10(document.getElementById("82").innerHTML)}> <span>74</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="83" class="gameR game-bottomR " onClick={(e) => this.handleClick10(document.getElementById("83").innerHTML)}> <span>57</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="84" class="gameR game-topR " onClick={(e) => this.handleClick11(document.getElementById("84").innerHTML)}> <span>48</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="85" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick11(document.getElementById("85").innerHTML)}> <span>70</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="86" class="gameR game-topR " onClick={(e) => this.handleClick12(document.getElementById("86").innerHTML)}> <span>50</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="87" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick12(document.getElementById("87").innerHTML)}> <span>66</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-3">
    <li class="spacerR">&nbsp;</li>
    
    <li id="104" class="gameR game-topR winnerR" onClick={(e) => this.handleClick13(document.getElementById("104").innerHTML)}> <span>77</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="105" class="gameR game-bottomR " onClick={(e) => this.handleClick13(document.getElementById("105").innerHTML)}> <span>69</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li id="106" class="gameR game-topR " onClick={(e) => this.handleClick14(document.getElementById("106").innerHTML)}> <span>61</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="107" class="gameR game-bottomR winnerR" onClick={(e) => this.handleClick14(document.getElementById("107").innerHTML)}> <span>71</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-4">
    <li class="spacerR">&nbsp;</li>
    
    <li id="116" class="gameR game-topR winnerR" onClick={(e) => this.handleClick15(document.getElementById("116").innerHTML)}> <span>85</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li id="117" class="gameR game-bottomR " onClick={(e) => this.handleClick15(document.getElementById("117").innerHTML)}> <span>63</span></li>
    
    <li class="spacerR">&nbsp;</li>
  </ul>   
  <ul class="roundL round-5">
		
		
	<li id="203" class="gameL game-topL winnerL"> <span>85</span></li>
		
  </ul>		
</main>
</div>
      )
    }
}

export default BracketLR;
