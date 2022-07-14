import {Pipe, PipeTransform} from '@angular/core';
import {IBoard} from "@shared/interfaces/board.interface";

@Pipe({
  name: 'favoriteHeader'
})
export class FavoriteHeaderPipe implements PipeTransform {

  transform(items: IBoard[]) {
    return !!items.some(item => item.isFavorite === true);
  }
}
