const { Pool } = require('pg');
var fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_SERVER,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

  pool.on('connect', () => {
    console.log('connected to the spotlight db');
  });
  
selectNodes = function() {
    return new Promise(async function(resolve, reject) {
        console.log('inside get all nodes db')
        let rtnArray = [];
        await pool.query('SELECT * FROM nodes', async (error, results) => {
                if (error) {
                    await createDDL();
                    return;
                }
                if(results.rows.length <= 0){
                    await this.loadData();
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
                await this.createDDL();
                return
            } 
            if(results.rows.length <= 0){
                await this.loadData();
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
createDDL = function () {
    console.log("Running createDDL function")
    var sql = fs.readFileSync('sql/spotlight.ddl.sql').toString();
    console.log("------------ Loaded DDL file:")

        pool.query(sql, function(err, result){
            if(err){
                console.log('--------- DDL error: ', err);
                // process.exit(1001);
                throw err
            }
        });
}
loadData = function () {
    console.log("Running loadData function")
    var sql = fs.readFileSync('sql/spotlight.data.sql').toString();
    console.log("Loaded data file:")

        pool.query(sql, function(err, result){
            if(err){
                console.log('Data load error: ', err);
                // process.exit(1000);
                throw err
            }
        });1
}
initDB = async function () {
    await createDDL();

    await pool.query('SELECT * FROM nodes', async (error, results) => {
            if (error) {
                throw error;
            }
            if(results.rows.length <= 0){
                await loadData();
            }
        });
};

module.exports = {
    selectConnectors,
    selectNodes,
    updateConnector,
    updateNode,
    initDB
}