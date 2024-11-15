import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import {
  Clock,
  LogOut,
  UserCircle,
  LayoutDashboard,
  Image as ImageIcon,
  Award,
  Activity,
  Newspaper,
  Camera,
  UserCircle2
} from 'lucide-react';
import styles from './index.module.css';

const Sidebar = () => {
  const { logout, user } = useContext(UserContext);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/add-slider', label: 'Slider', icon: ImageIcon },
    { path: '/admin/award', label: 'Awards', icon: Award },
    { path: '/admin/activities', label: 'Activities', icon: Activity },
    { path: '/admin/news', label: 'News & Events', icon: Newspaper },
    { path: '/admin/gallery', label: 'Gallery', icon: Camera },
    { path: '/admin/director', label: 'Director', icon: UserCircle2 }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : styles.expanded}`}>
        <div className={styles.sidebarHeader}>
          {!collapsed && <span>School MS</span>}
          <button onClick={() => setCollapsed(!collapsed)} className={styles.collapseBtn}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
        <nav className={styles.menu}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.menuItem} ${
                  router.pathname === item.path ? styles.menuItemActive : ''
                }`}
              >
                <span className={styles.menuIcon}>
                  <Icon size={20} />
                </span>
                {!collapsed && item.label}
              </Link>
            );
          })}
          <button onClick={handleLogout} className={styles.logout}>
            <span className={styles.menuIcon}>
              <LogOut size={20} />
            </span>
            {!collapsed && 'Logout'}
          </button>
        </nav>
      </aside>

      <div className={`${styles.topbar} ${!collapsed ? styles.topbarExpanded : ''}`}>
        <h1 className={styles.pageTitle}>
          {menuItems.find((item) => item.path === router.pathname)?.label || 'Dashboard'}
        </h1>
        <div className={styles.sessionInfo}>
          <div className={styles.sessionDetail}>
            <UserCircle size={18} />
            <span>{user?.name || 'Admin'}</span>
          </div>
          <div className={styles.sessionDetail}>
            <Clock size={18} />
            <span>Last login: {user?.lastLogin || 'Today'}</span>
          </div>
        </div>
      </div>

      <main className={`${styles.mainContent} ${!collapsed ? styles.mainContentExpanded : ''}`}>
        {/* Your page content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;