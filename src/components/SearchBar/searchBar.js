import React, { useState, useEffect } from 'react';
import './searchbar.css';

function SearchBar() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('');

    useEffect(() => {
        if (trackingNumber) {
            // Send request to your API with the tracking number
            // Example using the fetch API
            fetch(`http://localhost:8080/getstatus/${trackingNumber}`)
                .then(response =>  {
                    response.text().then(data =>
                        setDeliveryStatus(data)
                    )
                }
                )
                .catch(error => {
                    // Handle error
                });
        }
    }, [trackingNumber]);

    return (
        <div className="search-container">
            <div>
                <input
                    className="search-bar"
                    type="text"
                    value={trackingNumber}
                    onChange={e => setTrackingNumber(e.target.value)}
                />
                {deliveryStatus && <div className="status-text">Delivery Status: {deliveryStatus}</div>}
            </div>
        </div>
    );
}

export default SearchBar;