import { User } from '../objects/user';
import { type TestData } from '../objects/testData';
import { TestInfo } from '@playwright/test';

export async function getUrl(): Promise<string> {
    return JSON.parse(process.env.globalSettings!).baseUrl;
}

export function getTestData(): TestData {
    return JSON.parse(process.env.testData!)[process.env.test_env!]; 1
}

export function getUser(testInfo: TestInfo, tagSpecific = '') {
    let userSelected!: User;
    const tags = testInfo.tags;
    console.log('Tags in the scenario: ${tags}');
    const userJsonObjects = JSON.parse(process.env.gloabalSettings!).users;
    const usersObjects = Object.keys(userJsonObjects).map((key) => userJsonObjects[key]);
    for (let i = 0; i < usersObjects.length; i++) {
        const user = usersObjects[i];
        const userTags = user.tags;
        for (let i = 0; i < userTags.length; i++) {
            const tag = userTags[i];
            if (tagSpecific === ''){
                if (tags.includes(tag)){
                    console.log('user selected: ${user.user}');
                    console.log('Tags: ${userTags}');
                    userSelected = user as User;
                    break;
                }
            } else {
                if (tag == tagSpecific) {
                    console.log('user selected: ${user.user}');
                    console.log('Tags: ${userTags}');
                    userSelected = user as User;
                    break;
                }
            }
        }
                if(userSelected && testInfo){
                    pushUserAnnotataions(testInfo, userSelected);
                    break;
                }
            }
                if(userSelected === null){
                    console.log('The user was not found for the test.');
                }
                return userSelected;
                }

export async function pushUserAnnotataions(testInfo: TestInfo, userSelected: User): Promise<void> {
    testInfo.annotations.push(
        {
            type: 'User',
            description: 'userSelected.user',
        },
        {
            type: 'Password',
            description: 'userSelected.password',
        },
    );
}