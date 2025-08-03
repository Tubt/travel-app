import React from 'react';

interface SidebarProps {
  position: 'left' | 'right';
  title: string;
  subtitle: string;
}

const Sidebar: React.FC<SidebarProps> = ({ position, title, subtitle }) => {
  const sidebarClass = position === 'left' ? 'sidebar-left' : 'sidebar-right';
  
  return (
    <div className={sidebarClass}>
      <div className="sidebar-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Sidebar; 