import axios from "axios";
import { Post } from "./task_4/types.js";

export const getData = async (url: string): Promise<Post[]> => {
	const response = await axios.get<Post[]>(url);

	return response.data;
}