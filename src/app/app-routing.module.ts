import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'category/:name/:id', component: SingleCategoryComponent },
    { path: 'post/:id', component: SinglePostComponent},
    { path: 'category/:name/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'category/:name/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    { path: 'post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id/post/:id', component: SinglePostComponent },
    {path:'about',component: AboutUsComponent},
    // {path:'contact',component: ContactUsComponent},
    {path:'terms',component: TermsAndConditionComponent},
    {path:'**',component: ErrorComponent }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
