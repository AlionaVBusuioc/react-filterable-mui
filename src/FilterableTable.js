import React, {useState} from 'react';
import "./FilterableTable.css";
import {Grid, Paper, Select, MenuItem, FormControl, Button} from "@mui/material";
import Table from "./Table";
import Pagination from '@mui/material/Pagination';


const FilterableTable = ({titles, users}) => {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);
    return (
        <div>
           <h1 className="center">Filterable list of posts</h1>
           <Grid>
             <Paper className="paperStyle">
               <h2 className="center">Posts</h2>
               <Paper className="paperFilters">
                   <h3 className="arrange">Filters</h3>
                   <Grid container spacing={2}>
                   <Grid item xs={6}>
                    <label  className="arrange">Title</label>
                    <br /><br />
                    <FormControl className="formControl">
                    <Select className="arrange" onChange={handleChange}>
                    {titles.map((title)=> (
                      <MenuItem value={title.title}>{title.title}</MenuItem>
                      ))}
                    </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                    <label>User</label>
                    <br /> <br />
                    <FormControl className="formControl">
                    <Select onChange={handleChange}>
                    {users.map((user)=> (
                      <MenuItem value={user.name}>{user.name}</MenuItem>
                      ))}
                    </Select>
                    </FormControl>
                     </Grid>
                   </Grid>
                   <br /> <br />
                   <div className="buttons">
                   <Button href="#text-buttons">Reset</Button>
                    <Button variant="outlined">Apply</Button>
                    </div>
               </Paper>
               <br />
                <Table value={value}/>
                <br />
                {/* <Pagination count={3} className="buttons"/> */}
             </Paper>
           </Grid>
        </div>
    )
}

export default FilterableTable;

