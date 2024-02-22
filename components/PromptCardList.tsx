'use client';

import PromptCard from './PromptCard';

type Props = {
  data: any;
  handleTagClick: () => void;
};
const PromptCardList = ({ data, handleTagClick }: Props) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
export default PromptCardList;
