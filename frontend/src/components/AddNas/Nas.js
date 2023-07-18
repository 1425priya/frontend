import React,{useState} from 'react'
import './nas.css'

const Nas = () => {
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    const [isSwitchCheck, setIsCheck] = useState(false);

    const handleSwitchChange = (event) => {
      setIsSwitchChecked(event.target.checked);
    };
    const handleChange = (event) => {
        setIsCheck(event.target.checked);
      };
  return (
  
        
        <div className="container">
            <form action="/">
            <header>Add Nas</header>
             
             <div className="basic-information">
                <span className="title">Basic Information</span>
                <hr></hr>
                <div className="fields">
                    <div className="input-field">
                        <label>Status</label>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                    </div> 
                   

                    <div className="input-field">
                        <label>Select Franchise</label>
                        <select required>
                            <option>ALL CONNECT NETWORK SERVICES PVT LTD </option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Nas Type</label>
                        <select required>
                            <option>Select Nas Type</option>
                            <option>Mikrotik</option>
                            <option>Cisco</option>
                            <option>Juniper</option>
                            <option>Huawei</option>
                            <option>Huawei 2</option>
                            <option>Alcatel</option>
                            <option>Ericsson</option>
                            <option>MPD</option>
                            <option>HB</option>
                            <option>Fortigate</option>
                            <option>Custom</option>
                            <option>VBNG-ROUTER</option>
                            <option>NetElastic VBNG</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="input-field">
                        <label>IP address</label>
                        <input type="text" placeholder="Enter" required />
                    </div>

                    <div className="input-field">
                        <label>Secret</label>
                        <input type="text" placeholder="Enter" required />
                    </div>

                    <div className="input-field">
                        <label>Accounting Interval</label>
                        <div className="account">
                            <input type="text" placeholder="" required />
                            <button className="btn">Seconds</button>
                        </div>
                    </div>
                    

                    <div className="input-field">
                        <label>COA Port</label>
                        <input type="text" placeholder="Enter" required />
                    </div>

                    <div className="input-field">
                        <label>COA use Method</label>
                        <select required>
                            <option>On fly</option>
                            <option>Disconnect</option>
                        </select>
                </div>
                </div>
             </div>

             
             <div className="snmp-info">
                <span className="title">SNMP Info</span>
                <hr></hr>
                <div className="fields">
                    <div className="input-field">
                        <label>Enable SNMP</label>
                        <label className="switch">
                            <input type="checkbox" 
                            checked={isSwitchChecked}
                            onChange={handleSwitchChange}/>
                            <span className="slider round"></span>
                          </label>
                          {isSwitchChecked && (
                          <div className="input-field2">
                            <label>
                                  SNMP Ip
                                  <input type="text" />
                           </label>

                           <label>
                               SNMP Community
                              <input type="text" />
                            </label>

                            <div className="submit-option">
                               <button className="submited" >Test SNMP</button>
                            </div>
                           </div>
                           )}
  
                    </div> 
                    </div>
                    </div>


                    <div className="radius-information">
                        <span className="title">Radius Information</span>
                        <hr></hr>
                        <div className="fields">
                            <div className="input-field">
                                <label >Cluster radius</label>
                                <label className="switch" >
                                    <input type="checkbox"  
                                     checked={isSwitchCheck}
                                     onChange={handleChange}/>
                                    <span className="slider round"></span>
                                  </label>
                                  {isSwitchCheck && (
                                  <div className="input1">
                                    <label >Select AAA</label><br/>
                                    <select required>
                                      <option>AAA_[]</option>
                                      <option>AAA_127.0.0.1[127.0.0.1]</option>
                                     </select>
                                </div>
                                 )}
                            </div> 
                            </div>
                            </div>


                            <div className="expired-pool">
                                <span className="title">Expired Pool</span>
                                <hr></hr>
                                <div className="fields">

                                    <div className="input-field">
                                        <label>In-active pool</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                          </label>
                                    </div> 

                                    <div className="input-field">
                                        <label>Suspend pool</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                          </label>
                                    </div> 

                                    <div className="input-field">
                                        <label>Expired pool</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                          </label>
                                    </div> 
                                    <div className="input-field">
                                        <label>FUP limit over pool</label>
                                        <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                          </label>
                                    </div> 
                                    </div>
                                    </div>


                                    <div className="fields">
                                        <div className="des">
                                            <label>Description</label>
                                            <textarea name="Billing address" cols="50" rows="10"></textarea>
                                            
                                        </div>
                                    </div>
                <div className="submit-button">
                    <button className="cancel">Cancel</button>
                    <button className="submit">Submit</button>
                </div>
                </form>
                    
            </div>
           
        
  
  )
}

export default Nas