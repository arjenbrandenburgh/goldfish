import { Component, Input } from '@angular/core';

@Component({
    selector: 'lifecounter-component',
    template: `
    	<div class="form-group">
    		<label class="control-label">{{labelText}}</label>
	    	<div class="input-group">
	            <span class="input-group-btn">
	                <button class="btn btn-danger" (click)="decrement()" type="button">
	                	<i class="fa fa-minus"></i>
	                </button>
	            </span>
	            <input type="text" class="form-control" name="life" [(ngModel)]="life">
	            <span class="input-group-btn">
	                <button class="btn btn-success" (click)="increment()" type="button">
	                	<i class="fa fa-plus"></i>
	                </button>
	            </span>
	        </div>
	    </div>`,
     styles: [ ` input { text-align: center; }` ]
    
})

export class LifecounterComponent {
	@Input() labelText: string;

	life: number = 20;

	public increment(): void {
		this.life++;
	}

	public decrement(): void {
		this.life--;
	}
}
