import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartAppService } from './core/start-app.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule', canActivate: [StartAppService]  },
  { path: 'passport', loadChildren: './pages/passport/passport.module#PassportModule' },
  { path: 'signup', loadChildren: './pages/passport/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'category-list', loadChildren: './pages/category-list/category-list.module#CategoryListPageModule' },
  { path: 'store-name', loadChildren: './pages/setting/store-info/store-name/store-name.module#StoreNamePageModule' },
  { path: 'store-abbreviation', loadChildren: './pages/setting/store-info/store-abbreviation/store-abbreviation.module#StoreAbbreviationPageModule' },
  { path: 'store-info', loadChildren: './pages/setting/store-info/store-info.module#StoreInfoPageModule' },
  { path: 'store-keeper', loadChildren: './pages/setting/store-info/store-keeper/store-keeper.module#StoreKeeperPageModule' },
  { path: 'password', loadChildren: './pages/setting/password/password.module#PasswordPageModule' },
  { path: 'add-category', loadChildren: './pages/add-category/add-category.module#AddCategoryPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
