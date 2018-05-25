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
          <ListItem primaryText='reactjs' onClick={() => actions.selectSubreddit('reactjs')} />
          <ListItem primaryText='funny' onClick={() => actions.selectSubreddit('funny')} />
        </List>
      </Drawer>
    </div>
  );
};
export default MenuDrawer;