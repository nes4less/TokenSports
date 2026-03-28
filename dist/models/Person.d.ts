import { Image } from './Image';
import { Tag } from './Tag';
export declare class Person {
    static collection: string;
    avatarImage: string | null;
    blurhash: string | null;
    cashBalance: number;
    claimToken: string | null;
    claimedAt: string | null;
    createdAt: string;
    createdBy: string | null;
    deletedAt: string | null;
    dateOfBirth: string | null;
    displayName: string | null;
    email: string | null;
    enabledRoles: string[];
    firstName: string | null;
    id: string;
    image: string | null;
    images: Image[];
    lastActiveContext: string | null;
    lastActiveRole: string | null;
    lastName: string | null;
    language: string | null;
    manualEntry: boolean;
    metadata: {
        [key: string]: string;
    };
    middleName: string | null;
    notificationPrefs: {
        [key: string]: string;
    };
    password: string | null;
    phone: string | null;
    platformBalance: number;
    profileVisibility: {
        [key: string]: string;
    };
    publicProfile: boolean;
    stripeAccountId: string | null;
    tags: Tag[];
    themeColor: string;
    themeMode: 'dark' | 'light';
    translateMode: string | null;
    updatedAt: string;
    useAvatarImage: boolean;
    useAvatarName: boolean;
    verified: boolean;
    constructor(data?: Partial<Person>);
}
//# sourceMappingURL=Person.d.ts.map