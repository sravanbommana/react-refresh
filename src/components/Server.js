import React, { Component } from 'react'
import styles from './Server.module.css';
const serverList = [{name:"Server1", status: "Online", id: 1}, {name:"Server2", status: "Offline", id:2}]
class Server extends Component {
  getClass = (status) => {
      const activeClass = status === "Online" ? styles.online : styles.offline;
      return activeClass;
  }
  render() {
    return (
      <div>
        {
          serverList.map(server => {
            return <div key={server.id} style={{marginBottom: "20px"}}>
              {server.name} -    
              {server.status === 'Offline' ? <span>Offline Mode</span> : <span>Online Mode</span>}
              <span style={{marginLeft: "10px"}} className={`${styles.circle} ${this.getClass(server.status)}`}></span>
            </div>
          })
        }
      </div>
    )
  }
}

export default Server
