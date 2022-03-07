import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID vs8k96E3XNWlcZ-LrErGrXeQlEdSJuKSRitxLRXxpqY'
	}
}); // Creates a customisable copy of axios intended to be used for a particular api
