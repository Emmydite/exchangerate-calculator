import React from 'react'
import {FaExchangeAlt, FaHeart, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            rateState : "",
            rateVal : 0,
            fromCurr : "EUR",
            toCurr : "USD",
            fromAmt : 1,
            toAmt : 0,
        };
    }

    //  const [appState, setAppState] = useState({
    //      rateState : 0,
    //      fromCurr : "",
    //      toCurr : "",
    //      fromAmt : "1",
    //      toAmt : ""
    //  });

      handleChange = e =>{
      this.setState({
         [e.target.name] : e.target.value
      });

     }

      handleInput = e =>{
        this.setState({
            [e.target.name] : e.target.value
         });
      
        //calculate()
    }

     handleClick = () =>{
        this.calculate();
    }


     calculate = () =>{
        const from_currency = this.state.fromCurr;
        
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch(proxyurl + `https://api.exchangerate-api.com/v4/latest/${from_currency}`)
                .then(res => res.json())
                .then(res => {
                    const to_currency  = this.state.toCurr;
                    const from_amt = this.state.fromAmt;
                    const rateRes = res.rates[to_currency];
                    this.setState({
                        rateState : `1 ${from_currency} = ${rateRes} ${to_currency}`,
                        rateVal : rateRes,
                        toAmt : (from_amt * rateRes).toFixed(2)
                    });

                })
                .catch(error => console.log( error.message));


               
    }

//     const social_panel_cont = document.querySelector('.social-panel-container');

//    const flotbtnClick =()=>{
//         social_panel_cont.classList.toggle('visible');
//     }

//    const closebtnClick =()=>{
//         social_panel_cont.classList.remove('visible');
//     }

   render(){
    return(
        <>
        <div className="container">
           <div className="currency">
             <select  name="fromCurr" defaultValue="EUR" onChange={this.handleChange}>
                 <option value="AED">AED</option>
                 <option value="ARS">ARS</option>
                 <option value="AUD">AUD</option>
                 <option value="BGN">BGN</option>
                 <option value="BRL">BRL</option>
                 <option value="BSD">BSD</option>
                 <option value="CAD">CAD</option>
                 <option value="CHF">CHF</option>
                 <option value="CLP">CLP</option>
                 <option value="CNY">CNY</option>
                 <option value="COP">COP</option>
                 <option value="CZK">CZK</option>
                 <option value="DKK">DKK</option>
                 <option value="DOP">DOP</option>
                 <option value="EGP">EGP</option>
                 <option value="EUR">EUR</option>
                 <option value="FJD">FJD</option>
                 <option value="GBP">GBP</option>
                 <option value="GTQ">GTQ</option>
                 <option value="HRK">HRK</option>
                 <option value="HUF">HUF</option>
                 <option value="IDR">IDR</option>
                 <option value="ILS">ILS</option>
                 <option value="INR">INR</option>
                 <option value="ISK">ISK</option>
                 <option value="JPY">JPY</option>
                 <option value="KRW">KRW</option>
                 <option value="KTZ">KZT</option>
                 <option value="MXN">MXN</option>
                 <option value="MYR">MYR</option>
                 <option value="NOK">NOK</option>
                 <option value="NZN">NZN</option>
                 <option value="PAB">PAB</option>
                 <option value="PEN">PEN</option>
                 <option value="PHP">PHP</option>
                 <option value="PKR">PKR</option>
                 <option value="PLN">PLN</option>
                 <option value="PYG">PYG</option>
                 <option value="RON">RON</option>
                 <option value="RUB">RUB</option>
                 <option value="SAR">SAR</option>
                 <option value="SEK">SEK</option>
                 <option value="SGD">SGD</option>
                 <option value="THB">THB</option>
                 <option value="TRY">TRY</option>
                 <option value="TWO">TWO</option>
                 <option value="UAH">UAH</option>
                 <option value="USD">USD</option>
                 <option value="UYU">UYU</option>
                 <option value="VND">VND</option>
                 <option value="ZAR">ZAR</option>

             </select>
             <input type="number" name="fromAmt" onChange={this.handleInput} value={this.state.fromAmt}/>
           </div>
           <div className="middle">
            <button id="exchange" onClick={this.handleClick}>
               <FaExchangeAlt />
            </button>
           <div className="rate" id="rate"> {this.state.rateState} </div>
           </div>

           <div className="currency">
               <select name="toCurr" defaultValue="USD" onChange={this.handleChange}>
                 <option value="AED">AED</option>
                 <option value="ARS">ARS</option>
                 <option value="AUD">AUD</option>
                 <option value="BGN">BGN</option>
                 <option value="BRL">BRL</option>
                 <option value="BSD">BSD</option>
                 <option value="CAD">CAD</option>
                 <option value="CHF">CHF</option>
                 <option value="CLP">CLP</option>
                 <option value="CNY">CNY</option>
                 <option value="COP">COP</option>
                 <option value="CZK">CZK</option>
                 <option value="DKK">DKK</option>
                 <option value="DOP">DOP</option>
                 <option value="EGP">EGP</option>
                 <option value="EUR">EUR</option>
                 <option value="FJD">FJD</option>
                 <option value="GBP">GBP</option>
                 <option value="GTQ">GTQ</option>
                 <option value="HRK">HRK</option>
                 <option value="HUF">HUF</option>
                 <option value="IDR">IDR</option>
                 <option value="ILS">ILS</option>
                 <option value="INR">INR</option>
                 <option value="ISK">ISK</option>
                 <option value="JPY">JPY</option>
                 <option value="KRW">KRW</option>
                 <option value="KTZ">KZT</option>
                 <option value="MXN">MXN</option>
                 <option value="MYR">MYR</option>
                 <option value="NOK">NOK</option>
                 <option value="NZN">NZN</option>
                 <option value="PAB">PAB</option>
                 <option value="PEN">PEN</option>
                 <option value="PHP">PHP</option>
                 <option value="PKR">PKR</option>
                 <option value="PLN">PLN</option>
                 <option value="PYG">PYG</option>
                 <option value="RON">RON</option>
                 <option value="RUB">RUB</option>
                 <option value="SAR">SAR</option>
                 <option value="SEK">SEK</option>
                 <option value="SGD">SGD</option>
                 <option value="THB">THB</option>
                 <option value="TRY">TRY</option>
                 <option value="TWO">TWO</option>
                 <option value="UAH">UAH</option>
                 <option value="USD">USD</option>
                 <option value="UYU">UYU</option>
                 <option value="VND">VND</option>
                 <option value="ZAR">ZAR</option>
               </select>
          <input type="number" name="toAmt"  onChange={this.handleInput} value={this.state.toAmt}/>
           </div>
        </div>

        {/* social panel */}
        <div className="social-panel-container">
         <div className="social-panel">
           <p>Created with <FaHeart /> by EmmySteve</p>
           <button className="close-btn" >
               <FaTimes />
           </button>
           <h4>Get in touch on</h4>
           <ul>
               <li>
                   <a href="https://www.github.com/emmydite" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
               </li>
               <li>
                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebook /></a>
               </li>
               <li>
                   <a href="https://www.linkedin.com/in/emmanuelsteve" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
               </li>
               <li>
                   <a href="https://www.twitter.com/emmacomessi" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a>
               </li>
           </ul>
         </div>
        </div>
        <button className="floating-btn" >
          Get in touch
        </button>
        </>
    );
   }

}

export default Home;