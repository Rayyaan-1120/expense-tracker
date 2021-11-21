import React,{useEffect} from 'react'
import {List,ListItem,Avatar,Divider,ListItemAvatar,ListItemText} from '@material-ui/core'
import {LocalAtmOutlined,ThumbDownAltOutlined,DeleteOutline} from "@material-ui/icons"
import {useSelector,useDispatch} from 'react-redux'
import {deleteitem} from '../features.js/dataarray'
import {motion} from 'framer-motion'
import {simplefade} from './animation'


function Transactionsdiv() {

    const data = useSelector(state => state.maindata.collecteddata)
    const dispatch = useDispatch()
    const removeitem = (id) => {
      const filtered = data.filter(state => state.id !== id)
      dispatch(deleteitem(filtered))
    }

    return (
        <div style={{height:"90vh",overflow:"auto"}} className="width">
          <h2 style={{color:"#fff",fontSize:"1.5rem",textAlign:"center",fontWeight:"700"}}>History</h2>
            <List
      sx={{
        width: '100%',
      }}
    >
        {data && data.map((entry,i) => {
           return <motion.div variant={simplefade} initial="hidden" animate="show">
           <ListItem key={i} style={{color:"#FFf"}}>
        <ListItemAvatar>
          <Avatar style={entry.type === "profit" ? {background:"#2892D2"} : {background:"crimson"}}>
            {entry.type === "profit" ? <LocalAtmOutlined /> : <ThumbDownAltOutlined/>}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={entry.event} secondary={entry.date} />
        <DeleteOutline onClick={() => removeitem(entry.id)}/>
      </ListItem>
      <Divider variant="inset" component="li" />
      </motion.div>
        })}
      
      
    </List>
        </div>
    )
}



export default Transactionsdiv
