'use client';

import styles from './page.module.css'
import Link from "next/link";
export default function Home() {

    return (
        <div>
            <h2>Welcome and click on Next to continue</h2>
            <Link
                className={styles.button}
                href={{
                    pathname: '/file_selection'
                }}
                component='button'
            >
                Next
            </Link>
        </div>

    )
}
