import * as React from 'react';
import { RouteComponentProps } from 'react-router';
export default class DonarRegistration extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>
                Donor Registration Form</h1>

            <p>Donar needs to give all the complete information. </p>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>AaDhar Card</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Blood Group</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Organs to donate</td>
                        <td>:</td>
                        <td><select name="bodyOrgans" multiple>
                            <option value="liver" >liver          </option>
                            <option value="lungs ">lungs          </option>
                            <option value="heart" >heart          </option>
                            <option value="pancreas">pancreas      </option>
                            <option value="intestines">intestines      </option>
                        </select></td>
                    </tr>
                </tbody>
            </table>
            <div className="padding-left-135">
                <input type="button" className="btn btn-primary btn-lg" value="Submit" onClick={e => this.onSubmitClick()} />
            </div>
        </div>;
    }

    public onSubmitClick() {
        console.log("Data is being submitted to the blockchain! " + event);
    }
}