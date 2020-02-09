import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from './FSISAC-Reverse-Eye_32x32.png';

export default class LeftSidebarHeader extends React.PureComponent {

    render() {
        const iconStyle = {
            display: 'inline-block',
            margin: '0 7px 0 1px',
            color: 'rgba(255,255,255,0.6)',
        };
        const styleLine1 = {
            margin: '.5em 0 .5em',
            padding: '0 12px 0 15px',
            color: 'rgba(255,255,255,0.6)',
            fontStyle: 'italic'

        };
        const styleLine2 = {
            margin: '.5em 0 .5em',
            padding: '0 12px 0 15px',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 'bold'
        };

        return (
            <div>
                <div style={styleLine1}>
                    <FormattedMessage
                        id='sidebar.line1'
                        defaultMessage='Powered by'
                    />
                </div>
                <div style={styleLine2}>
                    <img src={logo} />
                    <FormattedMessage
                        id='sidebar.line2'
                        defaultMessage='FS-ISAC'
                    />
                </div>
            </div >
        );
    }
}
