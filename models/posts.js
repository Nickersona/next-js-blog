import _ from 'lodash';
const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'GET FROM ENV VAR',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'GET FROM ENV VAR'
});


export default {
	getAll: async () => await client.getEntries({ 'content_type': 'blogPost' }),
	get: async (query) => {
		let fetchPromise = null;
		if (typeof query === "number") {
			fetchPromise = client.getEntry(query)
		} else {
			fetchPromise = client.getEntries(_.merge({
				'content_type': 'blogPost',
			}, query));
		};

		console.log('Fetching with query', query)
		return await fetchPromise;
	},
}