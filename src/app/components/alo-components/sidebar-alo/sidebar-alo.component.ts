import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-alo',
  templateUrl: './sidebar-alo.component.html',
  styleUrls: ['./sidebar-alo.component.css']
})
export class SidebarAloComponent implements OnInit {
  @Output() changeTitleSection = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let title = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
    switch (title){
      case 'claimer': title = 'Nitro claimer'; break;
      case 'joiner': title = 'Discord joiner'; break;
      case 'opener': title = 'Link opener'; break;
      case 'supreme': title = 'Supreme ALO'; break;
      case 'home': title = 'Home'; break;
      case 'settings': title = 'Settings'; break;
    }
    this.changeTitleSection.emit(title);
  }

}
