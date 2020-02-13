import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {faAlignJustify, faArrowLeft, faArrowRight, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpclient';
  private articles = [];
  private search = '';
  private back = false;
  private nothing = '';
  faSearch = faSearch;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  private adresa = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-13&sortBy=publishedAt&apiKey=fddabefe215a48b0a93f0f151dc55caf\n';

  clickedButton() {
    this.back = true;
    this.adresa = 'https://newsapi.org/v2/everything?q=' + this.search + '&from=2020-01-14&sortBy=publishedAt&apiKey=fddabefe215a48b0a93f0f151dc55caf';
    if (this.search === '') {
      this.nothing = 'Error nothing found';
    }
    console.log(this.adresa);
    this.articles = [];
    this.httpClient
      .get(this.adresa)
      .subscribe(
        (data: any) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }
  goBack() {
    window.location.reload();
  }
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(this.adresa)
      .subscribe(
        (data: any) => {
          this.articles = data['articles'];
          console.log(this.articles);
        }, (error) => {

        }
      );
  }
}


