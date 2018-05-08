import React from 'react';
import Drawer from 'material-ui/Drawer';

 const MenuDrawer = ({toggleMenu, menu}) =>{
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={menu}
        >
        </Drawer>
      </div>
    );
 };
 export default MenuDrawer;