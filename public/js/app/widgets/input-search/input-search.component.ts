/**
 * Created by mlingolu on 1/31/17.
 */

import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";
import { Subscription }                                 from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'input-search',
    templateUrl: 'input-search.component.html'
})
export class InputSearchComponent implements OnInit {

    @Output() responseData :EventEmitter<any> = new EventEmitter();

    searchKey : FormControl;
    public searchResults :any = [ 'afads','fasdfasd','fasdfas'];



    constructor() {

        this.searchKey.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(term => {
                this.fetchData(term);
            });
    }

    ngOnInit() { }


    fetchData(keyword){

        console.log(keyword);

        this.responseData.emit(this.searchResults);
    }
    
}