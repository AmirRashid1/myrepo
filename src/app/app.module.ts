import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Data } from './Data.component';
import { CourseComponent } from './course.component';
import { PropComponent } from './prop.component';
import { ListComponent } from './list.component';
import { clazzComponent } from './clazz.component';
import {clazzsComponent} from './clazzs.component';
import { EventComponent } from './event.component';
import { keyeventCompo } from './keyevent.component';
import { dirctsComponent } from './dircts.component';
import { dirComponent } from './direct.component';
import {btspComponent} from './btsrp.component';
import {AppInpt} from './inputfil.component';
import {ClsCompo} from './cls.component';
import {forsCompo} from './fors.component';
import {TableComponenet} from './table.component';
import {AppifsComponent} from './ifs.component';
import {tempCompo} from './temp.component';
import { FormsModule } from '@angular/forms';
import {ngsCompo} from './ngs.component';
import { bindCompo } from './binding.component';
import {AppllComponent, BankComponent} from './Apis.component';
import {emmitComponent} from './event-emmit.component';
import { PipeComponent } from './pipe.component';
import {MypipeComponent} from './myPip.component'
import {myPip} from './myPip.pipe';
import {NewPipecomp} from './newpipe.component';
import {NewPipe} from './newpipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Data,
    CourseComponent,
    PropComponent,
    ListComponent,
    clazzComponent,
    clazzsComponent,
    EventComponent,
    keyeventCompo,
    dirComponent,
    dirctsComponent,
    btspComponent,
    AppInpt,
    ClsCompo,
    forsCompo,
    TableComponenet,
    AppifsComponent,
    tempCompo,
    ngsCompo,
    bindCompo,
    AppllComponent,
    BankComponent,
    emmitComponent,
    PipeComponent,
    MypipeComponent,
    myPip,
    NewPipecomp,
    NewPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
