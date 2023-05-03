import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth, private cookieService: CookieService) { }
  
  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  async setUpCookies(userCredential:any) {
    const token = await userCredential.user.getIdToken();
    const expirationDate = new Date();

    expirationDate.setDate(expirationDate.getDate() + 1);
    this.cookieService.set('jwt', token, expirationDate);
  }
  async login({email,password}:any){
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    await this.setUpCookies(userCredential)
  }
  
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(this.auth, provider);
    await this.setUpCookies(userCredential)
  }
  

  logout(){
    this.cookieService.delete('jwt');
    return signOut(this.auth);
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
}
