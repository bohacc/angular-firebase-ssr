import { Component, OnInit } from '@angular/core';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*ssrFirestoreDoc(path: string) {
    const exists = this.state.get(ANIMAL_KEY, {} as any);
    return this.afs.doc<any>(path).valueChanges().pipe(
      tap(animal => {
        this.state.set(ANIMAL_KEY, animal)
        this.seo.generateTags({
          title: animal.name,
          description: animal.bio,
          image: animal.imgURL
        });
      }),
      startWith(exists)
    );
  }*/

}
