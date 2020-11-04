import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';

import logo from './172x32-PlaceholderLogo.png';
import logoMattermost from './logoHorizontalWhite32.png';

export default class LeftSidebarHeader extends React.PureComponent {
    static propTypes = {
        enabled: PropTypes.bool.isRequired,
        theme: PropTypes.object.isRequired,
    }
    render() {
        const styleLine1 = {
            margin: '.5em 0 .5em',
            padding: '0 12px 0 15px',
            color: this.props.theme.sidebarText,
            fontStyle: 'italic',

        };
        const styleLine2 = {
            margin: '.5em 0 .5em',
            padding: '0 12px 0 15px',
            color: this.props.theme.sidebarHeaderBg,
            fontWeight: 'bold',

            // filter: brightness(0.25),
            // height: '16',
            // justifyContent: "center",
            // alignItems: "center"
        };

        const styleLine3 = {
            margin: '.5em 0 .5em',
            padding: '0 12px 0 19px',
            color: this.props.theme.sidebarHeaderBg,
            fontWeight: 'bold',

            //filter: brightness(0.25),
            // height: '16',
            // justifyContent: "center",
            // alignItems: "center"
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
                    <img
                        height='16'
                        src={logo}
                        color='red'
                    />
                </div>
                <div style={styleLine3}>
                    <img
                        height='16'
                        src={logoMattermost}
                    />
                </div>
            </div >
        );
    }
}
