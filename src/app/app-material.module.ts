import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    exports: [
        MatTableModule,
        CdkTableModule
    ]
  })
export class AppMaterialModule {}