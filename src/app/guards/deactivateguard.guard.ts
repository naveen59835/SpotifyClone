import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateguardGuard implements CanDeactivate<RegistrationComponent> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(component.profileForm.value.name==""&&component.profileForm.value.password=="",component.profileForm.value.phoneNo=="",component.profileForm.value.email=="",component.profileForm.value.userId==""){
      return window.confirm('Are you sure you want to go back your some fields are empty');
    }
    return true;
  }

  }


