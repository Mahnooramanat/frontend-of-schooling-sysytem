import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleParentChange = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Class 1"
        control={<Checkbox checked={checked[0]} onChange={handleChildChange(0)} />}
      />
      <FormControlLabel
        label="Class 2"
        control={<Checkbox checked={checked[1]} onChange={handleChildChange(1)} />}
      />
       <FormControlLabel
        label="Class 3"
        control={<Checkbox checked={checked[1]} onChange={handleChildChange(1)} />}
      />
       <FormControlLabel
        label="Class 4"
        control={<Checkbox checked={checked[1]} onChange={handleChildChange(1)} />}
      />
       <FormControlLabel
        label="Class 5"
        control={<Checkbox checked={checked[1]} onChange={handleChildChange(1)} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Students"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleParentChange}
          />
        }
      />
      {children}
    </div>
  );
}

