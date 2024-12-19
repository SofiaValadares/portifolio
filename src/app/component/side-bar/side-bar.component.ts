import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  private offsetTop: number = 0; // Armazena a posição inicial do :host

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Define a posição inicial do :host (sidebar)
    this.offsetTop = this.el.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Verifica a posição de rolagem
    const currentScroll = window.scrollY;

    if (currentScroll >= this.offsetTop) {
      // Adiciona a classe 'fixed' ao :host
      this.renderer.addClass(this.el.nativeElement, 'fixed');
    }

  }
}
