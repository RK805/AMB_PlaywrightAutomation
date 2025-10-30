import { type FullConfig } from '@playwright/test'
import { type FullConfig } from '@playwright/test'

export default async function globalSetup(config: FullConfig): Promise<void> {
    const envPath = '../env/users.${process.env.app}.json';
    @@ -15, 4 + 15, 6 @@ export default async function globalSetup(config: FullConfig): Promise<void> {
        console.log('Environmnet Json file : ${envPath}');
        console.log('Test Paraments json file: ${testParametersPath}');

    }
}

