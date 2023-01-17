import React, {useState, useEffect} from 'react';

function DisplayTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/deliveries')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

{ /*callAPI() {
        fetch("https://localhost:8080/deliveries").then(
            res => res.json(),
        ).then((data) => {
            this.setState({list: data});
            console.log(data);
        })
    }
*/
}
return (
    <div className='container'>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>Expected Deliver date</th>
                <th>Actual Deliver date</th>
                <th>Order Id</th>
                <th>Id</th>
                <th>Sender Zip Code</th>
                <th>Receiver Zip Code</th>
                <th>Vehicle</th>
                <th>Order Status</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.order_id}>
                    <td>{item.expected_deliver_datetime}</td>
                    <td>{item.actual_deliver_datetime}</td>
                    <td>{item.order_id}</td>
                    <td>{item.id}</td>
                    <td>{item.sender_zipcode}</td>
                    <td>{item.receiver_zipcode}</td>
                    <td>{item.vehicle}</td>
                    <td>{item.status}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}
export default DisplayTable;