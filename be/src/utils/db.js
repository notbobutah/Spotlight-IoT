const { Pool } = require('pg');
let fs = require('fs');
const dotenv = require('dotenv');
const Sequelize = require("sequelize");

dotenv.config();

if(process.env.DB_SERVICE_HOST) { 
    process.env.POSTGRES_SERVER=process.env.DB_SERVICE_HOST
  }
  console.log('DATABASE_URL:'+process.env.DATABASE_URL); 
  console.print(process.env);
  
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_SERVER,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

const seq = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
     {
       host: process.env.POSTGRES_SERVER,
       dialect: 'postgres'
     }
   );

  pool.on('connecterror display  corrupted crash', () => {
    console.log('connected to the spotlight db');
  });
 
initSeqDB = function() {
    
}  
  
selectNodes = function() {
    return new Promise(async function(resolve, reject) {
        console.log('inside get all nodes db')
        let rtnArray = [];
        await pool.query('SELECT * FROM nodes', async (error, results) => {
                if (error) {
                    console.count("Database table nodes returns error:"+error);
                    return;
                }
                if(results.rows.length <= 0){
                    console.count("Database table nodes returns no rows");
                }
                Object.keys(results.rows).forEach(function(key) {
                let customnode = results.rows[key]['nodebody'];
                customnode['addInfo'] = results.rows[key]['id'];
                rtnArray.push(results.rows[key]['nodebody']);
                })
                // console.log(JSON.stringify(results.rows))
                resolve(JSON.stringify(rtnArray))
        })
    })
}

selectConnectors  = function() {
    return new Promise(async function(resolve, reject) {
    console.log('inside get all connectorss db')
    let rtnArray = [];
        await pool.query('SELECT * FROM connectors', async (error, results) => {
            if (error) {
                console.count("Database table connectors returns error:"+error);
                return;
            }
            if(results.rows.length <= 0){
                console.count("Database table connectors returns no rows");
            }
            Object.keys(results.rows).forEach(function(key) {
                let customnode = results.rows[key]['connectorbody'];
                customnode['addInfo'] = results.rows[key]['id'];
                rtnArray.push(customnode);
                })
            resolve(JSON.stringify(rtnArray))
        })
  })
}

selectDiagrams = function() {
    return new Promise(async function(resolve, reject) {
        console.log('inside get all diagrams db')
        let rtnArray = [];
        await pool.query('SELECT * FROM diagrams', async (error, results) => {
            if (error) {
                console.count("Database table connectors returns error:"+error);
                return;
            }
            if(results.rows.length <= 0){
                console.count("Database table connectors returns no rows");
            }
                Object.keys(results.rows).forEach(function(key) {
                    // returns list of diagrams with name and ID for selection list display
                let diagramlist = [results.rows[key]['dname'], results.rows[key]['id']];
                rtnArray.push(diagramlist);
            })
                // console.log(JSON.stringify(results.rows))
                resolve(JSON.stringify(rtnArray))
        })
    })
}
selectDiagram = function(id) {
    return new Promise(async function(resolve, reject) {
        console.log('inside get single diagram db')
        let rtnArray = [];
        await pool.query('SELECT * FROM diagrams WHERE id='+id, async (error, results) => {
                if (error) {
                    console.log("error,id "+id+" not found.....")
                    return;
                }
                if(results.rows.length <= 0){
                    console.log("zero rows, id "+id+" not found.....")
                   return
                }
                Object.keys(results.rows).forEach(function(key) {
                    // returns list of diagrams with name and ID for selection list display
                let diagramlist = results.rows[key]['dbody'];
                rtnArray.push(diagramlist);
            })
                // console.log(JSON.stringify(results.rows))
                resolve(JSON.stringify(rtnArray))
        })
    })
}
const updateNode = (id, jsonBody) => {
    console.log('inside updare node db call:',jsonBody)
    const text = 'UPDATE nodes SET nodebody=$1   WHERE id=$2'
    const values = [jsonBody,id]
      pool.query(text, values, (error, results) => {
            if (error) {
                throw error
            }
        return JSON.stringify(results.rows)
      })
}
  
const updateConnector = (id, jsonBody) => {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
            }
        pool.query('UPDATE public.connectors SET id=?, connetorbody=?, sourcenode=?, targetnode=? WHERE <condition>;', (error, results) => {
            release()
            if (error) {
                throw error
            }
            return json(results.rows)
        })
  }
    )
}
const updateDiagram = (id, jsonBody) => {
    console.log('inside updare diagram db call:',jsonBody)
    const text = 'UPDATE diagrams SET dbody=$1   WHERE id=$2'
    const values = [jsonBody,id]
      pool.query(text, values, (error, results) => {
            if (error) {
                throw error
            }
        return JSON.stringify(results.rows)
      })
}
    module.exports = {
    selectConnectors,
    selectNodes,
    selectDiagrams,
    selectDiagram,
    updateConnector,
    updateNode,
    updateDiagram
}