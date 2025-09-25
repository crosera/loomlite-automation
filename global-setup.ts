import { type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    require('dotenv').config();
}

export default globalSetup;