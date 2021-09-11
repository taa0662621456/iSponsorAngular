import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProjectComponent } from './project/project.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ViewComponent } from './view/view.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { CategoryComponent } from './category/category.component';
import { CommissionComponent } from './commission/commission.component';
import { EventComponent } from './event/event.component';
import { FolderComponent } from './folder/folder.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { TagComponent } from './tag/tag.component';
import { MomentPipe } from './moment.pipe';
import {HttpClient} from "@angular/common/http";


const appRoutes = [
  // {path: '', component: ProjectComponent}, //TODO: HomePage
  {path: 'products', component: ProductComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'vendors', component: VendorComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'attachments', component: AttachmentComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'commissions', component: CommissionComponent},
  {path: 'folders', component: FolderComponent},
  {path: 'messages', component: MessageComponent},
  // {path: '**', component: NotFoundComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    ProjectComponent,
    ProductComponent,
    OrderComponent,
    ViewComponent,
    AttachmentComponent,
    CategoryComponent,
    CommissionComponent,
    EventComponent,
    FolderComponent,
    MenuComponent,
    MessageComponent,
    TagComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
