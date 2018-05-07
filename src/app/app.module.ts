import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LoginComponent } from './features/login/login.component';
import { NewsFeedComponent } from './features/news-feed/news-feed.component';
import { PostDetailsComponent } from './features/post-details/post-details.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FilterPipe } from './pipes/filter.pipe';
import { DeletePostComponent } from './features/delete-post/delete-post.component';
import { MdlDialogOutletModule } from '@angular-mdl/core/components/dialog-outlet/index';
import { MdlModule } from '@angular-mdl/core/components/index';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    NewsFeedComponent,
    PostDetailsComponent,
    FilterPipe,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MdlModule
  ], 
  entryComponents: [DeletePostComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
