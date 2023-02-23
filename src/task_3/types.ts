export interface Post {
	id: string;
	title: string;
	body: string;
}

export type ById = {
	[key: string]: Post
}

export type NormalizeData = {
	byId: ById,
	allIds: string[]
}