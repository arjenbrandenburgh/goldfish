import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.styles.scss' ]
})

export class SidebarComponent {
    @Output() onAction: EventEmitter<string> = new EventEmitter<string>();
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
        event: 'untap'
    }, {
        name: 'Flip Hand',
        event: 'flip_hand'
    }, {
        name: 'Restart',
        event: 'restart',
        danger: true
    }];

    public increaseTurn(): void {
        this.currentTurn++;
    }

    public sendAction(action: string): void {
        this.onAction.emit(action);
    }
}
