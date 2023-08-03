export const paginationCode = [
    {
        code: {
            html: `<reloadly-pagination [page]="page" [size]="size" [total]="total"
(changePage)="changePage($event)"></reloadly-pagination>`,
            ts: `page: number = 1;
size: number = 3;
total: number = 11;
data = Array.from(Array(11).keys());

ngOnInit() {
    this.paginatedData = this.data.slice(0, this.size);
}

changePage(event: any) {
    this.page = event.page;
    //demo
    this.paginatedData = this.data.slice((this.page - 1) * this.size, this.page * this.size);
    //server side pagination
    this.apiService.getData({page: this.page, perPage: this.size}).subscribe((resp) => this.paginatedData = resp);
}`
        }
    }
]
