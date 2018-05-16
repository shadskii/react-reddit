import React from 'react';
import Drawer from 'material-ui/Drawer';

const MenuDrawer = ({ toggleMenu, menu, currentSubreddit }) => {
  return (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={menu}
        onRequestChange={(open) => toggleMenu()}
      >
        <h1>{currentSubreddit}</h1>
      </Drawer>
    </div>
  );
};
export default MenuDrawer;