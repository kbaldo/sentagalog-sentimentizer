import axios from 'axios';

class AxiosInterface
{
	SendAsPost(payload, callbacks) //Do-it-all
	{
		const serverAddress = `https://jsonplaceholder.typicode.com/postss`;

		callbacks.request(payload); //Executed in importing component.
		axios.post(serverAddress, payload)
			.then(
				response => {
					callbacks.success(response.data); //Executed in importing component.
				}
			)
			.catch(
				error => {
					callbacks.failure(error); //Executed in importing component.
				}
			)
	}
}

export default new AxiosInterface();