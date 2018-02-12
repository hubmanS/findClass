import React, {Component} from 'react'
import {render} from 'react-dom';

import Title from './components/Title.jsx';
import TextAreaCustom from './components/TextAreaCustom.jsx';

render(
    <div>
        <Title/>
        <TextAreaCustom/>
    </div>,
document.getElementById('app')
);