import {Pipe, PipeTransform} from '@angular/core';
import {IBoard} from "@shared/interfaces/board.interface";

@Pipe({
  name: 'favoriteBoards'
})
export class FavoriteBoardsPipe implements PipeTransform {

  transform(items: IBoard[]): IBoard[] {

    return [...items].sort((a, b) => {
      if (a.boardName < b.boardName)
        return -1;
      if (a.boardName > b.boardName)
        return 1;
      return 0;
    }).filter(item => item.isFavorite === true)

  }

}
