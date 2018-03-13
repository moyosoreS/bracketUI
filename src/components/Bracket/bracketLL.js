import React, { Component }from 'react';
import axios from 'axios';
import './bracket.css';


class BracketLL extends Component {
     handleClick1 = (e) => {
     document.getElementById("72").innerHTML = e;
     
     console.log(e);}

     handleClick2 = (e) => {
     document.getElementById("73").innerHTML = e;
     
     console.log(e);}

     handleClick3 = (e) => {
     document.getElementById("74").innerHTML = e;
     
     console.log(e);}

     handleClick4 = (e) => {
     document.getElementById("75").innerHTML = e;
     
     console.log(e);}

     handleClick5 = (e) => {
     document.getElementById("76").innerHTML = e;
     
     console.log(e);}

     handleClick6 = (e) => {
     document.getElementById("77").innerHTML = e;
     
     console.log(e);}

     handleClick7 = (e) => {
     document.getElementById("78").innerHTML = e;
     
     console.log(e);}

     handleClick8 = (e) => {
     document.getElementById("79").innerHTML = e;
     
     console.log(e);}

     handleClick9 = (e) => {
     document.getElementById("100").innerHTML = e;
     
     console.log(e);}

     handleClick10 = (e) => {
     document.getElementById("101").innerHTML = e;
     
     console.log(e);}
     handleClick11 = (e) => {
     document.getElementById("102").innerHTML = e;
     
     console.log(e);}
     handleClick12 = (e) => {
     document.getElementById("103").innerHTML = e;
     
     console.log(e);}
     handleClick13 = (e) => {
     document.getElementById("114").innerHTML = e;
     
     console.log(e);}
     handleClick14 = (e) => {
     document.getElementById("115").innerHTML = e;
     
     console.log(e);}
     handleClick15 = (e) => {
     document.getElementById("201").innerHTML = e;
     document.getElementById("300").innerHTML = e;
     
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
<main id="tournament" class="left">
	<ul class="roundL round-1">

		<li class="spacerL">&nbsp;</li>
		
		<li id="16" class="gameL game-topL winnerL" onClick={(e) => this.handleClick1(home_store[0])}> { home_store[0] } <span>79</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="17" class="gameL game-bottomL " onClick={(e) => this.handleClick1(away_store[0])}> {away_store[0]}<span>48</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="18" class="gameL game-topL winnerL" onClick={(e) => this.handleClick2(home_store[1])}>{home_store[1]} <span>84</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="19" class="gameL game-bottomL " onClick={(e) => this.handleClick2(away_store[1])}>{away_store[1]} <span>72</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="20" class="gameL game-topL " onClick={(e) => this.handleClick3(home_store[2])}>{home_store[2]} St <span>55</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="21" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick3(away_store[2])}>{away_store[2]} <span>68</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="22" class="gameL game-topL winnerL" onClick={(e) => this.handleClick4(home_store[3])}>{home_store[3]} <span>64</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="23" class="gameL game-bottomL " onClick={(e) => this.handleClick4(away_store[3])}>{away_store[3]} <span>44</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="24" class="gameL game-topL winnerL" onClick={(e) => this.handleClick5(home_store[4])}>{home_store[4]} <span>54</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="25" class="gameL game-bottomL " onClick={(e) => this.handleClick5(away_store[4])}>{away_store[4]} <span>52</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="26" class="gameL game-topL winnerL" onClick={(e) => this.handleClick6(home_store[5])}>{home_store[5]} <span>65</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="27" class="gameL game-bottomL " onClick={(e) => this.handleClick6(away_store[5])}>{away_store[5]}<span>54</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="28" class="gameL game-topL winnerL" onClick={(e) => this.handleClick7(home_store[6])}>{home_store[6]} <span>67</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="29" class="gameL game-bottomL " onClick={(e) => this.handleClick7(away_store[6])}>{away_store[6]} <span>63</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="30" class="gameL game-topL winnerL" onClick={(e) => this.handleClick8(home_store[7])}>{home_store[7]} <span>73</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="31" class="gameL game-bottomL " onClick={(e) => this.handleClick8(away_store[7])}>{away_store[7]} <span>61</span></li>

		<li class="spacerL">&nbsp;</li>
	</ul>
	<ul class="roundL round-2">
		<li class="spacerL">&nbsp;</li>
		
		<li id="72" class="gameL game-topL winnerL" onClick={(e) => this.handleClick9(document.getElementById("72").innerHTML)}> <span>82</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="73" class="gameL game-bottomL "onClick={(e) => this.handleClick9(document.getElementById("73").innerHTML)}> <span>56</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="74" class="gameL game-topL winnerL" onClick={(e) => this.handleClick10(document.getElementById("74").innerHTML)}> <span>74</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="75" class="gameL game-bottomL " onClick={(e) => this.handleClick10(document.getElementById("75").innerHTML)}> <span>57</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="76" class="gameL game-topL " onClick={(e) => this.handleClick11(document.getElementById("76").innerHTML)}> <span>48</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="77" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick11(document.getElementById("77").innerHTML)}> <span>70</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="78" class="gameL game-topL " onClick={(e) => this.handleClick12(document.getElementById("78").innerHTML)}> <span>50</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="79" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick12(document.getElementById("79").innerHTML)}> <span>66</span></li>

		<li class="spacerL">&nbsp;</li>
	</ul>
	<ul class="roundL round-3">
		<li class="spacerL">&nbsp;</li>
		
		<li id="100" class="gameL game-topL winnerL" onClick={(e) => this.handleClick13(document.getElementById("100").innerHTML)}> <span>77</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="101" class="gameL game-bottomL " onClick={(e) => this.handleClick13(document.getElementById("101").innerHTML)}> <span>69</span></li>

		<li class="spacerL">&nbsp;</li>
		
		<li id="102" class="gameL game-topL " onClick={(e) => this.handleClick14(document.getElementById("102").innerHTML)}> <span>61</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="103" class="gameL game-bottomL winnerL" onClick={(e) => this.handleClick14(document.getElementById("103").innerHTML)}> <span>71</span></li>

		<li class="spacerL">&nbsp;</li>
	</ul>
	<ul class="roundL round-4">
		<li class="spacerL">&nbsp;</li>
		
		<li id="114" class="gameL game-topL winnerL" onClick={(e) => this.handleClick15(document.getElementById("114").innerHTML)}> <span>85</span></li>
		<li class="gameL game-spacerL">&nbsp;</li>
		<li id="115" class="gameL game-bottomL " onClick={(e) => this.handleClick15(document.getElementById("115").innerHTML)}> <span>63</span></li>
		
		<li class="spacerL">&nbsp;</li>
	</ul>	
	<ul class="roundL round-5">
		
		
		<li id="201" class="gameL game-topL winnerL"> <span>85</span></li>
		
	</ul>			
</main>
</div>
    	)
    }
}

export default BracketLL;
