import React from 'react';
import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavSlide from './NavSlide';
import logo from '../../assets/icon/chicken.png'

const Nav = () => {
  const [open, setOpen] = useState(false);
  
  
     function handleOpen() {
      setOpen(true);
    }
    
      function Close() {
        setOpen(false);
      }

  return (
    <>
      <div className="border-b border-nblack flex justify-between items-center p-1 pl-3 md:pr-10">
        <div className='w-1/4 md:w-1/12 flex'>
          <a href="/" className='flex items-center'>
            <img src={logo} alt='soloku logo' 
            className='w-14 md:w-1/2'></img>
            <h1 className='md:text-5xl font-bold'>Soloku</h1>
          </a>
        </div>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <nav className="flex p-3 space-x-6 font-semibold" style={{alignItems:'center'}}>
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Products", "/products"],
            ].map(([title, url], index) => (
              <a href={url} key={index} className='hover:border-b-2 hover:text-greeny'>
                {title}
              </a>
            ))}
          </nav>
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton
            aria-label="menu dropdown"
            size="large"
            onClick={handleOpen}
            
          >
            <MenuIcon fontSize="inherit" className="text-pblue" />
          </IconButton>
        </Box>
      </div>
      <NavSlide openDialogValue={open} closeDialog={Close} />

    </>
  );
};

export default Nav;