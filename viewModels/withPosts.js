import pagesModel from '../models/posts';

function withPosts(WrappedComponent) {
	WrappedComponent.getInitialProps = async () => pagesModel.getAll();
	return WrappedComponent
};

export default withPosts;