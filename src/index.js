import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import { store } from "./store";

import 'animate.css';
// import 'swiper/swiper-bundle.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./assets/scss/style.scss";
import "./i18n";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    
      
        <App />
     
    
);

