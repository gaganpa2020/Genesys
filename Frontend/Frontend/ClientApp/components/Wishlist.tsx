import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Wishlist extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>
                Wishlist Registration Form</h1>

            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum . </p>
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
                        <td>Required Organ</td>
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
                <input type="Submit" className="btn btn-primary btn-lg" value="Submit" />
            </div>
        </div>;
    }
}