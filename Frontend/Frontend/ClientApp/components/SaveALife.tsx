import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

const Donor = { Name: 'Aman Preet Singh', AadharId: 'ADHAR54321A', DateOfBirth: '8/10/1989', Bloodgroup: 'B+', OrgansToDonate: 'liver,lungs,heart,pancreas,intestines' };

export default class SaveALife extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = Donor;
    }

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
                        <td><input type="text" disabled value={this.state.Name} /></td>
                    </tr>
                    <tr>
                        <td>AaDhar Card</td>
                        <td>:</td>
                        <td><input type="text" disabled value={this.state.AadharId} /></td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td>:</td>
                        <td><input type="text" disabled value={this.state.DateOfBirth} /></td>
                    </tr>
                    <tr>
                        <td>Blood Group</td>
                        <td>:</td>
                        <td><input type="text" disabled value={this.state.Bloodgroup} /></td>
                    </tr>
                    <tr>
                        <td>Organs to donate</td>
                        <td>:</td>
                        <td><input type="text" disabled value={this.state.OrgansToDonate} /></td>
                    </tr>
                    <tr>
                        <td>Death Date</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Hospital Notes</td>
                        <td>:</td>
                        <td><textarea name="hospitalnotes" /></td>
                    </tr>
                    <tr>
                        <td>Death certificate</td>
                        <td>:</td>
                        <td><input type="file" /></td>
                    </tr>
                </tbody>
            </table>
            <div className="padding-left-135">
                <input type="Submit" className="btn btn-primary btn-lg" value="Submit" onClick={event => this.onSubmitClick()} />
            </div>
        </div>;
    }

    public onSubmitClick() {
        //console.log("Data is being submitted to the blockchain! " + event);
        //Donor.Name = "Gagan";
        //this.setState(Donor);
    }
}
