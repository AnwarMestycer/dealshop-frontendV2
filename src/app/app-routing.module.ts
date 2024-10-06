import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/services/auth.guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
