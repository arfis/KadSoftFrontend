import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MatPaginatorIntlCustom extends MatPaginatorIntl {
  itemsPerPageLabel;
  nextPageLabel;
  previousPageLabel;
  fromLabel;
  changes: Subject<void>;

  constructor(private _translateService: TranslateService) {
    super();

    _translateService.onLangChange.subscribe(result => {
      this.itemsPerPageLabel = result.translations.itemsPerPageLabel;
      this.nextPageLabel = result.translations.nextPageLabel;
      this.previousPageLabel = result.translations.previousPageLabel;
      this.fromLabel = result.translations.fromLabel;
      this.changes.next();
    });
  }

  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.fromLabel}  ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ` z ` + length;
  };
}
