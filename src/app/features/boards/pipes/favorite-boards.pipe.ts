import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteBoards'
})
export class FavoriteBoardsPipe implements PipeTransform {

  transform(items: any, filter: Object): any[] {

    return items.filter(item => item.isFavorite === true)

  }

}
