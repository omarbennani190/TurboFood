import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download text-center py-5" id="app-download">
      <p className="display-5 fw-bold">
        For Better Experience Download <br />TurboFood App
      </p>
      <div className="app-download-platforms d-flex justify-content-center gap-4 mt-4">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="img-fluid app-icon"
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className="img-fluid app-icon"
        />
      </div>
    </div>
  );
};

export default AppDownload;
