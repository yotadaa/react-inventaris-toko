import dashboardIcon from './dashboard.png';
import itemIcon from './product.png';
import userIcon from '../user.png';
import settingsIcon from '../settings.png';
import inboundIcon from '../inbox.png';
import outboundIcon from '../unpacking.png';

export const menu = [
    {
        name: 'Dashboard',
        icon: dashboardIcon,
        bg: '#E2E8F0',
        path: '/dashboard',
    },
    {
        name: 'Items',
        icon: itemIcon,
        bg: '#E2E8F0',
        path: '/items',
    },
    {
        name: 'Inbound',
        icon: inboundIcon,
        bg: '#FDBA74',
        path: '/inbound',
    },
    {
        name: 'Outbound',
        icon: outboundIcon,
        bg: '#6EE7B7',
        path: '/outbound',
    },
    {
        name: 'User',
        icon: userIcon,
        bg: '#E2E8F0',
        path: '/users',
    },
    {
        name: 'Pengaturan',
        icon: settingsIcon,
        bg: '#E2E8F0',
        path: '/settings',
    },
];

export function storeCurrentMenu(value) {
    localStorage.setItem('current-menu', value);
}

export function retrieveCurrentMenu() {
    return localStorage.getItem('current-menu');
}
