import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersModule } from './admin/components/customers/customers.module';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { OrdersModule } from './admin/components/orders/orders.module';
import { RecordsComponent } from './admin/components/records/records.component';
import { RecordsModule } from './admin/components/records/records.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { BasketsModule } from './ui/components/baskets/baskets.module';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "customers", loadChildren: () => import("./admin/components/customers/customers.module").then(
          module => CustomersModule)
      },
      {
        path: "records", loadChildren: () => import("./admin/components/records/records.module").then(
          module => RecordsModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then(
          module => OrdersModule)
      }
    ]
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "records", loadChildren: () => import("./ui/components/records/records.module").then(
      module => RecordsModule
    )
  },
  {
    path: "baskets", loadChildren: () => import("./ui/components/baskets/baskets.module").then(
      module => BasketsModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
