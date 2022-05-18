/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import SearchBar from '@theme/SearchBar';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import styles from './styles.module.css';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    hideableSidebar,
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <div className={styles.topPanel}>
          <div><SearchBar /></div>
          <div className={styles.topPanelLanguageContainer} ><label>Language:</label> English</div>
          <div className={styles.topPanelVersionContainer}><label>Version:</label>
            <DocsVersionDropdownNavbarItem 
              docsPluginId={'default'}
              dropdownItemsBefore={[]}
              dropdownItemsAfter={[]} />
          </div>
      </div>
      <Content path={path} sidebar={sidebar} />
      {hideableSidebar && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
