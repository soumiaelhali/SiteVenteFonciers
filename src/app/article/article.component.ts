import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private dataService: DataService,private route: ActivatedRoute,) { }
  article: Article[] = [];
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dataService.getArticle(id).subscribe((data: Article[])=>{
      console.log(data);
      this.article = data;
    }) 
  }

}
