import React from 'react'
import './adduser.css'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Adduser = () => {
    const history = useHistory()

    const [ user, setUser] = useState({
        sfrench:"", sbranch:"", uname:"", pwd:"", fname:"", lname:"", cname:"", mnum:"", altnum:"", email:"", aemail:"", ref:"", adn:"",
        pryser:"",blgtp:"",blgmd:"",pac:"",spac:"",utyp:"",insamt:"",secdpst:"",pnum:"",pdate:"",edate:"",isauth:"",isstate:"",
        ipad:"",node:"",pop:"",switc:"",sport:"",ctype:"",fiber:"",dname:"",aproto:"",autorenew:"false",bmac:"false",ebind:"false",dspnd:"false",cid:""
    
    })

    const handleChange = e => {
        const {  name, value,type, checked  } = e.target
        const newValue = type === 'checkbox' ? checked : value;
               
        setUser ({
            ...user,
            [name]: newValue,
            
          });
        };
    

        const adduser = e => {
            e.preventDefault()
            const {  sfrench, sbranch, uname,  pwd, fname, lname,cname,mnum,altnum,email,aemail,ref, adn,
                pryser,blgtp,blgmd,pac,spac,utyp,insamt,secdpst,pnum,pdate,edate,isauth,isstate,
                ipad,node,pop,switc,sport,ctype,fiber,dname,aproto,autorenew,bmac,ebind,dspnd,cid} = user;
            if ( sfrench && sbranch && uname &&  pwd && fname && lname && cname && mnum && altnum && email && aemail && ref && adn
                && pryser && blgtp && blgmd && pac && spac && utyp && insamt && secdpst && pnum && pdate && edate && isauth &&isstate&&
                ipad && node && pop && switc && sport && ctype && fiber && dname && aproto && autorenew && bmac && ebind && dspnd && cid) {
              const userData = {
                sfrench: user.sfrench,
                sbranch: user.sbranch,
                uname: user.uname,
                pwd: user.pwd,
                fname: user.fname,
                lname: user.lname,
                cname: user.cname,
                mnum: user.mnum,
                altnum: user.altnum,
                email: user.email,
                aemail: user.aemail,
                ref: user.ref,
                adn: user.adn,
                pryser:user.pryser,
                blgtp:user.blgtp,
                blgmd:user.blgmd,
                pac:user.pac, spac:user.spac, utyp:user.utyp, insamt:user.insamt, secdpst:user.secdpst,pnum:user.pnum, pdate:user.pdate,
                edate:user.edate,isauth:user.isauth,isstate:user.isstate,
                ipad:user.ipad,node:user.node,pop:user.pop,switc:user.switc,sport:user.sport,ctype:user.ctype,fiber:user.fiber,dname:user.dname,aproto:user.aproto,autorenew:user.autorenew,bmac:user.bmac,ebind:user.ebind,dspnd:user.dspnd,cid:user.cid
              
             
                
              };
              axios.post('http://localhost:9002/adduser', userData)
                .then((res) => {
                  alert(res.data.message);
                  history.push('/login');
                })
                .catch((error) => {
                  console.error(error);
                  alert('Error occurred during Adding user');
                });
            } else {
              alert('Invalid input');
            }
          };
        
  return (
   <div className="Adduser" >
       
         <div className="container">
         {console.log("AddUser", user)}
    <form action="/"  onSubmit={(e) => adduser(e)} >
        <div className="first">
            <header>Registration</header>
            <span className="title">CAF Verification</span>
           <hr></hr>
           
           </div>
           <hr></hr><br/>
            <div className="details personal">
                <span className="title">Basic Infomation</span>
               
                <div className="fields">
                    <div className="input-field" >
                        <label>Select Franchise</label>
                        <select required value={user.sfrench} name="sfrench" onChange={handleChange}>
                            <option >--Select Franchise--</option>
                            <option>ALL CONNECT NETWORK SERVICE PVT LTD</option>
                            <option>ALL CONNECT</option>
                            <option>SUPERSONIC BROADBRAND</option>
                        </select>
                    </div>

                    <div className="input-field" >
                        <label>Branch</label>
                        <select  required value={user.sbranch} name="sbranch" onChange={handleChange}>
                            <option  >--Select Branch--</option>
                            <option>Default Branch</option>
                            <option>Supersonic Branch</option>
                        </select>
                    </div>

                    <div className="input-field"  >
                        <label>User Name</label>
                        <input value={user.uname} name="uname" onChange={handleChange}  type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="input-field">
                        <label>Password</label>
                        <input value={user.pwd} name="pwd" onChange={handleChange}  type="password" placeholder="Enter Password" required />
                    </div>

                    
                    <div className="input-field">
                        <label>First Name</label>
                        <input value={user.fname} name="fname" onChange={handleChange} type="text" placeholder="Enter your name" required />
                    </div>

                    
                    <div className="input-field">
                        <label>Last Name</label>
                        <input value={user.lname} name="lname" onChange={handleChange} type="text" placeholder="Enter your name" required />
                    </div>

                    
                    <div className="input-field">
                        <label>Father Name / Company Name</label>
                        <input value={user.cname} name="cname" onChange={handleChange}  type="text" placeholder="Enter name" required />
                    </div>

                    <div className="input-field">
                        <label>Register Mobile</label>
                        <input value={user.mnum} name="mnum" onChange={handleChange}  type="number" placeholder="Enter mobile number" required />
                    </div>

                    <div className="input-field">
                        <label>All Num</label>
                        <input value={user.altnum} name="altnum" onChange={handleChange}  type="number" placeholder="Enter mobile number" required />
                    </div>

                    <div className="input-field">
                        <label>Register Email</label>
                        <input value={user.email} name="email" onChange={handleChange} type="text" placeholder="Enter your email" required /> 
                    </div>

                    <div className="input-field">
                        <label>Alternate Email</label>
                        <input value={user.aemail}  name="aemail" onChange={handleChange} type="text" placeholder="Enter alternate email" required />
                    </div>

                    {/* <div className="input-field">
                        <label>CAF No</label>
                        <input type="number" placeholder="Enter mobile number" required />
                    </div> */}

                    <div className="input-field">
                        <label>Ref No</label>
                        <input value={user.ref} name="ref" onChange={handleChange}  type="number" placeholder="Enter mobile number" required />
                    </div>

                  

                    <div className="input-field" id='demo'>
                        <label>Adhar card Number</label>
                        <input value={user.adn} name="adn" onChange={handleChange}  type="number" placeholder="Enter your Adhar number" required />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="billing">
                <span className="title">Billing Information</span>
              
                <div className="fields">
                    <div className="input-field">
                        <label>Primary service</label>
                        <select required value={user.pryser} name="pryser" onChange={handleChange}>
                            <option>--Select service-- </option>
                            <option>Broadband</option>
                            <option>Cable</option>
                            <option>IPTV</option>
                            <option>Telephone</option>
                            <option>OTT</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Billing Type</label>
                        <select required value={user.blgtp} name="blgtp" onChange={handleChange}>
                            <option>--Select Billing Type--</option>
                            <option>Prepaid</option>
                            <option>Postpaid</option>
                            <option>Demo</option>
                            <option>Free</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Billing Mode</label>
                        <select required value={user.blgmd} name="blgmd" onChange={handleChange}>
                            <option>--Select Service Mode--</option>
                            <option>EOC</option>
                            <option>EOC</option>
                            <option>Default</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Pacakage</label>
                        <select required value={user.pac} name="pac" onChange={handleChange}>
                            <option>--Select Pacakage--</option>
                            <option>--Select Pacakage--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Sub-Pacakage</label>
                        <select required value={user.spac} name="spac" onChange={handleChange}>
                            <option>--Select Sub-Pacakage--</option>
                            <option>--Select Sub-Pacakage--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>User Type</label>
                        <select required value={user.utyp} name="utyp" onChange={handleChange}>
                            <option>--Select User-type--</option>
                            <option>Individual</option>
                            <option>Business</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Install Amount</label>
                        <input  value={user.insamt} name="insamt" onChange={handleChange} type="text" placeholder="Enter Amount" required />
                    </div>

                    <div className="input-field">
                        <label>Security Deposit</label>
                        <input value={user.secdpst} name="secdpst" onChange={handleChange} type="text" placeholder="Enter security deposit" required />
                    </div>

                    <div className="input-field">
                        <label>PO Number</label>
                        <input value={user.pnum} name="pnum" onChange={handleChange} type="number" placeholder="Enter PO number" required />
                    </div>

                    <div className="input-field">
                        <label>PO Date</label>
                        <input value={user.pdate} name="pdate" onChange={handleChange} type="date" placeholder="Enter your issued date" required />
                    </div>

                    <div className="input-field">
                        <label>Expiry Date</label>
                        <input value={user.edate} name="edate" onChange={handleChange} type="date" placeholder="Enter expiry date" required />
                    </div>

                    <div className="input-field">
                        <label>Issued Authority</label>
                        <input value={user.isauth} name="isauth" onChange={handleChange} type="text" placeholder="Enter issued authority" required />
                    </div>

                    <div className="input-field">
                        <label>Issued State</label>
                        <input value={user.isstate} name="isstate" onChange={handleChange} type="text" placeholder="Enter issued state" required />
                    </div>   
                </div>
            </div> 

            <hr></hr>            
            <div className="network-information">
                <span className="title">Network Information</span>
                
                <div className="fields">

                    <div className="input-field">
                        <label>IP Address Mode</label>
                        <select value={user.ipad} name="ipad" onChange={handleChange} required>
                            <option>--IP Adress--</option>
                            <option>DHCP</option>
                            <option>Static IP</option>
                            <option>Pool name</option>
                            <option>Static IP + Pool name</option>
                        </select>
                    </div>
                    
                    <div className="input-field">
                        <label>Node</label>
                        <select value={user.node} name="node" onChange={handleChange} required>
                            <option>--Select Node--</option>
                            <option>--Select Node--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>POP</label>
                        <select value={user.pop} name="pop" onChange={handleChange} required>
                            <option>--Select POP--</option>
                            <option>--Select POP--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Switch</label>
                        <select value={user.switc} name="switc" onChange={handleChange} required>
                            <option>--Select Switch--</option>
                            <option>--Select Switch--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Switch Port</label>
                        <select value={user.sport} name="sport" onChange={handleChange} required>
                            <option>--Select Switch Port--</option>
                            <option>--Select Switch Port--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Connection Type</label>
                        <select value={user.ctype} name="ctype" onChange={handleChange} required>
                            <option>--Select Connection Type--</option>
                            <option>Fiber Connection</option>
                            <option>Cat5 Connection</option>
                            <option>Wireless</option>
                            <option>GPON</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Fibre or CAT5 length</label>
                        <input value={user.fiber} name="fiber" onChange={handleChange} type="text" placeholder="Enter in meters" required />
                    </div>  

                    <div className="input-field">
                        <label>Domain Name</label>
                        <select value={user.dname} name="dname" onChange={handleChange} required>
                            <option>--Select Domain--</option>
                            <option>--Select Domain--</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Authentication Protocol</label>
                        <select value={user.aproto} name="aproto" onChange={handleChange} required>
                            <option>--Select Protocol Type--</option>
                            <option>Hotspot (IPOE)</option>
                            <option>PPPOE</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>Auto Renew</label>
                        <label className="switch">
                            <input value={user.autorenew}  name="autorenew" onChange={handleChange} type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                    </div>  

                    <div className="input-field">
                        <label>Bind MAC</label>
                        <label className="switch">
                            <input value={user.bmac} name="bmac" onChange={handleChange} type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                    </div>  

                    <div className="input-field">
                        <label>Exculde MAC Bind</label>
                        <label className="switch">
                            <input value={user.ebind} name="ebind" onChange={handleChange} type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                    </div>  

                    <div className="input-field">
                        <label>Don't Suspend</label>
                        <label className="switch">
                            <input value={user.dspnd} name="dspnd" onChange={handleChange} type="checkbox"/>
                            <span className="slider round"></span>
                          </label>
                    </div> 
                    
                    <div className="input-field">
                        <label>Circuit ID</label>
                        <input value={user.cid} name="cid" onChange={handleChange} type="text" placeholder="Enter" required />
                    </div> 



                </div>
            

            </div>
            <hr></hr>
            <div className="location-information">
                <span className="title">Location Information</span>
               
                <div className="fields">
                    <div className="input-field">
                        <label>Country</label>
                        <select required>
                            <option >India(+91)</option>
                            <option>India(+91)</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label>State</label>
                        <select required>
                            <option >State</option>
                            <option>Karnataka</option>
                        </select>
                    </div>    
                    
                    <div className="input-field">
                        <label>City</label>
                        <input type="text" placeholder="Enter City" required />
                    </div>

                    <div className="input-field">
                        <label>Zip*</label>
                        <input type="number" placeholder="Enter" required />
                    </div>

                    <div className="input-field">
                        <label>Door No</label>
                        <input type="number" placeholder="Enter" required />
                    </div>

                                            
                    <div className="input-field">
                        <label>Area</label>
                        <select required>
                            <option>Select Area</option>
                        </select>
                    </div>   
    
                    <div className="input-field">
                        <label>Colony</label>
                        <select required>
                            <option>Select Colony</option>
                        </select>
                    </div>   

                    <div className="input-field">
                        <label>Building</label>
                        <select required>
                            <option>Select Building</option>
                        </select>
                    </div>   

                    <div className="input-field">
                        <label>Billing Address (Same as the installation address)</label>
                        <textarea name="Billing address" cols="50" rows="5"></textarea>
                    </div>

                    <div className="input-field">
                        <label>Installation Address (Same as the installation address)</label>
                        <textarea name="Billing address" cols="50" rows="5"></textarea>
                    </div>

                    <div className="input-field">
                        <label>House Type</label>
                        <select required>
                            <option >Select Connection Type</option>
                            <option>Karnataka</option>
                        </select>
                    </div>   

                    <div className="input-field">
                        <label>Connection location</label>
                        <input type="text" placeholder="Enter" required />
                    </div>


                    <div className="input-field">
                        <label>Latitude</label>
                        <input type="number" placeholder="Enter" required />
                    </div>

                    <div className="input-field">
                        <label>Langitude</label>
                        <input type="number" placeholder="Enter" required />
                    </div>
                </div>
              <hr></hr>
            <div className="adding-files">
                <span className="title">Upload Files</span>
               
                <div className="fields">
                    <div className="input-field">
                        <label>CAF Form</label>
                        <label htmlFor="file-upload" className="file-upload-label">
                            
                          </label>
                          <input type="file" id="file-upload1" className="file-upload-input" />
                    </div> 

                    <div className="input-field">
                        <label>Adress Proof</label>
                        <label htmlFor="file-upload" className="file-upload-label">
                           
                          </label>
                          <input type="file" id="file-upload2" className="file-upload-input" />
                    </div> 

                    <div className="input-field">
                        <label>Identity Proof</label>
                        <label htmlFor="file-upload" className="file-upload-label">
                           
                          </label>
                          <input type="file" id="file-upload3" className="file-upload-input" />
                    </div> 

                    <div className="input-field">
                        <label>Customer pic</label>
                        <label htmlFor="file-upload" className="file-upload-label">
                          
                          </label>
                          <input type="file" id="file-upload4" className="file-upload-input" />
                    </div> <br/>
                    <span className="title">Note:Allowed types (jpeg.jpg.png.gif.pdf),max size of file: 4MB</span>
                    <br/>
                   
            
                </div>
                <hr></hr>
                   
                </div>
                <hr></hr>
                <div className="payments">
                    <span className="title">Payments</span>
                    
                    <div className="fields">
                        <div className="input-field">
                            <label>Advance payment</label>
                            <input type="text" placeholder="Enter" required />
                        </div>

                        <div className="input-field">
                            <label>Ref No</label>
                            <input type="number" placeholder="Enter" required />
                        </div>

                        <div className="input-field">
                            <label>Payment Type</label>
                            <select required>
                                <option >Select Payment Type</option>
                                <option>Karnataka</option>
                            </select>
                        </div>   
                        
                        <div className="input-field">
                            <label>Comment</label>
                            <input type="text" placeholder="Enter" required />
                        </div>
                    </div>
                </div> 
            
        </div>

        <div className="submit-option">
            <button className="submit" onClick={adduser} >Submit</button>
        </div>
        </form>
      </div>
     
      </div>   

  )
}

export default Adduser