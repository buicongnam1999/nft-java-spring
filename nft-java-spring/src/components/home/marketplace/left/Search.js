import React from 'react';
import './Search.scss';
import SearchIcon from 'assets/images/icon/search-icon.png';

export default function Search() {
  return (
    <>
        <div className='search'>
            <div className='search-input'>
                <div className='search-input-icon'>
                    <img src={SearchIcon} alt=''/>
                </div>
                <div className='search-input-text'>
                    <input type='text' placeholder='Search by Piece/Card name...'/>
                </div>
            </div>
        </div>
    </>
  )
}
