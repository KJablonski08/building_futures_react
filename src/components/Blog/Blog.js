import React, { useState, useEffect } from 'react';

const Blog = () => {
	let [posts, setPosts] = useState(null);
	// useEffect(() => {
	// 	fetch('http://localhost:8000/posts/')
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setPosts(res);
	// 		})
	// 		.catch(console.error);
	// }, []);
	console.log(posts);
	return <div>HELLO WORLD! FROM INSIDE BLOG</div>;
};

export default Blog;
