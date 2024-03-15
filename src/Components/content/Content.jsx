import './Content.css';
import React from "react";
import { memo, useState } from 'react';
import Todo from '../todo/Todo';
const Content = memo(props => {
  return (
    <>
         <section className='container'>
            <ul class="view">
                <Todo/>
            </ul>
         </section>
    </>
  );
})

export default Content;
