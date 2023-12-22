import React, { useState } from "react";








const Objects = () => {

    const [coins, setCoins] = useState({gold:0, silver:0, bronze:0})
    console.log("Coins: ", coins);
    
    function increGold(){
        // setCoins({ gold: coins.gold+1, silver: coins.silver, bronze: coins.bronze})
        setCoins({...coins, gold: coins.gold+1})
    }

    function restCoins(){
        setCoins({gold:0, silver:0, bronze:0})
    }

  return(
   <div className="ObjectCounter">
        <h1>Gold: {coins.gold} Silver: {coins.silver}, Bronze: {coins.bronze}</h1>
        <button onClick={increGold} >Gold</button>
        <button onClick={()=>setCoins({...coins, silver: coins.silver+1})} >Silver</button>
        <button onClick={()=>setCoins({...coins, bronze: coins.bronze+1})}>Bronze</button>
        <button onClick={restCoins}>Reset</button>
   </div>

  )
};

export default Objects;
