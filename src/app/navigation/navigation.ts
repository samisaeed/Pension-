import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashBoard',
        title    : 'DashBoard',
        type     : 'item',
        icon     : 'dashboard',
        url      : '/dashboard'
    },
    {
        id       : 'registration',
        title    : 'Registration',
        type     : 'collapsable',
        icon     : 'lock',
        children : [
            {
                id   : 'company registration',
                title: 'Company Registration',
                type : 'item',
                url  : '/setup/company-registration'
            },
        ]
    },
];
