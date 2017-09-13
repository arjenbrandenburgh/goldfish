import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zoneplaceholder-component',
    template: `
        <strong>{{labelText}}</strong> (<span>{{zoneArray.length}}</span>)
        <div class="zone-placeholder card-placeholder" [ngClass]="{'deck-placeholder' : isLibrary}" [dragula]='"first-bag"' [dragulaModel]="zoneArray">
            <div class="mtg-card" *ngFor="let card of zoneArray">
                <img *ngIf="!isLibrary" [src]="card.image || card.lowest_print.image" />
                <img *ngIf="isLibrary" src="/assets/backside.jpg" (dblclick)="drawCard()"/>
            </div>
        </div>`,
     styles: [ `
		.zone-placeholder {
		    width: 125px;
		    height: 172px;
		    cursor: pointer;
		}

		.deck-placeholder {
			overflow:hidden;
		}
	` ]
    
})

export class ZonePlaceholderComponent {
	@Input() labelText: string;
	@Input() zoneArray: any[] = [];
	@Output() onAction: EventEmitter<string> = new EventEmitter<string>();

	public drawCard(): any {
		this.onAction.emit('draw');
	}

	public isLibrary(): boolean {
		return this.labelText === 'Library';
	}
}
