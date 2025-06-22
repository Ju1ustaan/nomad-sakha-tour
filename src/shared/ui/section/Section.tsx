import React from 'react';
import styles from './Section.module.css';

type Props = {
  title: string;
  subtitle?: string;
  titlePosition?: 'left' | 'center' | 'right';
  backgroundImage?: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, titlePosition = 'left', subtitle, backgroundImage, children }) => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className={styles.background}></div>
      <h2 className={`${styles.title} ${styles[titlePosition]}`}>{title}</h2>
      <h5 className={styles.subtitle}>{subtitle}</h5>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;
