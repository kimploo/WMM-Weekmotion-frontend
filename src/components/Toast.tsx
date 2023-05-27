/** */

import ToastCloseIcon from '../items/ToastCloseIcon';
import ToastErrorIcon from '../items/ToastErrorIcon';

interface Props {
  status: 'error' | 'success' | 'info';
  text: string;
}

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default function Toast({ status = 'error', text = 'Error!' }: Props) {
  return (
    <div className="bg-[#ffbfc3] rounded-lg">
      <div className="py-8">
        <ToastErrorIcon />
        {text}
        <ToastCloseIcon></ToastCloseIcon>
      </div>
    </div>
  );
}
