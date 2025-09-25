import { type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'development') {
        require('dotenv').config();
    }
}

export default globalSetup;