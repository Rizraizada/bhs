import React, { useState, useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.module.css';

const AdminLayout = ({ children }) => {
    console.log('Admin Layout Rendered'); // Debugging line

  const { user } = useContext(UserContext);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className={`${styles.contentArea} ${collapsed ? styles.collapsed : styles.expanded}`}>
        <Header user={user} collapsed={collapsed} setCollapsed={setCollapsed} />
        
        <main className={styles.mainContent}>
          {children}  {/* Make sure this is rendering correctly */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
