import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'reloadly-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    @Input() page: number = 1;
    @Input() total: number = 0;
    @Input() size: number = 10;

    @Output() changePage = new EventEmitter();
    pages: number[] = [];

    showingAll: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.page = +this.route.snapshot.queryParams['page'] ? +this.route.snapshot.queryParams['page'] : this.page
        this.size = +this.route.snapshot.queryParams['size'] ? +this.route.snapshot.queryParams['size'] : this.size
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['total'].previousValue !== undefined && (changes['total'].previousValue !== changes['total'].currentValue)) {
            this.paginate()
        }
    }

    prev() {
        if (this.page - 1 > 0) {
            this.page--;
        }
        this.router.navigate([], { queryParams: { page: this.page, size: this.size }, queryParamsHandling: 'merge' });
        this.changePage.emit({
            page: this.page,
            size: this.size,
        })
    }

    next() {
        if (this.page + 1 <= this.pages.length) {
            this.page++;
        }
        this.router.navigate([], { queryParams: { page: this.page, size: this.size }, queryParamsHandling: 'merge' });
        this.changePage.emit({
            page: this.page,
            size: this.size,
        })
    }

    goto(page: number) {
        this.page = page;
        this.router.navigate([], { queryParams: { page: this.page, size: this.size }, queryParamsHandling: 'merge' });
        this.changePage.emit({
            page: this.page,
            size: this.size,
        })
    }


    private paginate() {
        if (this.page === 1 && this.total < this.size) {
            this.showingAll = true;
            return;
        } else {
            this.showingAll = false;
        }

        const start = (this.page - 1) * this.size + 1;
        const finish = this.page * this.size;

        const pages = Math.ceil(this.total / this.size);
        if (pages > 1) {
            this.pages = this.range(1, pages); // +1
        }

    }



    getPageList(totalPages: number, page: number, maxLength: number) {

        if (maxLength < 5) return;

        const sideWidth = maxLength < 9 ? 1 : 2;
        const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        const rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            // no breaks in list
            return this.range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            // no break on left of page
            return this.range(1, maxLength - sideWidth - 1)
                .concat(0, this.range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            // no break on right of page
            return this.range(1, sideWidth)
                .concat(0, this.range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
        // Breaks on both sides
        return this.range(1, sideWidth)
            .concat(0, this.range(page - leftWidth, page + rightWidth),
                0, this.range(totalPages - sideWidth + 1, totalPages));
    }

    range(start: number, end: number, step = 1): number[] {
        return Array(Math.ceil((end - start + 1) / step)).fill(start).map((val, index) => val + index * step)
    }

}


