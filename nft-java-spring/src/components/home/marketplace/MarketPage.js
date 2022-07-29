import React from 'react';
import './MarketPage.scss';
import ButtonPage from '../buttons/ButtonPage';

export default function MarketPage(props) {
    const renderButtonPage = (value) => {
        var indents = [];
        for (var i = 0; i < value; i++) {
            indents.push(
                <ButtonPage>{i + 1}</ButtonPage>
            );
          }
          return indents;
    }
    return (
        <div className='paging'>
            { renderButtonPage(props.page) }
        </div>
    )
}
