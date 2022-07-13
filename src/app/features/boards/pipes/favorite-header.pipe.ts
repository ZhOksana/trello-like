import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'favoriteHeader'
})
export class FavoriteHeaderPipe implements PipeTransform {

  transform(items: any, filter: Object) {
    return !!items.some(item => item.isFavorite === true);
  }
}
