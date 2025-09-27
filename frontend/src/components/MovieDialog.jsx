import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';
import { MdClose } from 'react-icons/md';

export default function MovieDialog() {
  const { open, id } = useSelector((state) => state.movieApp);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: '#181818',
            color: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
          },
        }}
      >
        <div className="relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2 bg-[#181818]/70 hover:bg-[#181818] rounded-full text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <MdClose size={24} />
          </button>
          
          <div className="w-full">
            <VideoBackground movieId={id} bool={true} />
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
