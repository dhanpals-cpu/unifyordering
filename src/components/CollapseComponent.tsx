import React from "react";
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Panel } = Collapse;
const CollapseComponent=(props:any)=>{
    const {list} = props;
    return(<Collapse>
        {list.map((item:any,index:number)=>{
            if(item.status === 'invited') {
               return(<Panel className='invited' header={<div style={{"display":"flex"}}><div style={{"width":"67%"}}>{item.user.phone}</div><div><span className='chip'>invited</span></div></div>} key={index}>
                    <p>{text}</p>
                </Panel>);
            } else {
               return(<Panel header={item.user.name} key={index}>
                <p>{text}</p>
            </Panel>);
            }
        })}
        </Collapse>);
}

export default CollapseComponent;