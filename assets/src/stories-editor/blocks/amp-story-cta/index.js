/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import blockIcon from '../../../../images/call-to-action.svg';

const schema = {
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: 'a',
	},
	align: {
		type: 'string',
		default: 'center',
	},
};

export const name = 'amp/amp-story-cta';

export const settings = {
	title: __( 'Call to Action', 'amp' ),

	description: __( 'Prompt visitors to take action with a button-style link.', 'amp' ),

	icon: blockIcon,

	category: 'layout',

	keywords: [ __( 'call to action', 'amp' ), __( 'cta', 'amp' ), __( 'button', 'amp' ) ],

	attributes: schema,

	supports: {
		align: true,
		alignWide: false,
	},

	edit,

	save,
};
