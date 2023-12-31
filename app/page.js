import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.grid}>
        
        <Link href="../showSchools">
          
            <h2>
              Schools <span>-&gt;</span>
            </h2>
            <p>View a list of schools.</p>
         
        </Link>

      </div>
    </main>
  );
}
