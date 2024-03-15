import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticalComponent } from './latest-artical/latest-artical.component';
import { FeaturedArticalComponent } from './featured-artical/featured-artical.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticalComponent,
    FeaturedArticalComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LatestArticalComponent
  ]
})
export class ArticlesModule { }
