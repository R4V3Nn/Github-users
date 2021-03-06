import React from 'react';
import Form from '@talend/react-forms';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const formConfig = {
	jsonSchema: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
				title: 'Name',
			},
			html_url: {
				type: 'string',
				title: 'Url',
			},
			description: {
				type: 'string',
				title: 'Description',
			},
			homepage: {
				type: 'string',
				title: 'Homepage',
			},
			size: {
				type: 'number',
				title: 'Size',
			},
			language: {
				type: 'string',
				title: 'language',
			},
		},
	},
};

const DrawerForm = props => {
	const formProps = {
		...formConfig,
		properties: props.item,
	};
	return (<Form data={formProps} onSubmit={(e, data) => props.onSubmit(data.formData)} />);
};


const mapStateToProps = state => ({
	userRepos: state.users.userRepos,
	id: state.users.selectedId,
});

DrawerForm.propTypes = {
	item: PropTypes.object,
	onSubmit: PropTypes.func,
};

export default connect(mapStateToProps)(DrawerForm);
