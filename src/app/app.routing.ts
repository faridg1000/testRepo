
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import { NewsFeedComponent } from "./features/news-feed/news-feed.component";
import { PostDetailsComponent } from "./features/post-details/post-details.component";
import { NotFoundComponent } from "./features/not-found/not-found.component";

const rootRoutes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },{
        path:'login',
        component:LoginComponent
    },{
        path:'posts',
        component:NewsFeedComponent,
    },{
        path:'posts/:id/details',
        component:PostDetailsComponent
    },{
        path:'**',
        component:NotFoundComponent
    }

]

export const routing = RouterModule.forRoot(rootRoutes);
