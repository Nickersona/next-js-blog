import pagesModel from '../models/posts';


const dataCache = {};

function withPost(WrappedComponent) {
	WrappedComponent.getInitialProps = async ({ query }) => {
		// short circut if we have something in the cache
		const { title } = query;
		console.log('VIEW MODEL TITLE', title)
		if (!!dataCache[title]) {
			console.log('pulling from the cache for', title);
			return dataCache[title]
		};

		const data = await pagesModel.get({ 'fields.title': encodeURI(title) })

		console.log(data);
		const post = data.items[0]
		const viewData = {
			id: post.sys.id,
			content: post.fields.content,
			title: post.fields.title,
		}
		
		dataCache[title] = viewData;
		return viewData
	};
	return WrappedComponent;
};

export default withPost;