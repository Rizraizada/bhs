// src/pages/admin/headmaster.js

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import Sidebar from '@/components/Sidebar';

const HeadmasterAdmin = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (user.role !== 'headmaster') {
      router.push('/unauthorized');
    }
  }, [user]);

  return (
    user && user.role === 'headmaster' && (
      <Sidebar>
        <div className="headmaster-content">
          Headmaster's Admin Panel Content
        </div>
        </Sidebar>
    )
  );
};

export default HeadmasterAdmin;
