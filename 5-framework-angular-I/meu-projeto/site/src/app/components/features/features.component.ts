import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
	@Input() public featuresData!: any;
	@Input() public bgColor: any;
	@Input() public featuresColor!: string;
	ngOnInit() {
		console.log(this.featuresData)
		// setInterval(() => console.log(this.bgColor), 1000);
	}
}
