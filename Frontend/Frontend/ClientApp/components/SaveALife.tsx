import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

export default class SaveALife extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>
                Save a Life!</h1>

            <p>You are here because someone died & a great soul wants to donate the organs. Please make sure correct information is being picked. </p>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                        <td>
                            <div className="padding-left-135">
                                <input type="button" className="btn btn-primary btn-lg" value="Submit" onClick={e => this.onSubmitClick()} />
                            </div>
                        </td>
                    </tr>                   
                </tbody>
            </table>
           
        </div>;
    }

    public onSubmitClick() {
        console.log("Data is being submitted to the blockchain! " + event);
    }
}
