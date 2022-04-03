import React,{useEffect} from 'react'
import "./wallet.scss"
import DebitCard from '../../Components/Wallet DebtCard/DebitCard'
import StatusCard from '../../Components/StatusCard/StatusCard'
import statusData from "../../assets/JsonData/status-card-data.json"
import '../../assets/boxicons-2.0.7/css/boxicons.min.css'
import Chart from 'react-apexcharts'
import Table from '../../Components/Table/Table'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux'
import { dark } from '@mui/material/styles/createPalette'
const Wallet = () => {
 const ThemMode = useSelector(state => state.Them.mode);
    const Color = useSelector(state => state.Them.color);
const ChartColor = useSelector(state => state.Them.chart)
    useEffect(() =>{
   AOS.init({duration:1000})
},[])
const chartOptions = {
    series: [{
      type:"line",
        name: 'Online',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
      type:"line",
        name: 'Store',
        data: [10,60,30,80,40,66,20,70,69]
    }],
    options: {
        colors: [''+ChartColor+'', '#6e6e6e'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            height: 3,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
 
    }
}
const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}



const renderCusmHead = (item, index) =>{
 return <th key={index}>{item}</th>
}
const renderCusmBody = (item, index) =>{
   return <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
}

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}
   
const renderLatestHead = (item, index) =>{
  return <th key={index}>{item}</th>
}
const renderLatestBody = (item, index) =>{
  return <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td>{item.status}</td>
  </tr>
}

  return (
    <div className= {`${ThemMode} ${Color} Section-Wallet`}>
     
        <DebitCard />
     
<div className='Section-Wallet__Content '>
  <h4 className='Section-Wallet__Content__Header'>Dashboard</h4>
  <div className='Row1'>
    <div className='StatusCard__Wrapper' data-aos="zoom-in">
{statusData.map((item, index) =>{
return <StatusCard 
icon={item.icon}
count={item.count}
title={item.title}
key={index}/>

})}
      
    </div>
    <div className='apexcharts'>
            <Chart
              options={ThemMode === "theme-mode-dark" ? {
                  ...chartOptions.options,
                  theme:{mode: 'dark'} 
                }:{
                       ...chartOptions.options,
                  theme:{mode: 'light'}
                }}
              
              series={chartOptions.series}
              type="line"
              width="100%"
              height="100%"
              fontSize="15px"
            />
    </div>
  </div>
  <div className='Row2' data-aos="fade-up">
    <div className='customer-table'>
      <h5>Top Customers</h5>
      <Table
      headData={topCustomers.head}
      renderHead={(item,index) => renderCusmHead(item,index)}
      bodyData={topCustomers.body}
      renderBody={(item,index) => renderCusmBody(item,index)}
      />
      </div>
      <div className='order-table'>
        <h5>Latest Order</h5>
      <Table
      headData={latestOrders.header}
      renderHead={(item,index) => renderLatestHead(item,index)}
      bodyData={latestOrders.body}
      renderBody={(item,index) => renderLatestBody(item,index)}
      />
      </div>
  </div>
</div>
    </div>
  )
}

export default Wallet