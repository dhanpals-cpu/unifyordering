import React from "react";

const TestProgram=()=>{
    const obj = { 
        a: { 
          b: { 
            c: 'd' 
          },
          e: 'f'
        }
    }
    const get=(data:any,value:string,customMessage:any = '' )=>{
        let objValue = data;
        let state = true;
        value.split(".").map((item)=>{
            if(objValue.hasOwnProperty(item)) {
                objValue = objValue[item];
            } else {
                state = false;
            }
            return 1;   
        })
        if(state) {
            return JSON.stringify(objValue);
        } else {
            if(customMessage!=='') {
                return String(customMessage);
            } else {
                return "undefined";
            }
        }
    }
    return(<>
    {get(obj,'a.b')}<br />
    {get(obj,'a.b.c')} <br />
    {get(obj,'a.e')} <br />
    {get(obj,'x.x.e')} <br />
    {get(obj,'a.x.e',true)} <br />
    {get(obj,'a.x.e',"My default value")} <br /> 
    </>);
}
export default TestProgram;