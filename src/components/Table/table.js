import React from 'react';

class DisplayTable extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

        this.callAPI = this.callAPI.bind(this);
        this.callAPI();
    }

    callAPI() { 
        fetch("https://dummy.restapiexample.com/api/v1/employees").then(  //Add api link here
            res => res.json()
        ).then((data) => {
            this.setState({list: data});
            console.log(data);
        })
    }

    render() {
        let tableData = this.state.list.map((item) => {
            return (
                <tr key={item.id}>    {/*Change according to data parameters*/}
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                </tr>
            )
        });

        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Expected Deliver date</th>
                            <th>Actual Deliver date</th>
                            <th>Order Id</th>
                            <th>Order Status</th>
                            <th>Id</th>
                            <th>Receiver Zip Code</th>
                            <th>Sender Zip Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayTable;