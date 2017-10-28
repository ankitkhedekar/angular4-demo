import { Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @Input() public highlight: string;

    constructor(private el: ElementRef) {

    }

    @HostListener('mouseenter')
    public onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = this.highlight || 'yellow';
    }

    @HostListener('mouseleave')
    public mouseLeave() {
        this.el.nativeElement.style.backgroundColor = null;
    }

}
