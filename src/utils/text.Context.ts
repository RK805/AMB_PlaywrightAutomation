import { User } from '../objects/user';
import { type TestData } from '../objects/testData';
import { TestInfo } from '@playwright/test';


export async function getUrl(): Promise<string> {
    return JSON.parse(process.env.globalSettings!).baseUrl;
}

export function getTestData(): TestData {
    return JSON.parse(process.env.testData!)[process.env.test_env!]
}


export function getUsers(tagSpecific: string): User[] {
    const usersJsonObjects = JSON.parse(process.env.globalSettings!).users;
    const usersObjects = Object.keys(usersJsonObjects).map((key) => usersJsonObjects[key]);

    const usersList: User[] = [];
    usersObjects.forEach((user: User) => {
        const tags = usersJsonObjects.tags;
        tags.forEach((tag) => {
            if (tagSpecific.includes(tagSpecific)) {
                usersList.push(user);
            }
        });
    });
  return usersList;
}

export function getUser(testInfo: TestInfo, tagSpecific = ''): User {
    let userSelected!: User;
    const tags = testInfo.tags;
    console.log('Tags in the scenarios: ${tags}');
    const usersJsonObjects = JSON.parse(process.env.globalSettings!).users;
    const usersObjects = Object.keys(usersJsonObjects).map((key) => usersJsonObjects[key]);

    for(let i=0; i < usersObjects.length; i++){
const user =usersObjects[i];
const userTags=user.tags;
for(let i=0; i < userTags.length; i++){
    const tag = userTags[i];
    if (tagSpecific= ''){
        if (tags.includes(tag)){
            console.log('user selected: ${user.user} ');
            console.log('Tags: ${userTags}');
            userSelected = user as User;
            break;
        }
    } else {
        if (tag == tagSpecific){
            console.log('user selected: ${user.user} ');
            console.log('Tags: ${userTags}');
            userSelected = user as User;
            break;
        }
    }
}
if(userSelected && testInfo){
    pushUserAnnotations(testInfo, userSelected);
    break;
}
    }

    if(userSelected ===null){
        console.log('The user was not found for the test')
    }
    return userSelected;
}

function pushUserAnnotations(testInfo: TestInfo, userSelected: User) {
    throw new Error('Function not implemented.');
}
