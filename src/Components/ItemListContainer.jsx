import React from 'react';

function Item({ value }) {
    return (
        <li>
            <a href="#!">
                {value}
            </a>
        </li>
    );
}
  
  export default Item