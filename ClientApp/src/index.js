

//import 'jquery/dist/jquery.min.js'
import $ from 'jquery';
import * as popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from './components/config/select';
import * as Constants from './constants/constants';
import { Sidebar } from './sections/sidebar';
import { Body } from './sections/body';
import './styles/main.scss';

ReactDOM.render(
    <div className="root">
        <div className="sidebar">
            <Sidebar />
        </div>

        <div className="content">
            <Body />
        </div>
    </div>
    , document.getElementById("root"));


$(function () {
    $('[data-toggle="popover"]').popover();
})