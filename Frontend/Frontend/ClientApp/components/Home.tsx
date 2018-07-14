import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Organ Donation Center!</h1>
            <img src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets/1383/500586_thevitals_campaignpageheader_aw.jpg" />
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum :</p>
            <ul>
                <li><a href='#'>lorem ipsum lorem ipsum </a> and <a href='#'>lorem ipsum </a>lorem ipsum lorem ipsum lorem ipsum </li>
                <li><a href='#'>lorem ipsum </a>, <a href='#'>lorem ipsum </a>, and <a href='#'>lorem ipsum lorem ipsum </a> for client-side code</li>
                <li><a href='#'>lorem ipsum </a>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </li>
                <li><a href='#'>lorem ipsum </a>lorem ipsum lorem ipsum lorem ipsum </li>
            </ul>
            <p>To help you get started, we've also set up:</p>
            <ul>
                <li><strong>lorem ipsum lorem ipsum lorem ipsum lorem ipsum </strong>. lorem ipsum  <em>lorem ipsum </em> then <em>Back</em> lorem ipsum lorem ipsum .</li>
                <li><strong>lorem ipsum lorem ipsum </strong>. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .</li>
                <li><strong>lorem ipsum </strong>. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .</li>
                <li><strong>lorem ipsum lorem ipsum </strong>. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .</li>
                <li><strong>lorem ipsum lorem ipsum </strong>. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .</li>
            </ul>
        </div>;
    }
}
