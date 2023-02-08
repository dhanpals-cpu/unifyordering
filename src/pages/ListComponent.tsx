import React from 'react';
import { SafetyCertificateFilled, UserOutlined } from '@ant-design/icons';
import CollapseComponent from '../components/CollapseComponent';
import apiResponse from '../json/ApiResponse';

const administrators = apiResponse.filter((item:any)=>item.role === 'Administrator');
const StandardUsers = apiResponse.filter((item:any)=>item.role === 'Standard');

const ListComponent: React.FC = () => {
  return (
    <div style={{'background':"#fafafd",'padding':"20px"}}>
        <p className='list-title'><SafetyCertificateFilled /> Administrators</p>
        <CollapseComponent list={administrators} />
        <p className='list-title'><UserOutlined /> Standard Users</p>
        <CollapseComponent list={StandardUsers} />
    </div>
  );
};

export default ListComponent;