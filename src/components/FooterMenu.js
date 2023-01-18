import React from 'react';
import styles from './FooterMenu.module.css';

export default function FooterMenu({ title, items, icon }) {
    return (
        <div className={styles.MenuContainer}>
            <div className={styles.FooterMenuHeader}>
                <img src={icon.url} alt={title} className={styles[icon.size]} />
                <h3>{title}</h3>
            </div>
            <ul className={styles.MenuList}>
                {items && items.map((element, idx) => (
                    <li key={idx} className={styles.MenuListItem}>
                        <a href={element.url} className={styles.MenuListItemLink}>
                            {element.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}