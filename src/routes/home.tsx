import React from 'react';
import { useQuery } from 'react-query';
import { getCategory } from '../api';
import CategoryList from '../components/categoryList';
import Loading from '../components/loading';

const Home = () => {
	const { data, isLoading } = useQuery<string[]>('category', getCategory);

	return <>{isLoading ? <Loading /> : <CategoryList data={data} />}</>;
};

export default Home;
