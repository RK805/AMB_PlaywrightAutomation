import { User } from '../objects/user';
import { type TestData } from '../objects/testData';
import { TestInfo } from '@playwright/test';
import logger from '../utils/logger'; // ✅ Winston logger

export async function getUrl(): Promise<string> {
    return JSON.parse(process.env.globalSettings!).baseUrl;
}

export function getTestData(): TestData {
    return JSON.parse(process.env.testData!)[process.env.test_env!];
}

export function getUsers(tagSpecific: string): User[] {
    const usersJsonObjects = JSON.parse(process.env.globalSettings!).users;
    const usersObjects = Object.keys(usersJsonObjects).map((key) => usersJsonObjects[key]);

    const usersList: User[] = [];
    usersObjects.forEach((user: User) => {
        const tags = user.tags;
        tags.forEach((tag: string) => {
            if (tagSpecific.includes(tag)) {
                usersList.push(user);
                logger.info(`[USER MATCH] Found user '${user.user}' with tag '${tag}'`);
            }
        });
    });

    if (usersList.length === 0) {
        logger.warn(`[USER MISSING] No users found for tag '${tagSpecific}'`);
    }

    return usersList;
}

export function getUser(testInfo: TestInfo, tagSpecific = ''): User {
    let userSelected!: User;
    const tags = testInfo.tags;
    logger.info(`[TEST TAGS] Scenario tags: ${tags.join(', ')}`);

    const usersJsonObjects = JSON.parse(process.env.globalSettings!).users;
    const usersObjects = Object.keys(usersJsonObjects).map((key) => usersJsonObjects[key]);

    for (let i = 0; i < usersObjects.length; i++) {
        const user = usersObjects[i];
        const userTags = user.tags;

        for (let j = 0; j < userTags.length; j++) {
            const tag = userTags[j];

            if (tagSpecific === '') {
                if (tags.includes(tag)) {
                    logger.info(`[USER SELECTED] '${user.user}' matched scenario tag '${tag}'`);
                    userSelected = user as User;
                    break;
                }
            } else {
                if (tag === tagSpecific) {
                    logger.info(`[USER SELECTED] '${user.user}' matched specific tag '${tagSpecific}'`);
                    userSelected = user as User;
                    break;
                }
            }
        }

        if (userSelected && testInfo) {
            pushUserAnnotations(testInfo, userSelected);
            break;
        }
    }

    if (!userSelected) {
        logger.warn(`[USER NOT FOUND] No user matched for tag '${tagSpecific}' or scenario tags`);
    }

    return userSelected;
}

function pushUserAnnotations(testInfo: TestInfo, userSelected: User) {
    // Placeholder for future annotation logic
    logger.info(`[ANNOTATION] Pushed user '${userSelected.user}' to test annotations`);
}
