import { Component, Input } from '@angular/core';

@Component({
    selector: '[manapool]',
    template: `
	    <div (click)="increment()" (contextmenu)="decrement()">
	        <div [ngClass]="manaColorClass()" class="ms ms-cost ms-shadow ms-2x"></div>
	        <div class="mana-pool-counter ms ms-0" [ngClass]="manaNumber()"></div>
	    </div>`,
     styles: [ `
     	.ms.ms-cost { position: relative; }
		.mana-pool-counter {
		    position: relative;
		    color: white;
		    left: 10px;
		    top: -25px;
		}` ]
    
})

export class ManapoolComponent {
	@Input('manapool') manaColor: string;
	manaInPool: number = 0;

	public manaColorClass(): string {
		return `ms-${this.manaColor.toLowerCase()}`;
	}

	public manaNumber(): string {
		return `ms-${this.manaInPool}`;
	}

	public increment(): void {
		this.manaInPool++;
	}

	public decrement(): boolean {
		this.manaInPool--;
		return false;
	}
}
