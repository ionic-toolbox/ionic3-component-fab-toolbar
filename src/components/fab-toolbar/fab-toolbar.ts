import { Component, ElementRef, Input, Renderer } from '@angular/core';

@Component({
	selector: 'fab-toolbar',
	templateUrl: 'fab-toolbar.html'
})

export class FabToolbar {

	public active: boolean = false;
	constructor(public el: ElementRef, public renderer: Renderer) { }


	@Input() position: string = 'left';
	@Input() color: string = 'secondary';
	@Input() icon: string = 'more';
	@Input() cssClass: string = '';
	@Input() enableBackdropDismiss: boolean = true;
	@Input() buttons: Array<any> = [];

	ngOnInit() {
		this.renderer.setElementClass(this.el.nativeElement, this.position, true)
	}
	public onClick(event, button: any): void {
		// We are listening to click event on document in order to be able to close button on backdrop click
		// Therefore we need to check if user clicked on our component or outside
		if (!event && !button) {
			// clicked on backdrop
			if (this.enableBackdropDismiss === true && this.active) {
				this.closeButton();
				return;
			}

		}
		if (this.el.nativeElement.contains(event.target)) {
			// User has clicked on our component. Check if he clicked on sub button or no.
			if (button) {
				let shouldDismiss = true;
				if (button.handler) {
					// a handler has been provided, execute it
					if (button.handler() === false) {
						// if the return value of the handler is false then do not dismiss
						shouldDismiss = false;
					}
				}

				if (shouldDismiss) {
					setTimeout(() => {
						this.closeButton();
					}, 10);
				}
			} else {
				if (!this.active) this.openButton();
			}
		} else {
			if (this.enableBackdropDismiss === true && this.active) {
				this.closeButton();
			}
		}
	}

	public get width() {
		let width = window.innerWidth / 56 * 2;
		return 'scale(' + width + ')';
	}

	public openButton(): void {
		this.renderer.setElementClass(this.el.nativeElement, 'activated', true);
		setTimeout(() => {
			this.renderer.setElementClass(this.el.nativeElement, 'closed', false)
			this.renderer.setElementClass(this.el.nativeElement, 'opened', true);
		}, 400);
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
		this.active = true;
	}

	public closeButton(): void {
		this.renderer.setElementClass(this.el.nativeElement, 'activated', false);
		setTimeout(() => {
			this.renderer.setElementClass(this.el.nativeElement, 'opened', false)
			this.renderer.setElementClass(this.el.nativeElement, 'closed', true);
			this.renderer.setElementStyle(this.el.nativeElement, 'width', '68px');
		}, 400);
		this.active = false;
	}
}