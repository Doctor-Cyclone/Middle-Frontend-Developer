import {ById, NormalizeData, Post} from "./task_3/types.js";

export const normalizationData = (unNormalizedData: Post[]): NormalizeData => {
	const posts = unNormalizedData.map(post => {
		return [
			post.id, post
		]
	})
	const byId: ById = Object.fromEntries(posts);

	return {
		byId: byId,
		allIds: unNormalizedData.map(post => post.id)
	};
};