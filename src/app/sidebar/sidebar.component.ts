import { Component, Output, EventEmitter } from '@angular/core';

import { SharedService } from './../services/shared.service';

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.styles.scss' ]
})

export class SidebarComponent {
    currentTurn: number = 1;

    actionButtons = [{
        name: 'Shuffle deck',
        event: 'shuffle_deck'
    }, {
        name: 'Shuffle Hand',
        event: 'shuffle_hand'
    }, {
        name: 'Start with Card',
        event: 'start_card'
    }, {
        name: 'Mulligan',
        event: 'mulligan'
    }, {
        name: 'Untap All',
        event: 'untap_all'
    }, {
        name: 'Flip Hand',
        event: 'flip_hand'
    }, {
        name: 'Restart',
        event: 'restart',
        danger: true
    }];

    constructor(private readonly _sharedService: SharedService) { }

    public increaseTurn(): void {
        this.currentTurn++;
    }

    public sendAction(action: string): void {
        this._sharedService.actionEmitter.emit(action);
    }
}
