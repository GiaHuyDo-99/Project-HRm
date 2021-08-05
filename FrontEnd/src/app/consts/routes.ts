export enum Routes {
    LOGIN = '/login',
    HOME = '/home',
    EMPLOYEE = '/employee',
    WORKDAYS = '/workdays',
    SALARY = '/salary',
    INSURANCE = '/insurance',
    REPORT = '/report',
    MAP = '/map'
}

export const RoutesLink = [
    {
        path: Routes.HOME,
        name: 'Trang chủ',
        icon: 'assets/svg/hrm-icon-home.svg'
    },
    {
        path: Routes.EMPLOYEE,
        name: 'Nhân viên',
        icon: 'assets/svg/hrm-employee.svg'
    },
    {
        path: Routes.WORKDAYS,
        name: 'Công',
        icon: 'assets/svg/hrm-icon-work.svg'
    },
    {
        path: Routes.SALARY,
        name: 'Lương',
        icon: 'assets/svg/hrm-icon-salary.svg'
    },

    {
        path: Routes.INSURANCE,
        name: 'Bảo hiểm',
        icon: 'assets/svg/hrm-insurance.svg'
    },
    {
        path: Routes.REPORT,
        name: 'Báo cáo',
        icon: 'assets/svg/hrm-icon-report.svg'
    },
    {
        path: Routes.MAP,
        name: 'Bản đồ',
        icon: 'assets/svg/hrm-map.svg'
    },

];
