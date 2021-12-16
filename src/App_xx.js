import React from 'react';
import W13_slider_15 from '../src/demo/W13_slider_15/Slider_15';
import T31_15_MultipleReturns from './tutorial/3-conditional-rendering/T31_15_multiple-returns';
import T32_15_ShortCircuit from './tutorial/3-conditional-rendering/setup/T32_15_shortcircuit';
import T33_15_ShowHide from './tutorial/3-conditional-rendering/setup/T33_15_show-hide';

// const url = 'https://api.github.com/users';
const App_xx = () => {
  return (
    <div className='container'>
      <h2>Advanced Tutorial</h2>
      <W13_slider_15/>
      <T31_15_MultipleReturns />
      <T32_15_ShortCircuit/>
      <T33_15_ShowHide/>
    </div>
  );
};

export default App_xx;
