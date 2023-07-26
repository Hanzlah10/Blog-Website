import { Component, Renderer2 } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {


  categoryArray: any
  constructor(private categoryService : CategoriesService,private renderer: Renderer2){
    this.categoryService.loadData().subscribe((val)=>{
        this.categoryArray = val
    })
  }
  isNavbarCollapsed: boolean = true;

  // collapseNavbar() {
  //   this.isNavbarCollapsed = !this.isNavbarCollapsed;
  // }

  // closeNavbar() {
  //   this.isNavbarCollapsed = true;
  //   const navbarToggler = document.querySelector('.navbar-toggler');
  //   this.renderer.removeClass(navbarToggler, 'collapsed');
  // }

}
