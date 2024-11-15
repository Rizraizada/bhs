import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  FaHome,
  FaUsers,
  FaAward,
  FaInfoCircle,
  FaNewspaper,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
} from "react-icons/fa";
import styles from "./index.module.css";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSideMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href) => router.pathname === href;

  const dropdownContent = {
    home: [
      "Headmaster's Message",
      "Chairman's Message",
      "Committee Members",
      "Achievements",
    ],
    teachersAndStaff: ["Teachers", "Staff"],
    about: ["School History", "Our Alumni"],
    notice: ["Result & Notices", "Login"],
  };

  const toggleSideMenu = () => setIsSideMenuOpen((prev) => !prev);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) =>
      prev === label.toLowerCase() ? null : label.toLowerCase()
    );
  };

  const NavItem = ({ href, icon: Icon, label }) => {
    const isDropdownActive = activeDropdown === label.toLowerCase();

    return (
      <div
        className={styles.navItemContainer}
        onMouseEnter={() => !isMobile && setActiveDropdown(label.toLowerCase())}
        onMouseLeave={() => !isMobile && setActiveDropdown(null)}
      >
        <Link
          href={href}
          className={`${styles.navItem} ${isActive(href) ? styles.active : ""}`}
        >
          <Icon size={20} />
          <span>{label}</span>
        </Link>

        {dropdownContent[label.toLowerCase()] && (
          <>
            {isMobile && (
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown(label)}
              >
                {isDropdownActive ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </button>
            )}

            {isDropdownActive && (
              <div className={styles.dropdown}>
                {dropdownContent[label.toLowerCase()].map((item, index) => (
                  <Link
                    key={index}
                    href={`/${label.toLowerCase()}/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={styles.dropdownItem}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <FaGraduationCap />
          </div>
          <div className={styles.schoolInfo}>
            <h1>
              <img
                src="/bhs-logo.png"
                alt="School Logo"
                className={styles.logoImage}
                style={{ width: "100px", height: "120px" }}
              />
            </h1>
          </div>
        </div>

        {isMobile && (
          <button className={styles.menuToggle} onClick={toggleSideMenu}>
            {isSideMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}

        <nav className={`${styles.nav} ${isSideMenuOpen ? styles.open : ""}`}>
          {isMobile && (
            <div className={styles.mobileHeader}>
              <FaGraduationCap className={styles.mobileLogoIcon} />
              <button className={styles.closeMenu} onClick={toggleSideMenu}>
                <FaTimes size={24} />
              </button>
            </div>
          )}
          <NavItem href="/" icon={FaHome} label="Home" />
          <NavItem href="/teachersAndStaff" icon={FaUsers} label="Teachers & Staff" />
          <NavItem href="/gallery" icon={FaAward} label="Gallery" />
          <NavItem href="/about" icon={FaInfoCircle} label="About" />
          <NavItem href="/notice" icon={FaNewspaper} label="Notice" />
          <NavItem href="/contact" icon={FaAward} label="Contact" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
