import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
    name: any;
    total: number;
    day1: any;
    day2: any;
    day3: any;
    day4: any;
    day5: any;
    day6: any;
    day7: any;
    day8: any;
    day9: any;
    day10: any;
    day11: any;
    day12: any;
    day13: any;
    day14: any;
    day15: any;
    day16: any;
    day17: any;
    day18: any;
    day19: any;
    day20: any;
    day21: any;
    day22: any;
    day23: any;
    day24: any;
    day25: any;
    day26: any;
    day27: any;
    day28: any;
    day29: any;
    day30: any;
    day31: any;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
    selector: 'app-not-allowed',
    templateUrl: './not-allowed.component.html',
    styleUrls: ['./not-allowed.component.scss']
})
export class NotAllowedComponent implements OnInit {

    displayedColumns: string[] = [];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    tables = [0];

    objecData = {
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        day6: '',
        day7: '',
        day8: '',
        day9: '',
        day10: '',
        day11: '',
        day12: '',
        day13: '',
        day14: '',
        day15: '',
        day16: '',
        day17: '',
        day18: '',
        day19: '',
        day20: '',
        day21: '',
        day22: '',
        day23: '',
        day24: '',
        day25: '',
        day26: '',
        day27: '',
        day28: '',
        day29: '',
        day30: '',
        day31: '',
    };
    data = [
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 1,
                    title: "Ko phép"
                },
                {
                    day: 2,
                    title: "Ko phép"
                },
                {
                    day: 3,
                    title: "Ko phép"
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 4,
                    title: "Ko phép"
                },
                {
                    day: 5,
                    title: "Ko phép"
                },
                {
                    day: 6,
                    title: "Ko phép"
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép"
                },
                {
                    day: 15,
                    title: "Ko phép"
                },
                {
                    day: 5,
                    title: "Ko phép"
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 20,
                    title: "Ko phép",
                },
                {
                    day: 30,
                    title: "Ko phép",
                },
                {
                    day: 25,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 7,
                    title: "Ko phép",
                },
                {
                    day: 9,
                    title: "Ko phép",
                },
                {
                    day: 1,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép",
                },
                {
                    day: 15,
                    title: "Ko phép",
                },
                {
                    day: 5,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 20,
                    title: "Ko phép",
                },
                {
                    day: 30,
                    title: "Ko phép",
                },
                {
                    day: 25,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 7,
                    title: "Ko phép",
                },
                {
                    day: 9,
                    title: "Ko phép",
                },
                {
                    day: 1,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép",
                },
                {
                    day: 15,
                    title: "Ko phép",
                },
                {
                    day: 5,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 20,
                    title: "Ko phép",
                },
                {
                    day: 30,
                    title: "Ko phép",
                },
                {
                    day: 25,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 7,
                    title: "Ko phép",
                },
                {
                    day: 9,
                    title: "Ko phép",
                },
                {
                    day: 1,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép",
                },
                {
                    day: 15,
                    title: "Ko phép",
                },
                {
                    day: 5,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 20,
                    title: "Ko phép",
                },
                {
                    day: 30,
                    title: "Ko phép",
                },
                {
                    day: 25,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 7,
                    title: "Ko phép",
                },
                {
                    day: 9,
                    title: "Ko phép",
                },
                {
                    day: 1,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép",
                },
                {
                    day: 15,
                    title: "Ko phép",
                },
                {
                    day: 5,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/6/23/814689/7-Giong-Meo-Dat-Nhat-10.jpg?w=720&crop=auto&scale=both',
                title: ' Phong',
            },
            total: 9,
            date: [
                {
                    day: 20,
                    title: "Ko phép",
                },
                {
                    day: 30,
                    title: "Ko phép",
                },
                {
                    day: 25,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://i.pinimg.com/originals/b3/84/98/b38498a5830bd61ccef1b54d35a7de22.jpg',
                title: ' Nam',
            },
            total: 5,
            date: [
                {
                    day: 7,
                    title: "Ko phép",
                },
                {
                    day: 9,
                    title: "Ko phép",
                },
                {
                    day: 1,
                    title: "Ko phép",
                },
            ],
        },
        {
            ...this.objecData,
            name: {
                img:
                    'https://longkhanhpets.com/wp-content/uploads/2019/08/tam-ly-loai-meo-1.jpg',
                title: ' Phương',
            },
            total: 3,
            date: [
                {
                    day: 10,
                    title: "Ko phép",
                },
                {
                    day: 15,
                    title: "Ko phép",
                },
                {
                    day: 5,
                    title: "Ko phép",
                },
            ],
        },
    ];
    constructor() {
        this.displayedColumns.length = 33;
        this.displayedColumns[0] = 'name';
        this.displayedColumns[1] = 'total';
        for (let i = 1; i < 32; i++) {
            this.displayedColumns[i + 1] = 'day' + i;
        }
    }
    dataFake = new Array(this.data.length);
    ngOnInit(): void {
        for (let i = 0; i < this.data.length; i++) {
            this.dataFake[i] = { ...this.data[i] };
            for (let j = 0; j < this.data[i].date.length; j++) {
                let dateName = 'day' + this.data[i].date[j].day;
                this.dataFake[i][dateName] = {
                    title: this.data[i].date[j].title
                };
            }
        }
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataFake);
    }

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataFake);
    }
}