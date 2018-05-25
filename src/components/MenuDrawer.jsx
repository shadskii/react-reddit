import React from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

const MenuDrawer = ({ actions, menu, currentSubreddit }) => {
  return (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={menu}
        onRequestChange={(open) => actions.toggleMenu()}
      >
        <h1>{currentSubreddit}</h1>
        <List>
          <ListItem primaryText='all' onClick={() => actions.selectSubreddit('all')} />
        </List>
      </Drawer>
    </div>
  );
};
export default MenuDrawer;