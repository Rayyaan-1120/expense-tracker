import React from 'react'
import {XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Line,LineChart,Legend} from 'recharts'
import {useSelector,useDispatch} from 'react-redux'

function Chartdiv() {

    const data = useSelector(state => state.maindata.collecteddata)



    return (
        <div style={{width:"100%",height:"auto",margin:"1rem 0" }} className="width">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart width={650} height={300} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="4 4" />
  <XAxis dataKey="type" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="profit" stroke="#2892D2" />
  <Line type="monotone" dataKey="expense" stroke="crimson" />
</LineChart>
{/* </ResponsiveContainer> */}

</div>
    )
}

export default Chartdiv
