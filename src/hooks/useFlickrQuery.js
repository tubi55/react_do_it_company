import { useQuery } from "@tanstack/react-query";

const fetchFlickr = async ({ queryKey: [_, opt] }) => {
	const baseURL = "https://www.flickr.com/services/rest/?format=json&nojsoncallback=1";
	const key = import.meta.env.VITE_FLICKR_KEY;
	const num = 40;
	let url = "";
	console.log(key);

	const method_user = "flickr.people.getPhotos";
	const method_interest = "flickr.interestingness.getList";
	const method_search = "flickr.photos.search";

	const url_interest = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
	const url_user = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.id}`;
	const url_search = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.keyword}`;

	opt.type === "user" && (url = url_user);
	opt.type === "interest" && (url = url_interest);
	opt.type === "search" && (url = url_search);

	const response = await fetch(url);
	if (!response.ok) throw new Error("Fail to fetch Flickr data");

	const flickrData = await response.json();
	return flickrData.photos.photo;
};

export const useFlickrQuery = opt => {
	return useQuery({
		queryKey: ["flickr", opt],
		queryFn: fetchFlickr,
		staleTime: 1000 * 60 * 60,
		gcTime: 1000 * 60 * 60
	});
};
