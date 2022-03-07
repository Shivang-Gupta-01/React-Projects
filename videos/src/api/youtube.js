import axios from 'axios';
const KEY = 'AIzaSyCwkWyMUuIqLxF-f6hDzeHK11qUelkKY3k';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
