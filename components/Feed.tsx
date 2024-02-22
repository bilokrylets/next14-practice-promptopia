'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

type Props = {};
const Feed = (props: Props) => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState<string[]>([]);
  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center' action=''>
        <input
          type='text'
          placeholder='search for prompts'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};
export default Feed;
