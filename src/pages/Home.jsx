import React from 'react';
import IndeterminateCheckbox from '../components/Checkbox';
import FolderList from '../components/List';
import ResponsiveAppBar from '../components/appbar';
import '../components/Home.css';
import { Link} from 'react-router-dom';
import { Button } from '@mui/material';
// import SettingsMenu from '../components/SettingsMenu'; // Adjust the path as necessary

const Home = () => {
    return (
        <div className="container text-center mt-5">
          <ResponsiveAppBar />
            <h1>SCHOOL MANAGEMENT SYSTEM</h1>
            <p>"A school management system streamlines administrative tasks, enhances communication, and provides tools for managing student records, schedules, and academic performance. It ensures efficient operations and supports educators, students, and parents in fostering a collaborative educational environment!"</p>
             <div style={{ marginTop: '20px',marginLeft:'350px' }}>
        <Button variant="contained" color="primary" component={Link} to="/Admin">
          Admin Register
        </Button>
        </div>
            <IndeterminateCheckbox />
            <FolderList />
            {/* <SettingsMenu/> */}
    </div>
    );
}

export default Home;

