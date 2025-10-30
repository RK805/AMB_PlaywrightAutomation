<<<<<<< HEAD
import { type FullConfig } from '@playwright/test'
=======
﻿import { type FullConfig } from '@playwright/test'
>>>>>>> origin/pageclass

export default async function globalSetup(config: FullConfig): Promise<void> {
    const envPath = '../env/users.${process.env.app}.json';
    const envData = require(envPath);

    const testParametersPath = '../test/data/param.${process.env.app}.json';
    const testParametersData = require(testParametersPath);

    process.env.gloabalSettings = JSON.stringify(envData.environment[process.env.test_env!]);
    process.env.testData = JSON.stringify(testParametersPath);

    console.log('Application selected : ${process.env.app}');
    console.log('Test Environment selected : ${process.env.test_env}');
    console.log('Environmnet Json file : ${envPath}');
    console.log('Test Paraments json file: ${testParametersPath}');

<<<<<<< HEAD
}
=======
}


>>>>>>> origin/pageclass
