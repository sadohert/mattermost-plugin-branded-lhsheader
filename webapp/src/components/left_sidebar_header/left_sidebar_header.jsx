import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import logo from './logo.svg';

// LeftSidebarHeader is a pure component, later connected to the Redux store so as to
// show the plugin's enabled / disabled status.
export default class LeftSidebarHeader extends React.PureComponent {
    // static propTypes = {
    //     enabled: PropTypes.bool.isRequired,
    // }

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
                    <i
                        className='icon fa fa-plug'
                        style={iconStyle}
                    />
                    <FormattedMessage
                        id='sidebar.line2'
                        defaultMessage='FS-ISAC'
                    />
                </div>
            </div >
        );
    }
}
