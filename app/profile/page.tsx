'use client';

import { useSession } from 'next-auth/react';
import Profile from '@components/Profile';
import { useEffect, useState } from 'react';

type Props = {};
const ProfilePage = (props: Props) => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/prompts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user?.id) fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = () => {};

  const handleDelete = async () => {};
  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default ProfilePage;
