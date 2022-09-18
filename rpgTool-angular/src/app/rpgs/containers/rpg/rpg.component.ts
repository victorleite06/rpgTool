import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Rpg } from '../../model/rpg';
import { RpgService } from '../../services/rpg.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  rpgs$: Observable<Rpg[]> | null = null

  constructor(private rpgsService: RpgService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) {
      this.refresh()
    }

    refresh(){
      this.rpgs$ = this.rpgsService.list().pipe(
        catchError(error => {
          this.onError('Erro ao carregar os RPGs.')
          return of([])
        })
      )
     }

     onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

    open(rpg: Rpg){
      this.router.navigate([rpg.name], {relativeTo: this.route})
    }

    ngOnInit(): void {
    }

}
