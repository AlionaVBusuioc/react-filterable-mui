import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Loading from './Loading';
import FilterableTable from './FilterableTable';
import {Grid, Paper, Select, MenuItem, FormControl, Button} from "@mui/material";
import Table from "./Table";


function App() {
  const [users, setUsers] = useState(null);
  const [titles, setTitles] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
          // console.table(result.data);
          setUsers(result.data)
      })
      axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
        // console.table(result.data);
        setTitles(result.data)
    })
  }, [])
  return (
    <div className="App">
     {titles && users ? <FilterableTable titles={titles} users={users}/> : <Loading/>}
    </div>
  );
}

export default App;
