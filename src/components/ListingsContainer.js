// src/components/ListingsContainer.js

import React, { useState, useEffect } from 'react';
import Listing from './Listing'; // Make sure the import path matches the location of the Listing component

const ListingsContainer = () => {
    const [listings, setListings] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('/api/listings')
            .then(response => response.json())
            .then(data => setListings(data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    const filteredListings = listings.filter(listing =>
        listing.description.toLowerCase().includes(filter.toLowerCase()) || listing.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search listings..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ width: '100%', padding: '10px', margin: '20px 0' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredListings.map(listing => <Listing key={listing.id} listing={listing} />)}
            </div>
        </div>
    );
};

export default ListingsContainer;
