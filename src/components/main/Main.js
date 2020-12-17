import "./Main.css";
import assetBalance from "../../assets/assetBalance.png";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="mainContainer">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="chartsLeft">
            <div className="chartsLeftTitle">
              <div style={{marginLeft:"auto", marginRight:"auto"}}>
                <h1>Annual Projection</h1>
              </div>
              
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="mainCards">

          <div className="card">
            <h2 style={{paddingBottom:"10px", color:"#134dab"}}>Asset Balance</h2>
              <p style={{paddingBottom:"4px"}}>Enter Amount</p>
              <span style={{paddingRight:"30px", paddingBottom:"5px"}} className="font-bold text-title"><input type="number" style={{color: "black",boxSizing:"border-box",border:"2px solid gray", borderRadius: "4px", height:"30px", fontSize:"15px"}} placeholder="1,25,000"></input></span>
              
              <i
                className="fa fa-usd"
                aria-hidden="true"
              ></i>
              <br/>
              <br/>
              <span style={{paddingRight:"20px"}}>Last Updated</span><span style={{color:"grey"}}>3 Dec</span>
          </div>

          <div className="card">
            <h2 style={{paddingBottom:"10px", color:"#239ade"}}>Growth Rate</h2>
              <p style={{paddingBottom:"4px", color:"grey"}}>Enter Growth Rate</p>
              <span style={{paddingRight:"30px", paddingBottom:"5px"}} className="font-bold text-title"><input type="text" style={{paddingBottom:"3px",color: "black",boxSizing:"border-box",border:"2px solid gray", borderRadius: "4px", height:"30px", fontSize:"15px"}} placeholder="9.3%"></input></span>
              <i
                className="fa fa-arrow-up"
                aria-hidden="true"
              ></i>
              <br/>
              <br/>
              <span style={{paddingRight:"20px"}}>Inflation</span><span style={{color:"grey"}}>6%</span>
          </div>

          <div className="card">
            <h2 style={{paddingBottom:"10px", color:"#134dab"}}>Major Investments</h2>
              <p style={{paddingBottom:"4px", color:"grey"}}>Returns generated per month</p>
              <span style={{paddingRight:"30px", paddingBottom:"5px"}} className="font-bold text-title"><input type="number" style={{paddingBottom:"3px",color: "black",boxSizing:"border-box",border:"2px solid gray", borderRadius: "4px", height:"30px", fontSize:"15px"}} placeholder="1,25,000"></input></span>
              <i
                className="fa fa-usd"
                aria-hidden="true"
              ></i>
              <br/>
              <br/>
          </div>

          <div className="card">
            <h2 style={{paddingBottom:"10px", color:"#134dab"}}>Financial Independence</h2>
              <p style={{paddingBottom:"5px"}}>Age</p>
              <span style={{paddingRight:"130px", paddingBottom:"5px" ,color:"#134dab", fontSize:"25px"}} className="font-bold text-title">45 years</span>
              <i
                className="fa fa-heartbeat"
                aria-hidden="true"
              ></i>
              <br/>
              <br/>
              <span style={{paddingRight:"20px"}}>Optimized</span><span><button style={{borderRadius: "5px", color:"white",backgroundColor:"#008CBA"}}>Yes</button><button style={{borderRadius: "5px", color:"black",backgroundColor:"white"}}>No</button></span>
          </div>

          <div className="card">
            <h2 style={{paddingBottom:"10px", color:"#239ade"}}>Average Expenses</h2>
              <p style={{paddingBottom:"5px"}}>Amount</p>
              <span style={{paddingRight:"130px", paddingBottom:"5px" ,color:"#134dab", fontSize:"25px"}} className="font-bold text-title">25,000</span>
              <i
                className="fa fa-signal"
                aria-hidden="true"
              ></i>
              <br/>
              <br/>
              <span style={{paddingRight:"20px"}}>3 months average</span><span style={{color:"grey"}}>40,000</span>
          </div>      
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        
      </div>
    </main>
  );
};

export default Main;
