import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Friday from './5';
import Thursday from './4';
import Wednesday from './3';
import Saturday from './6';
import Sunday from './7';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'white', display: 'flex', height: 500, width: 1000}}
    >
      <Tabs
        orientation="vertical"
        style={{ width:"100%", height:"500px", margin:"auto", justifyContent:"center"}}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}


      >
        <Tab label="Monday" {...a11yProps(0)} />
        <Tab label="Tuesday" {...a11yProps(1)} />
        <Tab label="Wednesday" {...a11yProps(2)} />
        <Tab label="Thursday" {...a11yProps(3)} />
        <Tab label="Friday" {...a11yProps(4)} />
        <Tab label="Saturday " {...a11yProps(5)} />
        <Tab label="Sunday " {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
            <Monday />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tuesday />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Wednesday />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Thursday />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Friday />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Saturday />
      </TabPanel>
      <TabPanel value={value} index={6} >
        <Sunday  />
      </TabPanel>
    </Box>
  );
}